import { useState } from "react";

const IFRAME_URL =
  "https://readdy.cc/preview/9d1e7278-02f4-4b2b-93a2-ef7dfa812de6/7633710/dashboard-embed";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-screen bg-[#F8F6F3]">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
            <i className="ri-loader-4-line text-gray-400 text-xl animate-spin"></i>
          </div>
          <p className="text-sm text-gray-400">Cargando contenido...</p>
        </div>
      )}
      <iframe
        src={IFRAME_URL}
        title="Dashboard Embed"
        className={`w-full h-full border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        allow="fullscreen"
      />
    </div>
  );
}
