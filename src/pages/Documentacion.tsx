import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hospital-exterior.jpg";

const Documentacion = () => {
  return (
    <div className="bg-gradient-to-b from-background via-background to-muted/40 text-foreground">
      {/* Encabezado */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <img
          src={heroImage}
          alt="Fachada del Centro Médico Apaseo"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="container relative mx-auto px-4 text-white flex flex-col items-start gap-6 max-w-4xl">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 uppercase tracking-wider">
            Uso interno
          </Badge>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            GUÍA PAGINA WEB CENTRO MEDICO APASEO
          </h1>
          <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
            Manual para actualizar la página con Lovable y Strapi. Sigue estos pasos sencillos y verifica el sitio público al terminar tus cambios.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="medical-white"
              className="text-base font-semibold"
            >
              <a
                href="https://special-nurture-955505aa13.strapiapp.com/admin/auth/login"
                target="_blank"
                rel="noreferrer"
              >
                Entrar a Strapi
              </a>
            </Button>
            <Button
              asChild
              variant="medical-secondary"
              className="text-base font-semibold bg-primary/90 text-white hover:bg-primary"
            >
              <a href="https://lovable.dev/projects/f7ff05e1-c7dd-4d6a-9d5b-605ed28e99b0" target="_blank" rel="noreferrer">
                Abrir proyecto en Lovable
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-base font-semibold border-white/70 text-white hover:bg-white/10"
            >
              <a href="/" target="_blank" rel="noreferrer">
                Ir al sitio público
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Uso de Strapi */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-4">Strapi</Badge>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Actualiza la información con Strapi</h2>
          <p className="text-muted-foreground mb-6">
            Strapi es el panel donde viven las promociones, médicos y medicamentos. Sigue los pasos en orden para crear o editar registros.
          </p>
          <div className="bg-white shadow-xl rounded-3xl border border-border/60 p-6 md:p-10 space-y-6">
            <ol className="list-decimal list-inside space-y-6 text-muted-foreground text-base">
              <li>
                Ingresa sesión con tus credenciales en
                {" "}
                <a
                  href="https://special-nurture-955505aa13.strapiapp.com/admin/auth/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Strapi aquí
                </a>
                .
              </li>
              <li>
                Ve a la sección <strong>Content Manager</strong> (icono de hoja).
                <img
                  src="https://res.cloudinary.com/dciqzuzxv/image/upload/v1758841920/Screenshot_2025-09-25_at_5.11.04_p.m._fy4g63.png"
                  alt="Vista del Content Manager en Strapi"
                  className="mt-4 w-full rounded-xl border"
                />
              </li>
              <li>
                Selecciona el content type que vas a editar: <strong>Medicamentos</strong>, <strong>Medico</strong> o <strong>Promocion</strong>.
              </li>
              <li>
                Selecciona el botón "Create a new entry" en la esquina superior derecha.
                <img
                  src="https://res.cloudinary.com/dciqzuzxv/image/upload/v1758841911/Screenshot_2025-09-25_at_5.10.40_p.m._mhfwhb.png"
                  alt="Botón de crear nueva entrada en Strapi"
                  className="mt-4 w-full rounded-xl border"
                />
              </li>
              <li>
                Da clic en <strong>Publish</strong> y confirma que la entrada aparezca como publicada.
                <img
                  src="https://res.cloudinary.com/dciqzuzxv/image/upload/v1758841920/Screenshot_2025-09-25_at_5.11.04_p.m._fy4g63.png"
                  alt="Entrada publicada en Strapi"
                  className="mt-4 w-full rounded-xl border"
                />
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Instrucciones en Lovable */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-4">Lovable</Badge>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Instrucciones en Lovable</h2>
          <p className="text-muted-foreground mb-6">
            Lovable permite ajustar textos, imágenes y secciones completas del sitio. Describe con claridad los cambios que deseas y confirma antes de publicar.
          </p>
          <div className="bg-white shadow-xl rounded-3xl border border-border/60 p-6 md:p-10 space-y-6">
            <ol className="list-decimal list-inside space-y-6 text-muted-foreground text-base">
              <li>
                Ingresa a la plataforma de Lovable con la cuenta del hospital aquí:
                {" "}
                <a
                  href="https://lovable.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  https://lovable.dev
                </a>
                .
              </li>
              <li>
                Selecciona el proyecto "Centromedapaseo".
                <img
                  src="https://res.cloudinary.com/dciqzuzxv/image/upload/v1758842286/Home_Lovable_ihoyg1.png"
                  alt="Proyecto de Lovable"
                  className="mt-4 w-full rounded-xl border"
                />
              </li>
              <li>
                Escribe el prompt con tus cambios; intenta ser lo más detallado posible.
                <img
                  src="https://res.cloudinary.com/dciqzuzxv/image/upload/v1758842285/Prompt_Lovable_aa7nm3.png"
                  alt="Prompt en Lovable"
                  className="mt-4 w-full rounded-xl border"
                />
              </li>
              <li>
                Publica tus cambios: haz clic en "Publish" (esquina superior derecha) y luego en "Update".
                <img
                  src="https://res.cloudinary.com/dciqzuzxv/image/upload/v1758842284/Update_Lovable_ys2d4s.png"
                  alt="Publicar cambios en Lovable"
                  className="mt-4 w-full rounded-xl border"
                />
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Cierra tu sesión y verifica</h2>
          <p className="text-muted-foreground">
            Revisa <strong>centromedicoapaseo.org</strong> para confirmar los cambios. Si algo no se actualiza, refresca la página y verifica en Strapi que la entrada sigue publicada. Cierra sesión en ambas plataformas al terminar.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Documentacion;
