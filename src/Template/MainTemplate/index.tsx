

//react
//import { useState } from 'react'

//components
import Container from '../../components/Container/index'
import Logo from '../../components/Logo/index'
import Menu from '../../components/Menu/index'
import Footer from '../../components/Footer'

//type
type MainTemplateProps = {
    children: React.ReactNode
}

const MainTemplate = ({children} : MainTemplateProps ) => {

  return (
  <>

  <Container>
    <Logo/>
  </Container>

  <Container>
    <Menu/>
  </Container>

  {children}

  <Container>
    <Footer/>
  </Container>
  </>
  )
}

export default MainTemplate