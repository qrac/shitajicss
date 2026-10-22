import type { Props } from "./props"
import "./style.css"

const CommonDocs = ({ children }: Props) => {
  return <section className="docs">{children}</section>
}

export default CommonDocs
