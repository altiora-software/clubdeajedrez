// Componente de Características
import { Swords, Users, GraduationCap } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Swords className="w-12 h-12 text-yellow-600" />,
      title: "Ajedrez para Todos",
      description:
        "Desde principiantes hasta jugadores avanzados, todos son bienvenidos a mejorar su juego.",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      title: "Comunidad Activa",
      description:
        "Un ambiente amigable donde aprender, competir y compartir la pasión por el ajedrez.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-yellow-600" />,
      title: "Clases y Torneos",
      description:
        "Entrenamiento guiado, torneos semanales y material de estudio exclusivo.",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-yellow-800">
          ¿Por Qué Elegir Plaza Chess?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-yellow-800"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
