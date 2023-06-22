import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFontSize } from "../../utils/responsiveFontSize";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";
import { globalStyles } from "../../utils/globalStyles";
import { ShoppingCart, Star } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/slices/ProductsSlice";
import { addToCart, removeFromCart } from "../../store/slices/CartSlice";
import { showToast } from "../../store/slices/ToastSlice";
import { ToastModes } from "../../enum/ToastModes";
import Loader from "../../common/Loader/Loader";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [loading, setLoading] = useState(false);

  const onAddToCart = async () => {
    setLoading(true);

    dispatch(addProductToCart(product));
    dispatch(addToCart(product));
    dispatch(
      showToast({
        mode: ToastModes.success,
        text: "Added to cart",
      })
    );

    setLoading(false);
  };

  const onRemoveFromCart = async () => {
    setLoading(true);

    dispatch(removeFromCart(product));
    dispatch(removeProductFromCart(product));
    dispatch(showToast({ mode: ToastModes.success, text: "Success" }));

    setLoading(false);
  };

  return (
    <React.Fragment>
      {loading && <Loader />}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: getFontSize(117), objectFit: "contain" }}
        />
        <Box sx={{ width: { xs: "200px", md: "100%" }, maxWidth: { xs: "100%", md: "100%" } }}>
          <Typography
            sx={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: getFontSize(16),
              lineHeight: "24px",
              color: colors.MAIN_BLACK,
              height: "50px",
            }}
          >
            {product.name}
          </Typography>

          <Typography
            sx={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              color: colors.DISABLED_TXT,
              mt: "5px",
            }}
          >
            Stock : {product.stock}
          </Typography>

          <Typography sx={{ mt: "15px", ...globalStyles.blueSubTxt }}>
            ${product.price}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {[1, 2, 3, 4].map((count) => (
              <Star
                key={count}
                sx={{ color: colors.PRIMARY, fontSize: "14px" }}
              />
            ))}

            <Typography
              sx={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "24px",
                color: "#8D8D8D",
              }}
            >
              ({product.rating})
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mt: "5px",
            }}
          >
            {cart.find((cartItem) => cartItem.name === product.name) ? (
              <React.Fragment>
                <Button
                  sx={{ width: "10px", minWidth: "10px" }}
                  variant="outlined"
                  onClick={() => onRemoveFromCart()}
                >
                  -
                </Button>

                <Typography sx={{ width: "30px", textAlign: "center" }}>
                  {
                    cart.find((cartItem) => cartItem.name === product.name)
                      ?.quantity
                  }
                </Typography>

                <Button
                  sx={{ width: "10px", minWidth: "10px" }}
                  variant="outlined"
                  disabled={product.stock === "0"}
                  onClick={() => onAddToCart()}
                >
                  +
                </Button>
              </React.Fragment>
            ) : (
              <Button
                startIcon={<ShoppingCart sx={{ color: "#fff" }} />}
                sx={{ textTransform: "none", color: "#fff" }}
                variant="contained"
                disabled={product.stock === "0"}
                onClick={() => onAddToCart()}
              >
                Add to cart
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Product;
