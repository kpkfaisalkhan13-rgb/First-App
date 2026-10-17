import { useState } from 'react'

function App() {
  const [customers, setCustomers] = useState([
    { name: "Faisal Khan", amount: "5000" }
  ])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', background: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Voice Khata</h1>
      <p style={{ textAlign: 'center' }}>آپ کا کھاتہ کامیابی سے لائیو ہو گیا ہے!</p>
      
      <div style={{ background: 'white', padding: '15px', borderRadius: '10px', marginTop: '20px' }}>
        {customers.map((c, i) => (
          <div key={i} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>{c.name}</strong> - {c.amount} روپے
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '30px', color: 'green' }}>
        اب یہ Vercel پر ضرور چلے گا، انشاءاللہ
      </p>
    </div>
  )
}

export default App
