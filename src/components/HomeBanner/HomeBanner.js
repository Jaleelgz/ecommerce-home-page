import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Images } from "../../constants/images/images";
import { getFontSize } from "../../utils/responsiveFontSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";
import { globalStyles } from "../../utils/globalStyles";
import { HomeBannerStyles } from "./HomeBannerStyles";

const HomeBanner = () => {
  const { width } = useWindowDimensions();

  const RoundData = [
    {
      bold: "05",
      text: "Days",
    },
    {
      bold: "23",
      text: "Hours",
    },
    {
      bold: "59",
      text: "Minutes",
    },
    {
      bold: "35",
      text: "Seconds",
    },
  ];

  return (
    <>
      <Box sx={{ ...globalStyles.maxWidthContainer, my: "50px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#000",
            borderRadius: { xs: "10Px", md: "30px" },
            padding: { xs: 5, lg: 10 },
            gap: "50px",
            flexDirection: { xs: "column-reverse", md: "row" },
            overflow: "hidden",
          }}
        >
          <Box sx={{ flex: 2, width: "100%" }}>
            <Typography sx={globalStyles.blueSubTxt}>Categories</Typography>

            <Typography
              sx={{
                fontFamily: Fonts.POPPINS_BOLD,
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: getFontSize(60),
                lineHeight: "65px",
                color: colors.MAIN_WHITE,
                mt: "20px",
              }}
            >
              Enhance Your <br /> Music Experience
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                my: "20px",
                flexWrap: "wrap",
              }}
            >
              {RoundData.map((item) => (
                <Box key={item.text} sx={HomeBannerStyles.roundBox}>
                  <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>
                    {item.bold}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                height: "56px",
                width: { xs: "auto", md: "150px" },
                color: "#fff",
                fontWeight: "600",
                mt: "20px",
              }}
            >
              Buy Now!
            </Button>
          </Box>

          <Box
            sx={{
              flex: 3,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                height: width < 900 ? getFontSize(300) : getFontSize(400),
                objectFit: "contain",
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 60%)",
              }}
              src={Images.SPEAKER_BOX}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeBanner;
