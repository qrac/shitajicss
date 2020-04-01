import pkg from "../../package.json"

export default () => {
  return (
    <section className="section is-npm" id="npm">
      <div className="inner is-space">
        <h3 className="heading is-second">npm</h3>
        <div className="group is-white-card">
          <pre className="pre">
            <code className="code">$ npm install {pkg.name}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
