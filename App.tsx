import { useState } from 'react'

function App() {
  const [customers] = useState([
    { name: "Faisal Khan", amount: "5000" }
  ])

  return (
    <div style={{ padding: 20, background: "#f0f2f5", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Voice Khata</h1>
      <p style={{ textAlign: "center" }}>آپ کا کھاتہ کامیابی سے لائیو ہو گیا ہے!</p>
      
      <div style={{ background: "white", padding: 15, borderRadius: 10, marginTop: 20 }}>
        {customers.map((c, i) => (
          <div key={i} style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>{c.name}</strong> - {c.amount} روپے
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: 30, color: "green" }}>
        اب یہ Vercel پر ضرور چلے گا
      </p>
    </div>
  )
}

export default App
