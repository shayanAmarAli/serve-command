import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./foundation/breakpoints";
import { fonts } from "./foundation/fontFamily";
import colors from "./foundation/colorSchemePBar";

export default extendTheme({
    breakpoints,
    fonts,
    colors: {
        black: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923", // Use the 900 color from the theme
        },
      },
});
