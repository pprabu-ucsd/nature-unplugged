import React, {useState} from 'react'

function Tabs({tabs, active, onChange}){
  return (
    <div className="tabs" role="tablist">
      {tabs.map(t=>(
        <div key={t} className={'tab ' + (active===t? 'active':'')} onClick={()=>onChange(t)} role="tab">{t}</div>
      ))}
    </div>
  )
}

export default function LessonPage({moduleNumber, onBack}){
  const [tab, setTab] = useState('Overview')
  return (
    <div className="container fade-in" style={{paddingBottom:40}}>
      <header className="header" style={{marginBottom:12}}>
        <div className="brand"><div className="logo">🌿</div> Nature Unplugged</div>
        <div className="actions">
          <button style={{background:'transparent',border:'none',cursor:'pointer'}} onClick={onBack}>Back to Dashboard</button>
        </div>
      </header>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <h2 style={{margin:0}}>Module {moduleNumber} — Lesson Title</h2>
        <div style={{color:'#6b6b6b'}}>Module {moduleNumber} • 8:24</div>
      </div>

      <div className="lesson-layout" style={{marginTop:18}}>
        <main>
          <div className="video card" role="region" aria-label="Video player">
            <div className="play">▶</div>
          </div>

          <Tabs tabs={['Overview','Resources','Reflection']} active={tab} onChange={setTab} />

          <div style={{marginTop:14,display:'grid',gap:12}}>
            {tab==='Overview' && (
              <div className="card">
                <h3 style={{marginTop:0}}>Learning Goals</h3>
                <ul>
                  <li>Describe the purpose of the lesson.</li>
                  <li>Placeholder for content objectives.</li>
                  <li>Understand the value of nature-based restoration.</li>
                </ul>
              </div>
            )}

            {tab==='Resources' && (
              <div className="card">
                <h3 style={{marginTop:0}}>Resources</h3>
                <p style={{color:'#6b6b6b'}}>Links, images, and attachments go here.</p>
              </div>
            )}

            {tab==='Reflection' && (
              <div className="card">
                <h3 style={{marginTop:0}}>Reflection Prompt</h3>
                <p style={{color:'#6b6b6b'}}>Short journaling prompt for learners.</p>
              </div>
            )}
          </div>
        </main>

        <aside className="sidebar">
          <h3 style={{margin:0,textAlign:'center'}}>Your Growth Journey</h3>
          <div className="progress-row" style={{marginTop:8}}>
            {Array.from({length:12}).map((_,i)=>(
              <div key={i} className={'circle ' + (i+1===moduleNumber? 'active':'') }>{i+1}</div>
            ))}
          </div>

          <div className="card" style={{marginTop:10}}>
            <h4 style={{margin:0}}>Quick Reflection</h4>
            <p style={{color:'#6b6b6b',marginTop:8}}>How did this lesson make you feel?</p>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button className="cta" style={{padding:'8px 12px',background:'#eee',color:'#333',boxShadow:'none'}}>Journal</button>
              <button className="cta" style={{padding:'8px 12px',background:'#eee',color:'#333',boxShadow:'none'}}>Share</button>
            </div>
          </div>

          <div style={{fontSize:13,color:'#6b6b6b',textAlign:'center',marginTop:8, fontStyle:'italic'}}>
            “Small habits, big change.”
          </div>
        </aside>
      </div>
    </div>
  )
}
