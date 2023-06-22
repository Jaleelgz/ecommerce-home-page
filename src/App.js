import "./App.css";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Toast from "./common/Toast/Toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  const toast = useSelector((state) => state.toast.value);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {toast.visibility && <Toast />}

        <Routes>
          <Route element={<Layout />}>
            <Route exact path="cart" element={<CartPage />} />
            <Route exact path="/" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
