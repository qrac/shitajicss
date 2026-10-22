import type { Props } from "./props"
import "./style.css"

const ElementCard = ({ children }: Props) => {
  return <div className="card">{children}</div>
}

export default ElementCard
