import { Svg } from "minista/assets"
import type { Props } from "./props"
import "./style.css"

export default function PageHomeHero({
  id,
  name,
  description,
  version,
  repositoryUrl,
}: Props) {
  return (
    <section className="hero" id={id}>
      <Svg
        src="/src/assets/svgs/logo-icon.svg"
        className="svg-logo-icon"
        aria-hidden="true"
      />
      <h1>
        <Svg
          src="/src/assets/svgs/logo-text.svg"
          className="svg-logo-text"
          role="img"
          aria-label={name}
        />
      </h1>
      <p className="hero-description">{description}</p>
      <p className="hero-note">
        <span>v{version}</span>
        {" / "}
        <a href={repositoryUrl}>Repository</a>
        {" / "}
        <a href={repositoryUrl + "/releases"}>Releases</a>
      </p>
    </section>
  )
}
