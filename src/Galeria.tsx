import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galeriaImages = [
    '/images/galeria/0C9A5569.jpg',
    '/images/galeria/0C9A5570.jpg',
    '/images/galeria/058A5361.jpg',
    '/images/galeria/058A5362.jpg',
    '/images/galeria/058A5364.jpg',
    '/images/galeria/058A5365.jpg',
    '/images/galeria/058A5366.jpg',
    '/images/galeria/058A5368.jpg',
    '/images/galeria/058A5372.jpg',
    '/images/galeria/058A5374.jpg',
    '/images/galeria/058A5384 (1).jpg',
    '/images/galeria/058A5391 (1).jpg',
    '/images/galeria/058A5401.jpg',
    '/images/galeria/058A5407 (1).jpg',
    '/images/galeria/058A5420.jpg',
    '/images/galeria/058A5422 (1).jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold">
              Galería <span className="text-gradient-turquesa">Cuatro Menguantes</span>
            </h1>
            <a 
              href="/"
              className="flex items-center gap-2 text-[#4ECDC4] hover:text-white transition-colors text-sm md:text-base"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </a>
          </div>
          <p className="text-white/70 mt-3">Momentos de estudio y en vivo</p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="galeria-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {galeriaImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImage(image)}
                style={{ 
                  cursor: 'pointer',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '1/1',
                  border: '3px solid #4ECDC4',
                  transition: 'all 0.3s ease'
                }}
                className="galeria-item hover:opacity-100 hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Cuatro Menguantes - Foto ${index + 1}`}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  className="hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              fontSize: '30px',
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            className="hover:bg-[#4ECDC4] hover:text-black"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagen ampliada"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '12px',
              border: '3px solid #4ECDC4'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">
            © 2025 Cuatro Menguantes. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Galeria;
