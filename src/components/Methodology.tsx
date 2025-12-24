import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import kalis from '@/assets/kalis.jpeg';
import lharmonie from '@/assets/lharmonie.jpeg';
import social from '@/assets/social.jpg';
import fondo1 from '@/assets/fondo1.jpg';

export const Methodoloogy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ✅ Ahora el acordeón habla de SERVICIOS
  const methodItems = [
{
  title: 'Contenido enfocado en objetivos',
  description:
    'Nos aseguramos de que cada pieza de contenido tenga un propósito claro. Analizamos métricas y resultados para ajustar la estrategia, porque el buen marketing siempre se refleja en resultados.',
},
,
{
  title: 'Manejo de redes sociales',
  description:
    'Gestionamos redes sociales con una mirada estratégica. Planificación, contenido y seguimiento constante para construir presencia y crecer de forma sostenida.',
},
{
  title: 'Cobertura fotográfica para eventos',
  description:
    'Registramos eventos poniendo el foco en la experiencia y la marca. Imágenes pensadas para comunicar, amplificar y extender el impacto del evento.',
},
{
  title: 'Armado de eventos desde cero',
  description:
    'Creamos y producimos eventos desde la idea hasta la ejecución. Pensados para posicionar marcas, lanzar propuestas y generar experiencias memorables.',
},
{
  title: 'Lanzamientos y acciones especiales',
  description:
    'Ideamos acciones puntuales y lanzamientos con sentido. Momentos diseñados para comunicar bien, destacarse y quedar en la mente de la audiencia.',
},

  ];

  const services = [
{
  title: 'Gestión de Eventos y Colaboraciones',
  description:
    'Diseñamos y ejecutamos eventos y colaboraciones desde cero, pensados para posicionar marcas, generar visibilidad y crear momentos que se traduzcan en impacto real.',
  image: kalis,
},
{
  title: 'Contenido Estratégico y Creativo en Redes',
  description:
    'Creamos contenido con objetivo claro: crecer, conectar y convertir. Estrategia, creatividad y análisis constante para que las redes trabajen a favor de la marca.',
  image: lharmonie,
},
{
  title: 'Dirección Creativa con Llegada',
  description:
    'Desarrollamos ideas y conceptos que se sienten y se recuerdan. Campañas, acciones especiales y experiencias pensadas para conectar con la audiencia correcta.',
  image: social,
},

  ];

  return (
    <section
      id="metodo"
      className="section-spacing min-h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${fondo1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="heading-lg">Servicios.</h2>
          <p className="text-body-lg mt-6 max-w-2xl text-white/80">
            Ideas creativas + estrategia para lograr resultados, sin necesitar presupuestos enormes.
          </p>
        </div>

 {/* SERVICES — DESPUÉS (FOTOS) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service) => (
              <div key={service.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6 rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="heading-md mb-3">{service.title}</h4>
                <p className="text-body text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
         <br> 
         </br>
        <br> 
         </br>

        {/* SERVICES LIST (ACORDEÓN) — PRIMERO */}
        <div className="inverted-section rounded-2xl p-8 md:p-12 mb-20 md:mb-28 bg-black/70 backdrop-blur-sm">
          <div className="mb-12 md:mb-16">
            <h3 className="heading-md">Lo que hacemos.</h3>
            <p className="text-body-lg mt-4 max-w-2xl text-white/80">
              Servicios pensados para crecer con contenido, redes y experiencias que posicionan.
            </p>
          </div>

          <div className="max-w-4xl">
            {methodItems.map((item, index) => (
              <div key={item.title} className="border-t border-white/20">
                <button
                  type="button"
                  className="w-full py-8 flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="heading-md pr-8 group-hover:opacity-80 transition-opacity">
                    {item.title}
                  </span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? <Minus size={28} /> : <Plus size={28} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-40 pb-8' : 'max-h-0'
                  }`}
                >
                  <p className="text-body-lg text-white/80 max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-white/20" />
          </div>
        </div>

      </div>
    </section>
  );
};

export const Methodology = Methodoloogy;
