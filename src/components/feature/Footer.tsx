export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="w-full px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
                <i className="ri-dashboard-line text-white text-sm"></i>
              </div>
              <span className="font-semibold text-base tracking-tight">Dashboard</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Una plataforma moderna para visualizar y gestionar tus datos de forma eficiente.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-sm"></i>
              </a>
              <a href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-sm"></i>
              </a>
              <a href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-github-line text-sm"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              <a href="#">Navegación</a>
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Soporte</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              <a href="#">Legal</a>
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Términos de uso</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Dashboard. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Hecho con <strong className="text-gray-400">precisión</strong> y cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
