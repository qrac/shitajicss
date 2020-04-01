import pkg from "../../package.json"
import pjt from "../../project.json"

export default () => {
  const dateNowYear = new Date().getFullYear()
  return (
    <footer className="section is-footer" id="footer">
      <div className="inner is-space">
        <p className="texts is-center is-light is-sm">
          <span className="text">License: CC0</span>
          &nbsp;/&nbsp;
          <span className="text">©</span>
          <a
            href={pkg.organization.url}
            rel="noopener noreferrer"
            target="_blank"
            className="text is-link-reverse"
          >
            {pkg.organization.name}
          </a>
          &nbsp;
          <span className="text">
            {pjt.site.start_year ? pjt.site.start_year : ""}
            {pjt.site.start_year != dateNowYear ? " - " : ""}
            {pjt.site.start_year != dateNowYear ? dateNowYear : ""}
          </span>
        </p>
      </div>
    </footer>
  )
}
