import { useState, useRef, useEffect } from 'react';

export default function InstagramWidget() {
  const [adminMode, setAdminMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ posts: '41', followers: '416', following: '34' });
  const [avatar, setAvatar] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const passInputRef = useRef<HTMLInputElement>(null);

  const PASS = 'menguantes';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('admin')) {
      setShowModal(true);
      setTimeout(() => passInputRef.current?.focus(), 100);
    }
  }, []);

  const checkPass = () => {
    if (password === PASS) {
      setShowModal(false);
      setAdminMode(true);
      setPassword('');
      setError('');
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  const setAvatarUrl = () => {
    const url = urlInputRef.current?.value.trim();
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      setAvatar(url);
    };
    img.onerror = () => {
      alert('No se pudo cargar esa URL');
    };
    img.src = url;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <style>{`
        .ig-card {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          padding: 20px 22px;
          width: 320px;
          color: #fff;
          margin: 0 auto;
        }
        .ig-header { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
        .avatar-ring {
          width: 64px; height: 64px; border-radius: 50%; padding: 2.5px;
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          flex-shrink: 0; position: relative;
        }
        .avatar-inner {
          width: 100%; height: 100%; border-radius: 50%;
          background: #2a2a2a; border: 2px solid #1a1a1a;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 18px; color: #fff; overflow: hidden;
        }
        .avatar-inner img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
        .avatar-overlay {
          position: absolute; inset: 0; border-radius: 50%;
          background: rgba(0,0,0,0.55);
          display: none; align-items: center; justify-content: center; font-size: 20px;
        }
        .admin-mode:hover .avatar-overlay { display: flex; }
        .ig-username { font-size: 15px; font-weight: 700; display: flex; align-items: center; gap: 5px; margin-bottom: 2px; }
        .verified { color: #0095f6; }
        .ig-fullname { font-size: 12px; color: #999; margin-bottom: 4px; }
        .ig-bio { font-size: 12px; color: #ccc; line-height: 1.5; }
        .ig-stats {
          display: flex; justify-content: space-around; text-align: center;
          border-top: 1px solid #252525; border-bottom: 1px solid #252525;
          padding: 12px 0; margin: 14px 0;
        }
        .stat-num { font-size: 17px; font-weight: 700; display: block; border-radius: 4px; padding: 1px 4px; }
        .stat-num.editable { cursor: pointer; transition: background 0.2s; }
        .stat-num.editable:hover { background: #2a2a2a; }
        .stat-label { font-size: 10px; color: #777; text-transform: uppercase; letter-spacing: 0.5px; }
        .ig-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          width: 100%; padding: 10px; border-radius: 8px;
          background: linear-gradient(90deg, #f09433, #dc2743, #bc1888);
          color: #fff; font-size: 13px; font-weight: 700;
          text-decoration: none; border: none; cursor: pointer; transition: opacity 0.2s;
        }
        .ig-btn:hover { opacity: 0.85; }
        .admin-bar {
          display: none; background: #1e1e1e; border: 1px solid #e1306c44;
          border-radius: 12px; padding: 14px 16px; width: 320px; margin: 0 auto;
        }
        .admin-bar.visible { display: block; }
        .admin-bar h3 { font-size: 11px; color: #e1306c; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .url-row { display: flex; gap: 8px; margin-bottom: 6px; }
        .url-input {
          flex: 1; background: #2a2a2a; border: 1px solid #444; border-radius: 6px;
          color: #fff; padding: 7px 10px; font-size: 12px; outline: none;
        }
        .url-input:focus { border-color: #e1306c; }
        .apply-btn {
          background: #e1306c; border: none; color: #fff; font-size: 12px; font-weight: 700;
          padding: 7px 12px; border-radius: 6px; cursor: pointer; white-space: nowrap;
        }
        .file-btn {
          display: block; width: 100%; text-align: center;
          background: #2a2a2a; border: 1px dashed #444; border-radius: 6px;
          color: #888; font-size: 12px; padding: 8px; cursor: pointer; margin-top: 6px;
        }
        .admin-tip { font-size: 10px; color: #555; margin-top: 10px; line-height: 1.5; }
        .exit-btn {
          background: none; border: 1px solid #333; color: #666; font-size: 11px;
          padding: 4px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px; width: 100%;
        }
        .modal-overlay {
          display: none; position: fixed; inset: 0;
          background: rgba(0,0,0,0.75); z-index: 100;
          align-items: center; justify-content: center;
        }
        .modal-overlay.open { display: flex; }
        .modal {
          background: #1e1e1e; border: 1px solid #333; border-radius: 14px;
          padding: 24px; width: 280px; color: #fff;
        }
        .modal h3 { font-size: 14px; margin-bottom: 6px; }
        .modal p { font-size: 11px; color: #666; margin-bottom: 14px; }
        .modal input {
          width: 100%; background: #2a2a2a; border: 1px solid #444;
          border-radius: 8px; color: #fff; padding: 10px 12px;
          font-size: 14px; outline: none; margin-bottom: 10px;
        }
        .modal input:focus { border-color: #e1306c; }
        .modal-btns { display: flex; gap: 8px; }
        .modal-btns button {
          flex: 1; padding: 9px; border-radius: 8px; font-size: 13px;
          font-weight: 600; cursor: pointer; border: none;
        }
        .btn-confirm { background: #e1306c; color: #fff; }
        .btn-cancel { background: #2a2a2a; color: #888; }
        .modal-error { font-size: 11px; color: #e1306c; margin-top: 4px; }
        #fileInput { display: none; }
      `}</style>

      <div className="ig-card">
        <div className="ig-header">
          <div className="avatar-ring" style={adminMode ? { cursor: 'pointer' } : {}}>
            <div className="avatar-inner">
              {avatar ? (
                <img src={avatar} alt="avatar" />
              ) : (
                <span>CM</span>
              )}
            </div>
            <div className="avatar-overlay">📷</div>
          </div>
          <div>
            <div className="ig-username">cuatromenguantes <span className="verified">✓</span></div>
            <div className="ig-fullname">Cuatro Menguantes</div>
            <div className="ig-bio">🎵 Música Argentina<br />Catto/Gonzalo/Román/Eric</div>
          </div>
        </div>
        <div className="ig-stats">
          <div>
            <span 
              className={`stat-num${adminMode ? ' editable' : ''}`}
              onClick={() => adminMode && alert('Click en modo admin')}
            >
              {stats.posts}
            </span>
            <span className="stat-label">Posts</span>
          </div>
          <div>
            <span 
              className={`stat-num${adminMode ? ' editable' : ''}`}
              onClick={() => adminMode && alert('Click en modo admin')}
            >
              {stats.followers}
            </span>
            <span className="stat-label">Seguidores</span>
          </div>
          <div>
            <span 
              className={`stat-num${adminMode ? ' editable' : ''}`}
              onClick={() => adminMode && alert('Click en modo admin')}
            >
              {stats.following}
            </span>
            <span className="stat-label">Seguidos</span>
          </div>
        </div>
        <a 
          className="ig-btn" 
          href="https://www.instagram.com/cuatromenguantes" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Ver perfil en Instagram
        </a>
      </div>

      {adminMode && (
        <div className="admin-bar visible">
          <h3>🔐 Modo Admin</h3>
          <div className="url-row">
            <input 
              ref={urlInputRef}
              className="url-input" 
              type="text" 
              placeholder="URL de foto de perfil…"
            />
            <button className="apply-btn" onClick={setAvatarUrl}>Aplicar</button>
          </div>
          <label className="file-btn">
            📁 Subir foto desde dispositivo
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </label>
          <p className="admin-tip">✏️ Hacé click en los números del widget para editarlos.<br />📷 Hacé click en el avatar para cambiar la foto.</p>
          <button className="exit-btn" onClick={() => setAdminMode(false)}>✕ Salir del modo admin</button>
        </div>
      )}

      {showModal && (
        <div className={`modal-overlay ${showModal ? 'open' : ''}`}>
          <div className="modal">
            <h3>🔐 Acceso Admin</h3>
            <p>Ingresá la contraseña para editar el widget</p>
            <input 
              ref={passInputRef}
              type="password" 
              placeholder="Contraseña…"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkPass()}
            />
            {error && <div className="modal-error">{error}</div>}
            <div className="modal-btns">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-confirm" onClick={checkPass}>Entrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
