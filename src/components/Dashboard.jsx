import React from 'react'

export default function Dashboard({onSelect, onBackToLanding}){
  return (
    <div className="container fade-in">
      <header className="header">
        <div className="brand"><div className="logo">🌿</div> Nature Unplugged</div>
        <div className="actions">
          <button style={{background:'transparent',border:'none',cursor:'pointer'}} onClick={onBackToLanding}>Home</button>
        </div>
      </header>

      <div className="grid">
        <div>
          <h2 style={{margin:0}}>Lesson Dashboard</h2>
          <p style={{color:'#6b6b6b'}}>Select a module to open its lesson page.</p>

          <div className="cards" style={{marginTop:12}}>
            {Array.from({length:12}).map((_,i)=>(
              <div key={i} className="module-card" onClick={()=>onSelect(i+1)}>
                <div className="module-title">Module {i+1} — Title</div>
                <div className="module-desc">Short description placeholder for Module {i+1}.</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="sidebar">
          <h3 style={{margin:0,textAlign:'center'}}>Your Growth Journey</h3>
          <div className="progress-row" style={{marginTop:8}}>
            {Array.from({length:12}).map((_,i)=>(
              <div key={i} className={'circle ' + (i===0? 'active':'')}>{i+1}</div>
            ))}
          </div>

          <div style={{fontSize:13,color:'#6b6b6b',textAlign:'center',marginTop:8, fontStyle:'italic'}}>
            “Growth doesn’t rush — it renews.”
          </div>
        </aside>
      </div>
    </div>
  )
}
