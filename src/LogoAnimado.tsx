const diamonds = [
  { color: '#4ECDC4' },
  { color: '#E63946' },
  { color: '#FFD93D' },
  { color: '#6B5B95' },
];

export default function LogoAnimado() {
  return (
    <div style={styles.outer}>
      <div style={styles.diamondsLayer}>
        {diamonds.map((d, i) => (
          <div
            key={i}
            style={styles.dw}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'perspective(450px) translate3d(18px, -36px, 75px)';
              e.currentTarget.style.filter = 'drop-shadow(8px 18px 14px rgba(0,0,0,0.85))';
              e.currentTarget.style.zIndex = '10';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.filter = 'none';
              e.currentTarget.style.zIndex = '1';
            }}
          >
            <div style={{ ...styles.diamond, borderColor: d.color }} />
          </div>
        ))}
      </div>

      <div style={styles.textBand}>
        <span style={styles.text}>CUATRO MENGUANTES</span>
      </div>
    </div>
  );
}

const styles = {
  outer: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: '500px',
    aspectRatio: '16/9',
    overflow: 'hidden' as const,
    background: '#000',
    margin: '0 auto',
  },
  diamondsLayer: {
    position: 'absolute' as const,
    inset: 0,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    padding: '0 5px',
  },
  dw: {
    flex: '0 0 110px',
    height: '110px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    cursor: 'pointer',
    position: 'relative' as const,
    zIndex: 1,
    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease',
  },
  diamond: {
    width: '110px',
    height: '110px',
    borderStyle: 'solid' as const,
    borderWidth: '23px',
    background: 'transparent',
    transform: 'rotate(45deg)',
    flexShrink: 0,
  },
  textBand: {
    position: 'absolute' as const,
    left: '-100px',
    right: '-100px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#ffffff',
    height: '45px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    zIndex: 2,
    pointerEvents: 'none' as const,
  },
  text: {
    fontFamily: "'Century Gothic', 'Futura', 'Trebuchet MS', 'Arial', sans-serif",
    fontSize: 'clamp(1.4rem, 5.5vw, 2.6rem)',
    letterSpacing: '0.05em',
    color: '#0a0a0a',
    fontWeight: 200 as const,
    whiteSpace: 'nowrap' as const,
    userSelect: 'none' as const,
  },
};
