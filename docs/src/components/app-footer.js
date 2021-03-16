import React from "react"

import shitajicssPkg from "shitajicss/package.json"
import pjt from "../../project.json"

const copylight = pjt.site.copylight
const nowYear = new Date().getFullYear()

const AppFooter = () => {
  return (
    <footer className="footer">
      <p className="copylight">
        {"©️ "}
        <a href={shitajicssPkg.organization.url}>
          {shitajicssPkg.organization.name}
        </a>
        {` ${copylight.startYear} - ${nowYear}`}
      </p>
    </footer>
  )
}

export default AppFooter
