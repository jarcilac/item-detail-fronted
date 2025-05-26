# Detalle de Producto - Estilo MercadoLibre

Este proyecto es una implementación del detalle de producto inspirada construida con React y TypeScript.

## Características

- Vista detallada del producto con imágenes
- Información del precio y métodos de pago
- Detalles del vendedor
- Sistema de calificaciones y reseñas
- Diseño responsive

## Tecnologías Utilizadas

- React
- TypeScript
- Material-UI
- React Router
- Axios

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm

## Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd item-detail-frontend
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre tu navegador y visita:
   ```
   http://localhost:5173/product/[ID_DEL_PRODUCTO]
   ```

## Estructura de la API

La aplicación espera una API con el siguiente endpoint:

```
GET /api/products/:id
```

Ejemplo de respuesta:
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": number,
  "images": ["string"],
  "stock": number,
  "condition": "new" | "used",
  "seller": {
    "id": "string",
    "name": "string",
    "rating": number,
    "sales": number
  },
  "paymentMethods": [
    {
      "type": "string",
      "name": "string",
      "installments": [
        {
          "quantity": number,
          "amount": number
        }
      ]
    }
  ],
  "ratings": {
    "average": number,
    "total": number
  },
  "reviews": [
    {
      "id": "string",
      "user": "string",
      "rating": number,
      "comment": "string",
      "date": "string"
    }
  ]
}
```

## Scripts Disponibles

- `npm run test`: Corre los unit tests
- `npm run test`: Muestra el coverage de los unit tests
- `npm run dev`: Inicia el servidor de desarrollo 
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción localmente 