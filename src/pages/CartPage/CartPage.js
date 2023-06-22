import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import { globalStyles } from "../../utils/globalStyles";
import { HomePageStyles } from "../HomePage/HomePageStyles";
import Product from "../../components/Product/Product";
import { Fonts } from "../../constants/fonts/fonts";
import CartBillingTable from "../../components/CartBillingTable/CartBillingTable";
import { getFontSize } from "../../utils/responsiveFontSize";
import { KeyboardArrowRight } from "@mui/icons-material";
import { colors } from "../../constants/colors/colors";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.value);

  return (
    <Box sx={{ backgroundColor: "#f1f1f1", py: "40px" }}>
      <Box sx={{ ...globalStyles.maxWidthContainer }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "40px",
          }}
        >
          <Typography sx={HomePageStyles.headText}>Cart</Typography>
        </Box>

        {cart.length > 0 && (
          <React.Fragment>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 4, md: 7 }}
              columnSpacing={5}
            >
              {cart.map((product) => (
                <Grid key={product.name} item xs={12} md={6} lg={3} xl={2.4}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>

            <CartBillingTable />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  width: "80%",
                  height: getFontSize(70),
                  background: "#00C6D7",
                  boxShadow: "0px 11px 27px rgba(0, 198, 215, 0.35)",
                  borderRadius: "12px",
                  fontFamily: Fonts.POPPINS_BOLD,
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: getFontSize(18),
                  lineHeight: "27px",
                  color: colors.MAIN_WHITE,
                  zIndex: "10px",
                  mt: "25px",
                }}
                variant="contained"
                endIcon={<KeyboardArrowRight />}
              >
                Checkout
              </Button>
            </Box>
          </React.Fragment>
        )}

        {cart.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontFamily: Fonts.POPPINS_BOLD,
              color: "#000",
            }}
          >
            Cart empty
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
