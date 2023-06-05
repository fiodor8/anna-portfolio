
export default function TextRing({ text }) {
    const chars = typeof text === 'string' ? text.split('') : [];
    const innerAngle = 360 / chars.length
    return (
      <span
        className="text-ring"
        style={{
          '--total': chars.length,
          '--radius': 1 / Math.sin(innerAngle / (180 / Math.PI))
        }}
      >
        {chars.map((char, index) => (
          <span key={index} style={{'--index': index }}>
            {char}
          </span>
        ))}
      </span>
    )
  }