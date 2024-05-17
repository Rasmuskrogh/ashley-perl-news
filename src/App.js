import Header from "./components/header";
import Headshot from "./assets/PerlAshley.jpg";

function App() {
  return (
    <>
      <Header />
      <div className="section-wrapper">
        <section className="presentation-section">
          <h1>Hello.</h1>
          <p>
            I’m Ashley Perl – a journalist <br /> covering energy, climate and
            <br />
            science stories.
          </p>
        </section>
        <section className="image-section">
          <img src={Headshot} alt="headshot"></img>
        </section>
      </div>
    </>
  );
}

export default App;
