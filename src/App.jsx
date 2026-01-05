import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCard from "./sections/FeatureCard"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Endorsements from "./sections/Endorsements"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { headContent } from "./constants"
const App = () => {
  document.querySelector("title").innerHTML = headContent.title;

  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard />
      <ExperienceSection />
      <TechStack />
      <Endorsements />
      <Contact />
      <Footer />
    </>
  )
}

export default App