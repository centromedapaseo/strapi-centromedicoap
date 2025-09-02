import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Página no encontrada</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button asChild variant="medical-primary" size="lg">
          <a href="/">Volver al Inicio</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
