import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

function Home({ dataIn }) {

  return (
    <>
      <Header />
      <Navigation />
      <div className="hero">
      </div>
      <Footer />
    </>
  )
}

export default Home;