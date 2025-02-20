const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/banner.ajedrez.jpg")', // Asegúrate de tener una imagen adecuada
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Club de Ajedrez Plaza Chess
        </h1>
        <p className="text-xl mb-8">
          Ajedrez al alcance de todos — Un espacio abierto para aprender,
          mejorar y disfrutar el ajedrez en Villa Constitución.
        </p>
        <a
          href="#membresia"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Únete a la Comunidad
        </a>
      </div>
    </section>
  );
};

export default Hero;
