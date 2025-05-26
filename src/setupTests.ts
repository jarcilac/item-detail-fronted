import '@testing-library/jest-dom';
import { vi, afterEach } from 'vitest'

// Mock de fetch para las pruebas
global.fetch = vi.fn();

// Limpiar todos los mocks después de cada prueba
afterEach(() => {
  vi.clearAllMocks();
}); 