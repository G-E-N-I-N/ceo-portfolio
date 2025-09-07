
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Projets from "@/components/sections/Projets"
import TimeLines from "@/components/sections/TimeLines"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div className="min-h-screen">
      <Hero />

      <Services />

      <Projets />

      <TimeLines />

      <Contact />
    </div>
  )
}
