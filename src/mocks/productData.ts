import type { Product } from '../types/product';

export const mockProduct: Product = {
  id: 1,
  title: "iPhone 14 Pro Max 256GB - Morado Espacial",
  description: `El iPhone 14 Pro Max te permite captar detalles increíbles gracias a su cámara principal de 48 MP. 
  
  Características principales:
  - Pantalla Super Retina XDR OLED de 6.7 pulgadas
  - Chip A16 Bionic
  - Sistema de cámaras Pro
  - Dynamic Island
  - Batería de larga duración
  
  Incluye:
  - Cable de USB-C a Lightning
  - Documentación
  - Pin de expulsión de SIM`,
  price: 1299999,
  images: [
    "https://http2.mlstatic.com/D_NQ_NP_2X_841787-MLA71782867320_092023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_681989-MLA71782642459_092023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_729006-MLA71782642461_092023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_997464-MLA71782642463_092023-F.webp"
  ],
  stock: 5,
  condition: "new",
  seller: {
    id: "123",
    name: "Apple Store Oficial",
    rating: 4.8,
    sales: 15420
  },
  paymentMethods: [
    {
      type: "credit_card",
      name: "Tarjeta de crédito",
      installments: [
        {
          quantity: 12,
          amount: 108333.25
        },
        {
          quantity: 6,
          amount: 216666.50
        }
      ]
    },
    {
      type: "debit_card",
      name: "Tarjeta de débito"
    },
    {
      type: "mercado_credito",
      name: "Mercado Crédito"
    }
  ],
  ratings: {
    average: 4.7,
    total: 1250
  },
  reviews: [
    {
      id: "rev1",
      user: "Juan P.",
      rating: 5,
      comment: "Excelente producto, llegó en perfectas condiciones y antes de lo esperado. La calidad de la cámara es impresionante.",
      date: "2024-03-15"
    },
    {
      id: "rev2",
      user: "María L.",
      rating: 4,
      comment: "Muy buen teléfono, aunque el precio es un poco elevado. La batería dura todo el día sin problemas.",
      date: "2024-03-10"
    },
    {
      id: "rev3",
      user: "Carlos M.",
      rating: 5,
      comment: "La mejor inversión que he hecho. La calidad de construcción es excelente y el rendimiento es espectacular.",
      date: "2024-03-05"
    }
  ]
};
