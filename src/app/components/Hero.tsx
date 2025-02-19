const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/banner.ajedrez.jpg")', // Cambiar por una imagen de ajedrez
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Club de Ajedrez Plaza Ches
        </h1>
        <p className="text-xl mb-8">
          Un espacio para aprender, jugar y competir en Villa Constitución.
          ¡Únete y mejora tu estrategia!
        </p>
        <a
          href="#membresia"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Conviértete en Miembro
        </a>
      </div>
    </section>
  );
};

export default Hero;
