import type { Props } from "./props"
import "./style.css"

export default function CommonFooter({ name, url }: Props) {
  return (
    <footer className="footer">
      <p className="footer-credit"><a href={url}>{name}</a></p>
    </footer>
  )
}
