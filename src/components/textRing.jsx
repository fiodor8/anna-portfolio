
export default function TextRing({ text }) {
    //console.log(typeof text, text)
    const CHARS = typeof text === 'string' ? text.split('') : [];
    const INNER_ANGLE = 360 / CHARS.length
    return (
      <span
        className="text-ring"
        style={{
          '--total': CHARS.length,
          '--radius': 1 / Math.sin(INNER_ANGLE / (180 / Math.PI))
        }}
      >
        {CHARS.map((char, index) => (
          <span key={index} style={{'--index': index }}>
            {char}
          </span>
        ))}
      </span>
    )
  }