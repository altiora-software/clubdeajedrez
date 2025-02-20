import Image from "next/image";

const Membership: React.FC = () => {
  const benefits = [
    {
      name: "Clases Presenciales",
      type: "Tres veces por semana",
      description:
        "Aprende y mejora con la guía de un profesor especializado. Las clases incluyen teoría, práctica y resolución de partidas.",
      image: "/clases-ajedrez.jpg",
      details: [
        "Nivel: Principiantes a avanzados",
        "Profesor disponible para consultas",
        "Material de estudio incluido",
      ],
    },
    {
      name: "Torneos Semanales",
      type: "Compite y mejora",
      description:
        "Participa en torneos en cada clase para poner a prueba tu nivel y aprender nuevas estrategias.",
      image: "/torneos-ajedrez.jpg",
      details: [
        "Todos los niveles bienvenidos",
        "Formato suizo y blitz",
        "Premios simbólicos y reconocimiento",
      ],
    },
    {
      name: "Material de Estudio",
      type: "Acceso exclusivo",
      description:
        "Recibe material de estudio para mejorar en aperturas, medio juego y finales.",
      image: "/material-estudio.jpg",
      details: [
        "Libros y ejercicios en PDF",
        "Análisis de partidas",
        "Videos de entrenamiento",
      ],
    },
  ];

  return (
    <section id="membresia" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-yellow-800">
          Membresía Plaza Chess
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all text-yellow-800"
            >
              <Image
                src={benefit.image}
                alt={benefit.name}
                width={200}
                height={200}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{benefit.name}</h3>
                <p className="text-gray-600 mb-4">{benefit.type}</p>
                <p className="text-gray-700 mb-4">{benefit.description}</p>
                <div className="border-t pt-4">
                  {benefit.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            La membresía cuesta <strong>$10.000 por mes</strong>.
          </p>
          <p className="text-lg text-gray-700">
            Métodos de pago: Transferencia o efectivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
