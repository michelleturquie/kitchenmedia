import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="section-spacing bg-white text-black"
    >
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="heading-lg">Hablemos.</h2>

          <p className="text-body-lg mt-8 max-w-xl text-black/80">
            ¿Tenés una marca gastronómica y querés llevarla al siguiente nivel?
            Escribinos y vemos cómo podemos trabajar juntos.
          </p>

          <div className="mt-10">
            <Button variant="hero" size="lg" asChild>
              <a
                href="mailto:kitchenmedia.ar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactanos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
