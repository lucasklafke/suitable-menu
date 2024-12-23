import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme.ts";
import { ThemeProvider } from "@mui/styles";
import { SWRConfig } from "swr";
import { SearchProvider } from "./contexts/searchContext.tsx";
import { CartProvider } from "./contexts/cartContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const fetcher = (url: string) =>
  fetch(`${import.meta.env.VITE_API_URL}${url}`).then((res) => {
    if (!res.ok) {
      throw new Error("Erro ao buscar os dados");
    }
    return res.json();
  });

createRoot(document.getElementById("root")!).render(
  <SWRConfig
    value={{
      fetcher,
      onError: (error) => {
        console.error("Erro no SWR:", error);
      },
    }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />

      <CartProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartProvider>
    </ThemeProvider>
  </SWRConfig>
);
