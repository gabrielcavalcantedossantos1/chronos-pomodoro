//router dom
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

//pages
import Home from "../../pages/Home";
import AboutPomodoro from "../../pages/AboutPomodoro";
import NotFound from "../../pages/NotFound";
import { useEffect } from "react";
import { History } from "../../pages/History";
import { Config } from "../../pages/Config";

function ScrollParaCima() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [pathname])

  return null
}

export function MainRouter() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-pomodoro' element={<AboutPomodoro/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/settings" element={<Config/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <ScrollParaCima/>
      </BrowserRouter>
  )
}