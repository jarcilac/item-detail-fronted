import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/grid';
import { Box, Container, Typography, Rating, Chip, Divider, Button } from '@mui/material';
import { LocalShipping, CreditCard, Store } from '@mui/icons-material';
import type { Product } from '../types/product';
import { getProductDetailsMock } from '../services/api';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const data = await getProductDetailsMock(id);
          setProduct(data);
          setMainImage(data.images[0]);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Typography>Cargando...</Typography>;
  if (!product) return <Typography>Producto no encontrado</Typography>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Imágenes del producto */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: '100px' }}>
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  sx={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    mb: 1,
                    border: mainImage === img ? '2px solid #3483fa' : '1px solid #ddd',
                  }}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </Box>
            <Box
              component="img"
              src={mainImage}
              sx={{
                width: 'calc(100% - 120px)',
                height: '500px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>

        {/* Información del producto */}
        <Grid item xs={12} md={4}>
          <Box>
            <Chip
              label={product.condition === 'new' ? 'Nuevo' : 'Usado'}
              size="small"
              sx={{ mb: 1 }}
            />
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              {product.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.ratings.average} readOnly precision={0.5} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({product.ratings.total} calificaciones)
              </Typography>
            </Box>
            <Typography variant="h4" component="p" sx={{ color: '#333', mb: 3 }}>
              ${product.price.toLocaleString()}
            </Typography>

            {/* Métodos de pago */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Medios de pago
              </Typography>
              {product.paymentMethods.map((method, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CreditCard sx={{ mr: 1 }} />
                  <Typography>{method.name}</Typography>
                </Box>
              ))}
            </Box>

            {/* Información de envío */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Información de envío
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocalShipping sx={{ mr: 1 }} />
                <Typography>Envío a todo el país</Typography>
              </Box>
            </Box>

            {/* Stock */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1">
                Stock disponible: {product.stock} unidades
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#3483fa',
                '&:hover': {
                  backgroundColor: '#2968c8',
                },
                mb: 2,
              }}
            >
              Comprar ahora
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#85b0f2',
                '&:hover': {
                  backgroundColor: '#6e9ee0',
                },
              }}
            >
              Agregar al carrito
            </Button>
          </Box>
        </Grid>

        {/* Descripción del producto */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Descripción
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {product.description}
          </Typography>
        </Grid>

        {/* Información del vendedor */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Información del vendedor
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Store sx={{ mr: 1 }} />
            <Box>
              <Typography variant="h6">{product.seller.name}</Typography>
              <Rating value={product.seller.rating} readOnly precision={0.5} />
              <Typography variant="body2">
                {product.seller.sales} ventas realizadas
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Reseñas */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Opiniones sobre el producto
          </Typography>
          {product.reviews.map((review) => (
            <Box key={review.id} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={review.rating} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {review.user}
                </Typography>
              </Box>
              <Typography variant="body1">{review.comment}</Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(review.date).toLocaleDateString()}
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}; 