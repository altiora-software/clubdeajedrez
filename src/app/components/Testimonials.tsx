// Testimonios
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Un lugar perfecto para aprender y practicar ajedrez. El ambiente es acorde a lo esperado y entre compañeros nos ayudamos unos a los otros.",
      author: "Jorge Ramírez",
      location: "Villa Constitución",
    },
    {
      text: "Desde que me uní a Plaza Chess, mi juego ha mejorado mucho. Me encanta la comunidad y las clases son muy dinámicas.",
      author: "Sofía Martínez",
      location: "Rosario",
    },
    {
      text: "El profesor es excelente y nos guía en cada partida. Todavía no le podemos ganar, ¡pero seguimos intentándolo!",
      author: "Martín López",
      location: "Villa Constitución",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-yellow-800">
          Lo Que Dicen Nuestros Miembros
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-yellow-800">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <p className="italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
