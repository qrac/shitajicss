import React from "react"

import AppLayout from "../components/app-layout"
import SectionHero from "../components/section-hero"
import SectionPreview from "../components/section-preview"
import SectionHowToUse from "../components/section-howtouse"
import SectionSupport from "../components/section-support"

const Home = () => {
  return (
    <AppLayout>
      <SectionHero />
      <SectionPreview />
      <SectionHowToUse />
      <SectionSupport />
    </AppLayout>
  )
}

export default Home
