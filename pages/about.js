import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

function About() {

    return (
        <>
            <Header />
            <Navigation />
            <div className="about">
                <div className="container">
                    <div className="image">
                        <div className="text">
                            <h1>Hotel Banyuwangi Sejahtera</h1>
                            <p>Hotel yang cocok buat anda</p>
                        </div>
                    </div>

                    <p>Hotel Banyuwangi Sejahtera adalah grup perhotelan yang berkembang dengan portofolio hotel yang berada di
                        kota dan juga resor di seluruh Indonesia, terletak tepat di jantung tujuan di mana semua orang
                        diperlakukan dengan senyum hangat.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Galery;