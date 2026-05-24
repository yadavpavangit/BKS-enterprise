import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Products from "./pages/Products.jsx";
import ProductsCreate from "./AdminDasboard/pages/ProductsCreate.jsx";
import Admin from "./AdminDasboard/Admin.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AllProducts from "./AdminDasboard/pages/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "myAdmin",
        element: <Admin />,
      },
      {
        path: "product-create",
        element: <ProductsCreate />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
