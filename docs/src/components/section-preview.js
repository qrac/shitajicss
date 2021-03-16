import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

const SectionPreview = () => {
  const data = useStaticQuery(graphql`
    query SectionPreviewQuery {
      preview: file(absolutePath: { regex: "/preview.md/" }) {
        childrenMarkdownRemark {
          html
        }
      }
    }
  `)
  const [isDark, setIsDark] = useState(false)
  const [isReverse, setIsReverse] = useState(false)
  const onChangeIsReverse = (value) => setIsReverse(value)
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches && setIsDark(true)
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          //console.log("change dark")
          setIsDark(true)
          setIsReverse(false)
        } else {
          //console.log("change light")
          setIsDark(false)
          setIsReverse(false)
        }
      })
  }, [])
  return (
    <section className="section" id="preview">
      <div className="inner">
        <h2 className="heading">{"Preview"}</h2>
        <div className="preview">
          <div className="preview-mode-spacer" />
          <PreviewMode
            isDark={isDark}
            isReverse={isReverse}
            onChange={onChangeIsReverse}
          />
          <div
            className={classNames("preview-html", isReverse && "is-reverse")}
            dangerouslySetInnerHTML={{
              __html: data.preview.childrenMarkdownRemark[0].html,
            }}
          />
        </div>
      </div>
    </section>
  )
}

const PreviewMode = ({ isDark, isReverse, onChange }) => {
  return !isDark ? (
    <div className="preview-mode">
      <div className="preview-mode-buttons">
        <button
          onClick={() => onChange(false)}
          className={classNames(
            "preview-mode-button",
            !isReverse && "is-active"
          )}
          type="button"
        >
          {"Light"}
        </button>
        <span>{"|"}</span>
        <button
          onClick={() => onChange(true)}
          className={classNames(
            "preview-mode-button",
            isReverse && "is-active"
          )}
          type="button"
        >
          {"Dark"}
        </button>
      </div>
    </div>
  ) : (
    <div className="preview-mode">
      <div className="preview-mode-buttons">
        <button
          onClick={() => onChange(true)}
          className={classNames(
            "preview-mode-button",
            isReverse && "is-active"
          )}
          type="button"
        >
          {"Light"}
        </button>
        <span>{"|"}</span>
        <button
          onClick={() => onChange(false)}
          className={classNames(
            "preview-mode-button",
            !isReverse && "is-active"
          )}
          type="button"
        >
          {"Dark"}
        </button>
      </div>
    </div>
  )
}

export default SectionPreview
