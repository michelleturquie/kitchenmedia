import srcImg from '@/assets/socialmic.jpeg';
import gotaImg from '@/assets/gotamurga.jpeg';
import coronaImg from '@/assets/kalis.jpeg';
import kraftImg from '@/assets/kraft.jpeg';
import enoileImg from '@/assets/enoile.jpeg';
import notcoImg from '@/assets/notco.jpeg';
import yaciImg from '@/assets/yaci.jpeg';
import lpqImg from '@/assets/lpq.jpeg';

const clients = [
  { name: 'Social Running Club', image: srcImg },
  { name: 'Enoile Cafe', image: enoileImg },
  { name: 'Corona Cero', image: coronaImg },
  { name: 'Kraft Coffee Deli', image: kraftImg },
  { name: 'Yaci', image: yaciImg },
  { name: 'Gota Cafe', image: gotaImg },
  { name: 'Not Co', image: notcoImg },
  { name: 'Le Pain Quotidiane', image: lpqImg },
];

export const Clients = () => {
  return (
    <section 
    id="clientes"
    className="section-spacing bg-black text-white"
    >
      <div className="section-container">
        <h2 className="heading-lg mb-16 md:mb-24 text-white">
          Hicimos acciones con distintas marcas como:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {clients.map((client) => (
            <div
              key={client.name}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              {/* Imagen de fondo */}
              <img
                src={client.image}
                alt={client.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

              {/* Texto centrado */}
              <div className="relative z-10 flex items-center justify-center h-full px-4">
                <span className="text-white text-center text-lg md:text-xl font-heading font-medium tracking-wide">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
