import React from 'react';
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Rating,
  Divider,
  Stack,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderProduct = () => {
  return (
    <Box component="section" sx={{ py: 0, px: 2 }}>
      <Box maxWidth="lg" mx="auto">
        {/* Responsive Grid Layout */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', lg: '1fr 1fr' }}
          gap={{ xs: 4, lg: 8 }}
          alignItems="center"
        >
          {/* Product Image Section */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <CardMedia
              component="img"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt="Apple iMac"
              sx={{
                width: '100%',
                maxWidth: { xs: '300px', md: '400px', lg: '500px' },
                borderRadius: 2,
                boxShadow: 2,
              }}
            />
          </Box>

          {/* Product Details Section */}
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.primary"
              sx={{ lineHeight: 1.5 }}
            >
              Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
              Mac OS, Pink
            </Typography>

            {/* Price and Rating */}
            <Box mt={4} display="flex" flexWrap="wrap" alignItems="center" gap={2}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="text.primary"
                sx={{ flexShrink: 0 }}
              >
                $1,249.99
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating value={5} readOnly size="small" sx={{ color: 'yellow.main' }} />
                <Typography variant="body2" color="text.secondary">
                  (5.0)
                </Typography>
                <Button
                  href="#"
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    p: 0,
                    fontSize: '0.875rem',
                    color: 'primary.main',
                  }}
                >
                  345 Reviews
                </Button>
              </Stack>
            </Box>

            {/* Action Buttons */}
            <Box
              mt={6}
              display="flex"
              flexWrap="wrap"
              gap={2}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
            >
              <Button
                href="#"
                variant="outlined"
                color="primary"
                startIcon={<FavoriteIcon sx={{ color: 'red' }} />}
                sx={{
                  flexGrow: 1,
                  minWidth: { xs: '150px', sm: 'auto' },
                }}
              >
                Add to favorites
              </Button>
              <Button
                href="#"
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon sx={{ color: 'white' }} />}
                sx={{
                  flexGrow: 1,
                  minWidth: { xs: '150px', sm: 'auto' },
                }}
              >
                Add to cart
              </Button>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 6 }} />

            {/* Product Descriptions */}
            <Typography variant="body1" color="text.secondary" paragraph>
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderProduct;
