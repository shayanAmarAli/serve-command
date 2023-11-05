import { defineStyle } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const buttonStyle = defineStyle({
  bg: "#11190C",
  borderRadius: 0,
});

const buttonTheme = defineStyleConfig({
  baseStyle: buttonStyle,
});

export const components = {
  Button: buttonTheme,
};
