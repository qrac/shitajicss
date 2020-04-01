import pkg from "../../package.json"
import pjt from "../../project.json"

export default () => {
  const repoUrl = pkg.repository
  const repoReleaseUrl = pkg.repository + "/releases"
  const downloadUrl =
    "https://cdn.jsdelivr.net/npm/" +
    pkg.name +
    "@" +
    pkg.version +
    "/" +
    pkg.main
  const downloadFile = "shitaji.min.css"
  return (
    <header className="section is-header is-center">
      <div className="inner is-space">
        <div className="group">
          <img
            className="img is-icon-shitajicss"
            src="/logo.svg"
            alt={pjt.site.title + "logo"}
          />
          <h1 className="heading is-title">{pjt.site.title}</h1>
          <h2 className="texts is-light">{pjt.site.desc_short}</h2>
          <p className="texts is-light is-strong">v{pkg.version}</p>
          <p className="texts is-light">
            <a className="text is-link-reverse" href={repoUrl}>
              <span className="text">Repository</span>
            </a>
            &nbsp;/&nbsp;
            <a className="text is-link-reverse" href={repoReleaseUrl}>
              <span className="text">Releases</span>
            </a>
          </p>
        </div>
        <div className="group">
          <div className="buttons is-center">
            <a
              className="button is-lg is-ghost is-round is-red"
              href={downloadUrl}
              download={downloadFile}
            >
              <span className="text">Download</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
