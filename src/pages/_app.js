import AppHead from "../components/app-head"
import AppHeader from "../components/app-header"
import AppFooter from "../components/app-footer"

import "../scss/_shitaji.scss"
import "../assets/scss/project.scss"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <AppHead />
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </div>
  )
}

export default MyApp
