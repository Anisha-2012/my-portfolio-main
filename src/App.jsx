import React from "react"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Exp from "./components/experience/Exp"
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Test from "./components/testimonials/Test"

const App =() => {
    return(
        <>
            <Header />
            <Nav />
            <About />
            <Exp />
            <Services />
            <Portfolio />
            <Test />
            <Contact />
            <Footer />
        </>
    )
}

export default App;