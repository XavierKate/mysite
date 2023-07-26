import Header from "./Components/Header"
import infos from "./Components/database"
import Section from "./Components/Section"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="container">
      <Header />
      {infos.map((info) => (
        <Section key={info.id} info={info} />
      ))}

      <Footer />
    </div>
  )
}

export default App
