// Botón de WhatsApp Flotante
import Image from "next/image";
import Link from "next/link";

const whatsapp = {
  name: "whatsapp",
  icon: "/icons/whatsapp.svg",
  href: "https://wa.me/3400582778", // Número oficial del club
};

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all z-50 animate-bounce">
      <Link
        key={whatsapp.name}
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-75 transition"
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
