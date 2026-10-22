import pkg from "shitajicss/package.json"
import pjt from "../../project.json"
import PageHomeHero from "../components/page/home/hero"
import ElementSection from "../components/element/section"
import ElementCard from "../components/element/card"
import CommonDocs from "../components/common/docs"

import previewHtml from "../assets/others/preview.html?raw"

import MdCdn from "../assets/markdown/cdn.mdx"
import MdNpm from "../assets/markdown/npm.mdx"
import MdSupport from "../assets/markdown/support.mdx"

const PageHome = () => {
  return (
    <>
      <PageHomeHero
        id="hero"
        name={pjt.site.title}
        description={pjt.site.shortDescription}
        version={pkg.version}
        repositoryUrl={pjt.site.github.url}
      />
      <ElementSection id="preview" heading="Preview">
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: previewHtml,
          }}
        />
      </ElementSection>
      <ElementSection id="how-to-use" heading="How To Use">
        <ElementCard>
          <CommonDocs>
            <MdCdn />
          </CommonDocs>
        </ElementCard>
        <ElementCard>
          <CommonDocs>
            <MdNpm />
          </CommonDocs>
        </ElementCard>
      </ElementSection>
      <ElementSection id="support" heading="Support">
        <ElementCard>
          <CommonDocs>
            <MdSupport />
          </CommonDocs>
        </ElementCard>
      </ElementSection>
    </>
  )
}

export default PageHome
