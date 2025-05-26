import { render, screen, waitFor } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { ProductDetail } from '../ProductDetail';
import { mockProduct } from '../../mocks/productData';
import * as api from '../../services/api';

// Mock del módulo de API
vi.mock('../../services/api');

const renderWithRouter = () => {
  return render(
    <MemoryRouter initialEntries={['/product/1']}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProductDetail Component', () => {
  beforeEach(() => {
    vi.mocked(api.getProductDetailsMock).mockResolvedValue(mockProduct);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('muestra la información del vendedor', async () => {
    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    });

    expect(screen.getByText(mockProduct.seller.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.seller.sales} ventas realizadas`)).toBeInTheDocument();
  });

  it('muestra los métodos de pago', async () => {
    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByText('Medios de pago')).toBeInTheDocument();
    });

    mockProduct.paymentMethods.forEach(method => {
      expect(screen.getByText(method.name)).toBeInTheDocument();
    });
  });

  it('muestra las reseñas de los usuarios', async () => {
    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByText('Opiniones sobre el producto')).toBeInTheDocument();
    });

    mockProduct.reviews.forEach(review => {
      expect(screen.getByText(review.comment)).toBeInTheDocument();
      expect(screen.getByText(review.user)).toBeInTheDocument();
    });
  });

  it('maneja errores en la carga de datos', async () => {
    vi.mocked(api.getProductDetailsMock).mockRejectedValueOnce(new Error('Error de API'));
    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByText('Producto no encontrado')).toBeInTheDocument();
    });
  });
}); 