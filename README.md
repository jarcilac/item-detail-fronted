# Product Detail

This project is an implementation of a product detail view inspired by MercadoLibre, built with React and TypeScript.

## Features

- Detailed product view with images
- Price information and payment methods
- Seller details
- Ratings and reviews system
- Responsive design

## Technologies Used

- React
- TypeScript
- Material-UI
- React Router
- Axios

## Prerequisites

- Node.js (version 18 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone [REPOSITORY_URL]
   ```

2. Navigate to the project directory:
   ```bash
   cd item-detail-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:5173/product/[PRODUCT_ID]
   ```

## API Structure

The application expects an API with the following endpoint:

```
GET /api/products/:id
```

Response example:
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

## Available Scripts

- `npm run test`: Run unit tests
- `npm run coverage`: Show unit tests coverage
- `npm run dev`: Start development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally 