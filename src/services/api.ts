import axios from 'axios';
import type { Product } from '../types/product';
import { mockProduct } from '../mocks/productData';

const API_BASE_URL = 'http://localhost:3000/api'; // Ajusta esto según tu backend

export const getProductDetails = async (productId: string): Promise<Product> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los detalles del producto');
  }
};

export const getProductDetailsMock = async (productId: string): Promise<Product> => {
  return mockProduct;
}; 