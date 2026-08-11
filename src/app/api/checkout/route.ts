import { NextResponse } from 'next/server';

const APPLYFY_CARD_URL = 'https://app.applyfy.com.br/api/v1/gateway/card/receive';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData, product } = body;
    
    const publicKey = process.env.APPLYFY_PUBLIC_KEY;
    const secretKey = process.env.APPLYFY_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return NextResponse.json({ error: 'Chaves de API não configuradas.' }, { status: 500 });
    }

    // Gerar identifier único
    const identifier = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Converter preço (ex: "€200.00 EUR" -> 200)
    const rawPrice = product.price.replace(/[^\d.,]/g, '').replace(',', '.');
    const amount = parseFloat(rawPrice);

    // Formatar expiry (MM/YY -> YYYY-MM)
    const [month, shortYear] = formData.cardExpiry.split('/');
    const expiresAt = shortYear ? `20${shortYear}-${month}` : '';

    const payload = {
      identifier,
      amount,
      client: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: "+34 600 000 000", 
        document: "00000000000", 
        address: {
          country: "ES", 
          zipCode: formData.zipCode || "28001", // Código postal válido de Madrid
          state: "MD", // Um dos estados válidos listados no erro (Madrid)
          city: formData.city || "Madrid",
          street: formData.address || "Calle de Alcalá",
          neighborhood: "Centro",
          number: "1",
        }
      },
      clientIp: "127.0.0.1", 
      card: {
        number: formData.cardNumber.replace(/\s/g, ''),
        owner: formData.cardName,
        expiresAt,
        cvv: formData.cardCvv,
        statementDescriptor: "IRINA TAROT"
      },
      installments: 1,
      products: [
        {
          id: product.id || "1",
          name: product.name || product.title || "Lectura de Tarot",
          quantity: 1,
          price: amount
        }
      ]
    };

    const response = await fetch(APPLYFY_CARD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-public-key': publicKey,
        'x-secret-key': secretKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || data.statusCode >= 400) {
      console.error("ApplyFy Error:", data);
      return NextResponse.json({ 
        error: data.message || 'Erro ao processar pagamento.',
        details: data.details 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      transactionId: data.transactionId,
      status: data.status,
      order: data.order
    });

  } catch (error) {
    console.error('Erro no checkout:', error);
    return NextResponse.json({ error: 'Erro interno ao processar o pagamento.' }, { status: 500 });
  }
}
