export const About = () => {
  return (
    <section
      id="nosotros"
      className="section-spacing bg-white text-black"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="heading-lg">Quiénes somos.</h2>
          </div>

          <div className="lg:pt-4">
            <p className="text-body-lg mb-8">
              En <strong>Kitchen Media</strong> nos mueve una cosa: <strong>ver resultados y lograrlos</strong>.
              Creemos en el poder de las ideas bien pensadas y mejor ejecutadas.
            </p>

            <p className="text-body-lg mb-8 text-black/80">
              Trabajamos desde la <strong className="text-black">creatividad y la estrategia</strong>,
              buscando soluciones inteligentes que hagan crecer a las marcas sin necesidad de
              grandes presupuestos.
            </p>

            <p className="text-body-lg text-black/80">
              Somos <strong className="text-black">amantes del buen marketing</strong>:
              el que conecta, el que se entiende y el que funciona.
              Porque cuando la idea es buena, el impacto llega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
