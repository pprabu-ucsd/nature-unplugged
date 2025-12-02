import React, { useState } from 'react'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import LessonPage from './components/LessonPage'

export default function App(){
  const [route, setRoute] = useState({ page: 'landing', module: null })
  return (
    <>
      {route.page === 'landing' && <Landing onStart={() => setRoute({page:'dashboard', module:null})} />}
      {route.page === 'dashboard' && <Dashboard onSelect={(m)=>setRoute({page:'lesson', module:m})} onBackToLanding={()=>setRoute({page:'landing', module:null})} />}
      {route.page === 'lesson' && <LessonPage moduleNumber={route.module} onBack={()=>setRoute({page:'dashboard', module:null})} />}
    </>
  )
}
