import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    app: {
      bg: "brand.200",
    },
  },

  colors: {
    brand: {
      100: "#f2655a",
      200: "#fbd015",
      300: "#f69d98",
      400: "c0e5e0",
      500: "DFF2EF",
    },
  },
});

export default theme;
