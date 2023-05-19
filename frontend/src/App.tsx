import { FC, lazy, Suspense, useEffect, useState } from "react";

// React Routing Dom Library
import { Route, Routes, useLocation } from "react-router-dom";

// Custom Hooks
import useResources from "./hooks/useResources";

// Components
import Container from "./components/layout/base/Container";
import Navbar from "./components/layout/elements/Navbar";
import Loader from "./components/layout/elements/Loader";

// Helpers
import { protectedRoutes } from "./helpers/constants";
import { navbarRoutes } from "./helpers/navbarRoutes";

// Configure of the SCSS
import "./styles/_style.scss";

// Dashboard Page
import HomePage from "./pages/Home/index";

// Dynamic Imports(Code Splittings)
const ReviewsPage = lazy(() => import("./pages/Reviews/index"));
const NotFoundPage = lazy(() => import("./pages/404/index"));

const App: FC = () => {
  const { pathname }: any = useLocation();
  const { getResources } = useResources();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getResources();
    const handleLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      {!isLoading ? (
        <Suspense fallback={null}>
          <Container>
            {protectedRoutes.includes(pathname) ? (
              <Navbar routes={navbarRoutes} />
            ) : null}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </Suspense>
      ) : (
        <Loader isLoad={isLoading} />
      )}
    </>
  );
};

export default App;
