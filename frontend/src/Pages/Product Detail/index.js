

import React from 'react';
import HeaderProduct from '../../Components/HeaderProductDetail';
import { Grid, Box } from '@mui/material';

const ProductDetail = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={4}>
        {/* Header Section */}
        <Grid item xs={12}>
          <HeaderProduct />
        </Grid>
      
      </Grid>
    </Box>
  );
};

export default ProductDetail;
