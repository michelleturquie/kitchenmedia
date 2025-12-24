import medialunas from '@/assets/fondo1.jpg';

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${medialunas})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-container w-full">
        <div className="max-w-6xl">
          <h1 className="heading-xl opacity-0 animate-fade-up">
            Marketing
            <br />
            Estrategico y
          </h1>
          <h1 className="heading-xl mt-2 opacity-0 animate-fade-up stagger-1">
            Creativo.
          </h1>

          <p className="text-body-lg mt-4 md:mt-6 max-w-xl opacity-0 animate-fade-up stagger-3 text-white/80">
            Agencia especializada en estrategia y creatividad aplicadas a resultados, para marcas que quieren crecer y poscionarse.

          </p>
        </div>
      </div>
    </section>
  );
};


