import { useRef } from 'react';
import { 
  Youtube, 
  Phone, 
  Users, 
  Calendar, 
  MapPin,
  ChevronDown,
  Play,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const repertorioRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Cuatro Menguantes" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg hidden sm:block">CUATRO MENGUANTES</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection(repertorioRef)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Repertorio
              </button>
              <button 
                onClick={() => scrollToSection(videosRef)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Videos
              </button>
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ECDC4]/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6B5B95]/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E63946]/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="hero-logo mb-8">
            <img 
              src="/images/logo.png" 
              alt="Cuatro Menguantes" 
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Música </span>
            <span className="text-gradient-turquesa">Folclórica</span>
            <span className="text-white"> Argentina</span>
          </h1>
          
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10">
            Tradición y sensibilidad artística con arreglos cuidados y una interpretación 
            comprometida con la identidad folclórica
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection(videosRef)}
              className="gradient-turquesa text-black font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity glow-turquesa"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Videos
            </Button>
            <Button 
              onClick={() => scrollToSection(contactRef)}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactar
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-24 px-4 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="about-content grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 gradient-turquesa rounded-full" />
                <span className="text-[#4ECDC4] font-semibold uppercase tracking-wider text-sm">Sobre Nosotros</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Cuatro <span className="text-gradient-rojo">Menguantes</span>
              </h2>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Somos una banda de música argentina con orientación en el folclore. 
                  Con músicas propias y de otros autores contemporáneos, hemos participado 
                  activamente en celebraciones populares a lo largo y ancho de la Argentina, 
                  en fiestas patronales y eventos regionales.
                </p>
                <p>
                  Nuestra propuesta combina <span className="text-[#FFD93D] font-semibold">tradición</span> y 
                  <span className="text-[#6B5B95] font-semibold"> sensibilidad artística</span>, con arreglos 
                  cuidados y una interpretación comprometida con la identidad folclórica.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-turquesa flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">4</p>
                    <p className="text-white/60 text-sm">Integrantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-rojo flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">50 min</p>
                    <p className="text-white/60 text-sm">Duración del show</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-amarillo flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">Argentina</p>
                    <p className="text-white/60 text-sm">Origen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4ECDC4]/20 via-[#E63946]/20 to-[#6B5B95]/20 rounded-3xl blur-2xl" />
              <img 
                src="/images/banda-color.jpg" 
                alt="Cuatro Menguantes - La Banda"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repertorio Section */}
      <section 
        id="repertorio"
        ref={repertorioRef}
        className="py-24 px-4 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="repertorio-content text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 gradient-amarillo rounded-full" />
              <span className="text-[#FFD93D] font-semibold uppercase tracking-wider text-sm">Nuestro Show</span>
              <div className="w-12 h-1 gradient-amarillo rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Repertorio <span className="text-gradient-amarillo">Folclórico</span>
            </h2>
            
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Un show de calidad con aproximadamente 50 minutos de duración, 
              interpretando los géneros más emblemáticos del folclore argentino
            </p>
          </div>

          <div className="repertorio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="repertorio-card" style={{ backgroundColor: '#52525b', border: '4px solid #4ECDC4', borderRadius: '20px', padding: '40px', textAlign: 'center', minHeight: '280px', display: 'block', visibility: 'visible', opacity: 1 }}>
              <div style={{ backgroundColor: '#4ECDC4', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '40px' }}>🎵</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#ffffff' }}>Chacareras</h3>
              <p style={{ color: '#e4e4e7', fontSize: '16px', lineHeight: '1.5' }}>El ritmo bailado por excelencia del folclore argentino</p>
            </div>

            <div className="repertorio-card" style={{ backgroundColor: '#52525b', border: '4px solid #E63946', borderRadius: '20px', padding: '40px', textAlign: 'center', minHeight: '280px', display: 'block', visibility: 'visible', opacity: 1 }}>
              <div style={{ backgroundColor: '#E63946', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '40px' }}>🎵</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#ffffff' }}>Zambas</h3>
              <p style={{ color: '#e4e4e7', fontSize: '16px', lineHeight: '1.5' }}>El género más difundido y querido de la música argentina</p>
            </div>

            <div className="repertorio-card" style={{ backgroundColor: '#52525b', border: '4px solid #FFD93D', borderRadius: '20px', padding: '40px', textAlign: 'center', minHeight: '280px', display: 'block', visibility: 'visible', opacity: 1 }}>
              <div style={{ backgroundColor: '#FFD93D', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '40px' }}>🎵</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#ffffff' }}>Zambas Carperas</h3>
              <p style={{ color: '#e4e4e7', fontSize: '16px', lineHeight: '1.5' }}>La variante rítmica y bailable de la zamba tradicional</p>
            </div>

            <div className="repertorio-card" style={{ backgroundColor: '#52525b', border: '4px solid #6B5B95', borderRadius: '20px', padding: '40px', textAlign: 'center', minHeight: '280px', display: 'block', visibility: 'visible', opacity: 1 }}>
              <div style={{ backgroundColor: '#6B5B95', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '40px' }}>🎵</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#ffffff' }}>Canción</h3>
              <p style={{ color: '#e4e4e7', fontSize: '16px', lineHeight: '1.5' }}>El género de autor que narra historias y emociones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section 
        id="videos"
        ref={videosRef}
        className="py-24 px-4 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="videos-content text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 gradient-violeta rounded-full" />
              <span className="text-[#6B5B95] font-semibold uppercase tracking-wider text-sm">YouTube</span>
              <div className="w-12 h-1 gradient-violeta rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-gradient-violeta">Videos</span>
            </h2>
            
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Descubre nuestra música en YouTube
            </p>
          </div>

          <div className="videos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
            <a 
              href="https://www.youtube.com/watch?v=qpqh4DTSXd0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="video-card" style={{ backgroundColor: '#52525b', border: '4px solid #E63946', borderRadius: '20px', padding: '40px', textAlign: 'center', minHeight: '300px', display: 'block', visibility: 'visible', opacity: 1 }}>
                <div style={{ backgroundColor: '#E63946', width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '45px', marginLeft: '5px' }}>▶️</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '20px' }}>📺</span>
                  <span style={{ fontSize: '14px', color: '#d4d4d8' }}>YouTube</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>No Estar Atado a Vos</h3>
                <p style={{ fontSize: '16px', color: '#a1a1aa' }}>Cuatro Menguantes</p>
              </div>
            </a>

            <a 
              href="https://www.youtube.com/watch?v=ZoMIqd4m5-M"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="video-card" style={{ backgroundColor: '#52525b', border: '4px solid #4ECDC4', borderRadius: '20px', padding: '40px', textAlign: 'center', minHeight: '300px', display: 'block', visibility: 'visible', opacity: 1 }}>
                <div style={{ backgroundColor: '#4ECDC4', width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '45px', marginLeft: '5px' }}>▶️</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '20px' }}>📺</span>
                  <span style={{ fontSize: '14px', color: '#d4d4d8' }}>YouTube</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>Mujer, Niña y Amiga</h3>
                <p style={{ fontSize: '16px', color: '#a1a1aa' }}>Cuatro Menguantes</p>
              </div>
            </a>
          </div>

          <div className="text-center mt-10">
            <a 
              href="https://www.youtube.com/@CuatroMenguantes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E63946] hover:text-[#ff4d5a] transition-colors font-medium"
            >
              <Youtube className="w-5 h-5" />
              Ver más videos en nuestro canal
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contacto"
        ref={contactRef}
        className="py-24 px-4 relative bg-gradient-to-b from-black to-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="contact-content text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 gradient-rojo rounded-full" />
              <span className="text-[#E63946] font-semibold uppercase tracking-wider text-sm">Contacto</span>
              <div className="w-12 h-1 gradient-rojo rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contrata <span className="text-gradient-rojo">Cuatro Menguantes</span>
            </h2>
            
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              ¿Querés que toquemos en tu evento? Contactanos directamente
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a href="tel:+543535668126" className="no-underline">
              <div className="bg-zinc-800 border-4 border-[#4ECDC4] rounded-2xl p-8 w-72 text-center hover:scale-105 transition-transform">
                <div className="bg-[#4ECDC4] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  📞
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Gonzalo Martín</h3>
                <p className="text-[#4ECDC4] text-2xl font-bold font-mono">(353) 566-8126</p>
              </div>
            </a>
            <a href="tel:+543535655327" className="no-underline">
              <div className="bg-zinc-800 border-4 border-[#E63946] rounded-2xl p-8 w-72 text-center hover:scale-105 transition-transform">
                <div className="bg-[#E63946] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  📞
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Diego Cattáneo</h3>
                <p className="text-[#E63946] text-2xl font-bold font-mono">(353) 565-5327</p>
              </div>
            </a>
            <a href="tel:+543535655173" className="no-underline">
              <div className="bg-zinc-800 border-4 border-[#6B5B95] rounded-2xl p-8 w-72 text-center hover:scale-105 transition-transform">
                <div className="bg-[#6B5B95] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  📞
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Román Gottero</h3>
                <p className="text-[#6B5B95] text-2xl font-bold font-mono">(353) 565-5173</p>
              </div>
            </a>
          </div>

          {/* Foto de la banda en blanco y negro */}
          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4ECDC4]/10 via-[#FFD93D]/10 to-[#6B5B95]/10 rounded-3xl blur-2xl" />
            <img 
              src="/images/banda-bn.jpg" 
              alt="Cuatro Menguantes - Foto promocional"
              className="relative rounded-2xl shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Cuatro Menguantes" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.youtube.com/@CuatroMenguantes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E63946] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-white/50 text-sm">
              © 2025 Cuatro Menguantes. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
