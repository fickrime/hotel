import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Image from 'next/image'

function Price({ data }) {

  return (
    <>
      <Header />
      <Navigation />
      <div className="prices">
        <div className="container">
          <h3>Price list</h3>
          <table>
            <tr>
              <td>Jenis Kamar</td>
              <td>Harga Kamar</td>
              <td>View</td>
            </tr>
            {
                data.map((item, index) => {
                return <tr key={index}>
                    <td>{ item.name }</td>
                    <td>Rp { item.price } Per night</td>
                    <td><Image src={item.img} width="100" height="100" /></td>
                  </tr>
                })
            }
          </table>
        </div>
        <br />
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://62c6bd5f74e1381c0a678230.mockapi.io/rooms`)
  const data = await res.json()

  return { props: { data } }
}

export default Price;