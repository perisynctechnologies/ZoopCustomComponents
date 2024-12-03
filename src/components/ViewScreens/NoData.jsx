import React from "react";
import Box from "@mui/material/Box";
import { Button, SvgIcon, Typography } from "@mui/material";
import PlusIcon from "@untitled-ui/icons-react/build/esm/Plus";
import { NoDataSvg } from "../../assets/ImageConstant";

export const NoData = ({ title, description, bool, button, action }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        alt="No Data"
        component="img"
        src={NoDataSvg}
        sx={{
          m: 3,
          height: "auto",
          maxWidth: "100%",
          width: 250,
        }}
      />
      <Typography variant="h5" textAlign={"center"} color={"grey.700"}>
        {title}{" "}
      </Typography>
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ mt: 1, px: 2 }}
        color={"GrayText"}
      >
        {description}{" "}
      </Typography>
      {bool && (
        <Button
          startIcon={
            <SvgIcon>
              <PlusIcon />
            </SvgIcon>
          }
          variant="contained"
          sx={{ m: 2 }}
          onClick={action}
          color="primary"
        >
          {button}
        </Button>
      )}
    </Box>
  );
};
