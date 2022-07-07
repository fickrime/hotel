import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Image from 'next/image'

function Galery() {

  return (
    <>
      <Header />
      <Navigation />
      <div className="galleries">
        <div className="container">
        <h1>Galleries</h1>
            <div className="gallery">
                <a href="#">
                    <Image src="/img/gallery/1.jpg" width="600" height="400"/>
                </a>
                <div className="desc">Gallery 1</div>
            </div>

            <div className="gallery">
                <a href="#">
                    <Image src="/img/gallery/2.jpg" width="600" height="400"/>
                </a>
                <div className="desc">Gallery 2</div>
            </div>

            <div className="gallery">
                <a href="#">
                    <Image src="/img/gallery/3.jpg" width="600" height="400"/>
                </a>
                <div className="desc">Gallery 3</div>
            </div>

            <div className="gallery">
                <a href="#">
                    <Image src="/img/gallery/1.jpg" width="600" height="400"/>
                </a>
                <div className="desc">Gallery 4</div>
            </div>
        </div>
        <br />
        <div className="container">
                <div className="gallery">
                    <a href="#">
                        <Image src="/img/gallery/1.jpg" width="600" height="400" />
                    </a>
                    <div className="desc">Gallery 1</div>
                </div>
    
                <div className="gallery">
                    <a href="#">
                        <Image src="/img/gallery/2.jpg" width="600" height="400" />
                    </a>
                    <div className="desc">Gallery 2</div>
                </div>
    
                <div className="gallery">
                    <a href="#">
                        <Image src="/img/gallery/3.jpg" width="600" height="400" />
                    </a>
                    <div className="desc">Gallery 3</div>
                </div>
    
                <div className="gallery">
                    <a href="#">
                        <Image src="/img/gallery/1.jpg" width="600" height="400"/>
                    </a>
                    <div className="desc">Gallery 4</div>
                </div>
            </div>
        <br />
    </div>
      <Footer />
    </>
  )
}

export default Galery;