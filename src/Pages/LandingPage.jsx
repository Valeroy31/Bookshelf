
import AlertHeader from '../Components/LandingPage/AlertHeader'
import BookList from '../Components/LandingPage/BookList'
import Footer from '../Components/LandingPage/Footer'
import HeroArea from '../Components/LandingPage/HeroArea'
import Image from '../Components/LandingPage/Image'
import LandingBookList from '../Components/LandingPage/LandingBookList'
import Navbar from '../Components/LandingPage/Navbar'
import Section2 from '../Components/LandingPage/Section2'
import Section3 from '../Components/LandingPage/Section3'
import Section4 from '../Components/LandingPage/Section4'
import StatsSection from '../Components/LandingPage/StatsSection'

const LandingPage = () => {
  return (
    <>
    <header>
        <AlertHeader/>
        <Navbar/>
    </header>
    <main>
        <HeroArea/>
    </main>
    <section>
      <StatsSection/>
      <Section2/>
      <Section3/>
       <Image/>
     <Section4/>
     <LandingBookList/>
     <BookList/>

    </section>
    <Footer/>
    </>
  )
}

export default LandingPage