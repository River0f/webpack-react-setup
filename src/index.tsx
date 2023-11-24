import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutLazy } from "./pages/about/about.lazy";
import { ShopLazy } from "./pages/shop/shop.lazy";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  console.log("Root is not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"...loading"}>
            <AboutLazy />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"...loading"}>
            <ShopLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
