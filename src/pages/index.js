import SectionPreview from "../components/section-preview"
import SectionNpm from "../components/section-npm"
import SectionCdn from "../components/section-cdn"

export default () => (
  <main className="section is-main is-space-2x">
    <SectionPreview />
    <SectionNpm />
    <SectionCdn />
  </main>
)
