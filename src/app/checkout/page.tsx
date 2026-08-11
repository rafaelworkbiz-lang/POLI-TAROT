'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CheckoutPage() {
  const { cartItems, cartTotal, isMounted, removeFromCart, clearCart } = useCart();
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'ES',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'country') {
      if (e.target.value === 'US') setCurrency('USD');
      else setCurrency('EUR');
    }
  };

  const exchangeRate = 1.08; // Exemplo de conversão: 1 EUR = 1.08 USD
  const finalTotal = currency === 'EUR' ? cartTotal : cartTotal * exchangeRate;
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setIsProcessing(true);

    const product = cartItems[0]; 

    try {
      // Chamando a nossa API real que construímos para ApplyFy
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          formData, 
          product: { ...product, price: finalTotal.toString() } 
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        clearCart();
      } else {
        const errorDetail = data.details && data.details.length > 0 
          ? data.details[0].message 
          : data.error;
        alert(errorDetail || 'Erro no pagamento');
      }
    } catch (error) {
      console.error('Erro na integração', error);
      alert('Falha ao processar pagamento.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isMounted) return null;

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 pt-24">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h1 className="text-3xl font-serif text-gray-900 mb-4">¡Pedido Confirmado!</h1>
          <p className="text-gray-600 mb-8">Tu pago en {currency} ha sido procesado con éxito a través de ApplyFy. Recibirás un correo con los detalles de tu compra.</p>
          <Link href="/"
            className="inline-block bg-[#0A0A0C] text-white px-8 py-3 rounded-md hover:bg-[#E5C07B] hover:text-[#0A0A0C] transition-colors font-medium">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-gray-50 pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif text-gray-900 mb-4">Tu carrito está vacío</h1>
        <Link href="/" className="text-[#E5C07B] font-medium hover:underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif text-gray-900">Finalizar Compra</h1>
          <p className="text-gray-500 mt-2">Completa tus datos para procesar el pago de forma segura con ApplyFy.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Coluna 1: Formulário */}
          <div className="lg:col-span-7">
            <form onSubmit={handleCheckout} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-100 pb-4">Datos de Facturación</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="Tus apellidos" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="correo@ejemplo.com" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">País / Región</label>
                <select required name="country" value={formData.country} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none">
                  <option value="ES">España (EUR)</option>
                  <option value="PT">Portugal (EUR)</option>
                  <option value="US">Estados Unidos (USD)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
                <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="Calle, número, piso" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                  <input required name="city" value={formData.city} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="Madrid" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal</label>
                  <input required name="zipCode" value={formData.zipCode} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="28001" />
                </div>
              </div>

              {/* Dados do Cartão (Necessário para a API da Applyfy) */}
              <h2 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-100 pb-4 pt-4">Datos de la Tarjeta</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Número de la tarjeta</label>
                <input required name="cardNumber" value={formData.cardNumber} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="0000 0000 0000 0000" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre en la tarjeta</label>
                <input required name="cardName" value={formData.cardName} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="Nombre como aparece en la tarjeta" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vencimiento (MM/YY)</label>
                  <input required name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input required name="cardCvv" value={formData.cardCvv} onChange={handleChange} type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E5C07B] focus:border-[#E5C07B] py-2 px-3 border bg-white outline-none" placeholder="123" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#0A0A0C] text-white py-4 rounded-md font-medium hover:bg-[#E5C07B] hover:text-[#0A0A0C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando Pago...
                  </span>
                ) : (
                  `Pagar Ahora - ${formatPrice(finalTotal)}`
                )}
              </button>
            </form>
          </div>

          {/* Coluna 2: Resumo do Pedido */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm sticky top-24">
              <h2 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-100 pb-4">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => {
                  const itemPriceParsed = parseFloat(item.price.replace(/[^\d.,]/g, '').replace(',', '.'));
                  const currentItemPrice = itemPriceParsed * (currency === 'USD' ? exchangeRate : 1);
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden relative">
                          <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{item.name || 'Producto'}</h3>
                          <p className="text-sm text-gray-500">Cant: {item.quantity || 1}</p>
                          <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline mt-1">Eliminar</button>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatPrice(currentItemPrice * (item.quantity || 1))}</p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Impuestos (Incluidos)</span>
                  <span>{formatPrice(0)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-900 pt-4 border-t border-gray-100 mt-4">
                  <span>Total a Pagar</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-md flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                <p className="text-xs text-gray-500">
                  Pago seguro encriptado de extremo a extremo. Los precios se muestran en {currency}.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
