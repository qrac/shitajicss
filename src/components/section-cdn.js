import pkg from "../../package.json"

export default () => {
  const cdnPreUrl =
    "https://cdn.jsdelivr.net/npm/" +
    pkg.name +
    "@" +
    pkg.version +
    "/" +
    pkg.main
  return (
    <section className="section is-cdn" id="cdn">
      <div className="inner is-space">
        <h3 className="heading is-second">CDN</h3>
        <div className="group is-white-card">
          <pre className="pre">
            <code className="code">
              &lt;link rel=&quot;stylesheet&quot; src=&quot;{cdnPreUrl}
              &quot;&gt;
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
