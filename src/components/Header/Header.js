import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../constants/colors/colors";
import {
  ArrowDropDown,
  Call,
  FavoriteBorder,
  Home,
  LocationOn,
  Mail,
  Menu as MenuIcon,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { getFontSize } from "../../utils/responsiveFontSize";
import { globalStyles } from "../../utils/globalStyles";
import { Fonts } from "../../constants/fonts/fonts";
import { HeaderStyles } from "./HeaderStyles";
import { Images } from "../../constants/images/images";
import { HeaderCategories } from "../../constants/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const cart = useSelector((state) => state.cart.value);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      {/*  Header */}
      <Box sx={{ backgroundColor: colors.PRIMARY }}>
        <Box
          sx={{
            ...globalStyles.maxWidthContainer,
            backgroundColor: colors.PRIMARY,
            minHeight: "53px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "auto",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Call fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
              <Typography sx={HeaderStyles.blueHeaderTxt}>
                +91 8089226217
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Mail fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
              <Typography sx={HeaderStyles.blueHeaderTxt}>
                jaleel@ecommerce.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <LocationOn fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
              <Typography sx={HeaderStyles.blueHeaderTxt}>Locations</Typography>
            </Box>

            <Divider
              sx={{
                backgroundColor: colors.MAIN_WHITE,
                borderColor: colors.MAIN_WHITE,
              }}
              orientation="vertical"
              flexItem
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography sx={HeaderStyles.blueHeaderTxt}>
                $ Dollar (US)
              </Typography>
              <ArrowDropDown
                fontSize="20px"
                sx={{ color: colors.MAIN_WHITE }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography sx={HeaderStyles.blueHeaderTxt}>EN</Typography>
              <ArrowDropDown
                fontSize="20px"
                sx={{ color: colors.MAIN_WHITE }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Logo Header */}
      <Box
        sx={{
          width: "100%",
          background: colors.MAIN_WHITE,
          boxShadow: "0px 20px 39px rgba(0, 0, 0, 0.03)",
        }}
      >
        <Box
          sx={{
            ...globalStyles.maxWidthContainer,
            width: "100%",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              gap: "50px",
              overflow: "auto",
              zIndex: "10px",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <img
                style={{
                  height: getFontSize(105),
                  objectFit: "contain",
                }}
                src={Images.LOGO}
                alt="logo"
                onClick={() => navigate("/")}
              />
            </Box>

            <IconButton onClick={handleOpenUserMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              sx={{ mt: "45px", width: "200px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                sx={{ width: "200px" }}
                onClick={() => {
                  navigate("/");
                  handleCloseUserMenu();
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Home />
                  <Typography sx={{ flexGrow: 1 }} textAlign="center">
                    Home
                  </Typography>
                </Box>
              </MenuItem>

              <MenuItem
                sx={{ width: "200px" }}
                onClick={() => {
                  navigate("/cart");
                  handleCloseUserMenu();
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Badge
                    badgeContent={
                      <span style={{ color: "#fff" }}>{cart.length}</span>
                    }
                    color="primary"
                  >
                    <ShoppingCartOutlined />
                  </Badge>
                  <Typography sx={{ flexGrow: 1 }} textAlign="center">
                    Cart
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              gap: "50px",
              overflow: "auto",
              zIndex: "10px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                minHeight: "100px",
              }}
            >
              <img
                style={{
                  height: getFontSize(105),
                  objectFit: "contain",
                }}
                src={Images.LOGO}
                alt="logo"
                onClick={() => navigate("/")}
              />

              <TextField
                fullWidth
                size="medium"
                value={"Classifieds"}
                select
                sx={{
                  backgroundColor: "#F8F8F8",
                  outline: "none",
                  border: "none",
                  width: { xs: "auto", lg: getFontSize(246) },
                  height: getFontSize(70),
                }}
              >
                <MenuItem value={"Classifieds"}>Classifieds</MenuItem>
              </TextField>

              <TextField
                fullWidth
                size="medium"
                placeholder="Search here..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "#F8F8F8",
                  outline: "none",
                  border: "none",
                  width: "auto",
                  height: getFontSize(70),
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                mr: "10px",
              }}
            >
              <Tooltip title={"Home"}>
                <IconButton onClick={() => navigate("/")}>
                  <Home fontSize="20px" />
                </IconButton>
              </Tooltip>

              <IconButton>
                <FavoriteBorder fontSize="20px" />
              </IconButton>

              <Tooltip title={"Cart"}>
                <IconButton onClick={() => navigate("/cart")}>
                  <Badge
                    badgeContent={
                      <span style={{ color: "#fff" }}>{cart.length}</span>
                    }
                    color="primary"
                  >
                    <ShoppingCartOutlined fontSize="20px" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              overflow: "auto",
              mt: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography sx={HeaderStyles.headerCategoryTxt}>
                All categories
              </Typography>
              <ArrowDropDown
                fontSize="20px"
                sx={{ color: colors.DISABLED_TXT }}
              />
            </Box>

            {HeaderCategories.map((category) => (
              <Typography key={category} sx={HeaderStyles.headerCategoryTxt}>
                {category}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
