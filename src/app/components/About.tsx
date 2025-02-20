import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mr-12 flex justify-center items-center">
          <Image
            src="/ajedrez.aboutme.jpg" // Cambia por una imagen del club
            alt="Historia del Club Plaza Chess"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl mb-6 text-yellow-700">Sobre Nosotros</h2>
          <p className="text-gray-700 mb-4">
            Plaza Chess nació de la necesidad de un espacio abierto donde
            cualquiera pudiera aprender y mejorar en ajedrez durante todo el
            año.
          </p>
          <p className="text-gray-700 mb-4">
            Nuestro lema es <strong>“Ajedrez al alcance de todos”</strong>, y
            nos diferenciamos porque recibimos a jugadores de todos los niveles,
            desde principiantes hasta avanzados, en un ambiente de respeto y
            crecimiento mutuo.
          </p>
          <p className="text-gray-700">
            Ofrecemos clases presenciales tres veces por semana, con torneos
            incluidos, material de estudio y un profesor especializado que
            siempre está disponible para ayudarte a mejorar tu nivel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
