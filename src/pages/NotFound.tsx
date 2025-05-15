
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Página não encontrada</p>
          <Link to="/" className="bg-event-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
