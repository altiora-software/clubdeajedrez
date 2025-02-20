// Iconos
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

// Pie de Página
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <p>
            WhatsApp:{" "}
            <a href="tel:3400582778" className="text-yellow-500">
              3400582778
            </a>{" "}
            /{" "}
            <a href="tel:3415836259" className="text-yellow-500">
              3415836259
            </a>
          </p>
          <p>Email: En proceso</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com/plazachess.vc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61573175273319&rdid=iXPJ9INcEvBzKRrV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F168jj3h8gK%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <Facebook />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul>
            <li>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © {new Date().getFullYear()} Plaza Chess. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
