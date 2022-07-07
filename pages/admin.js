import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import  { useState, useEffect } from 'react';

function Admin({ data }) {

    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(data)
    })

    const acceptBook = async function (item) {

        item.status = "Disetujui"

        const JSONdata = JSON.stringify(item)
        const endpoint = 'https://62c6bd5f74e1381c0a678230.mockapi.io/books/' + item.id

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        await fetch(endpoint, options)
        refresh()
        alert(`Booking Telah Disetuji`)
    }

    const cancelBook = async function (item) {

        item.status = "Dibatalkan"

        const JSONdata = JSON.stringify(item)
        const endpoint = 'https://62c6bd5f74e1381c0a678230.mockapi.io/books/' + item.id

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        await fetch(endpoint, options)
        refresh()
        alert(`Booking Telah Dibatalkan`)
    }

    const refresh = async function(){
        const res = await fetch(`https://62c6bd5f74e1381c0a678230.mockapi.io/books`)
        res = await res.json()
        setBooks(res)
    }

    return (
        <>
            <Header />
            <Navigation />
            <div className="prices">
                <div className="container">
                    <h3>Daftar Pesanan</h3>
                    <table border="1">
                        <tr>
                            <td>Nama</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Room</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                        {
                            books.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.room.name}</td>
                                    <td>{item.status}</td>
                                    <td><span onClick={() => acceptBook(item)}>Setujui</span> | <span onClick={() =>cancelBook(item)}>Batal</span></td>
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
    const res = await fetch(`https://62c6bd5f74e1381c0a678230.mockapi.io/books`)
    const data = await res.json()

    return { props: { data } }
}

export default Admin;