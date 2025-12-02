import React from 'react'

export default function Landing({onStart}){
  return (
    <div className="container">
      <header className="header">
        <div className="brand"><div className="logo">🌿</div> Nature Unplugged</div>
        <div className="actions">Lesson Series • 12 Modules</div>
      </header>

      <section className="hero fade-in">
        <div className="left">
          <h1 className="h1">Nature Unplugged</h1>
          <p className="lead">A restorative learning journey — 12 bite-sized modules to reconnect with nature and yourself.</p>
          <div>
            <button className="cta" onClick={onStart}>Start the Course →</button>
          </div>

          <div className="features" style={{marginTop:20}}>
            <div className="feature">
              <strong>Short videos</strong>
              <div style={{color:'#6b6b6b', marginTop:6}}>5–10 minute guided modules</div>
            </div>
            <div className="feature">
              <strong>Reflection prompts</strong>
              <div style={{color:'#6b6b6b', marginTop:6}}>Journal, discussion, and personal practice</div>
            </div>
          </div>
        </div>

        <div style={{width:380}}>
          <div className="card" style={{padding:18}}>
            <div style={{height:220,borderRadius:12,background:'linear-gradient(180deg,#dff0e4,#e9f7ee)'}}></div>
            <h3 style={{marginTop:12}}>Module preview</h3>
            <div style={{color:'#6b6b6b',marginTop:8}}>Module 1 • Grounding in nature</div>
          </div>
        </div>
      </section>
    </div>
  )
}
