import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

function Book({ data }) {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            room: JSON.parse(event.target.room.value),
            status : "Belum Di Proses",
        }

        const JSONdata = JSON.stringify(data)
        const endpoint = 'https://62c6bd5f74e1381c0a678230.mockapi.io/books'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        alert(`Booking Sukses`)
    }

    return (
        <>
            <Header />
            <Navigation />
            <div className="book">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" id="name" name="name" required />
                        <br />
                        <label>Phone</label>
                        <input type="text" id="phone" name="phone"  required/>
                        <br />
                        <label>Email</label>
                        <input type="text" id="email" name="email"  required/>
                        <br />
                        <label>Start Date</label>
                        <input type="date" id="startDate" name="startDate"  required/>
                        <br />
                        <label>End Date</label>
                        <input type="date" id="endDate" name="endDate"  required/>
                        <br />
                        <label>Room</label>
                        <select name="room" id="room"  required>
                            {
                                data.map((item, index) => {
                                    return  <option key={index} value={JSON.stringify(item)}>{item.name}</option>
                                })
                            }
                        </select>
                        <br /><br />
                        <input type="submit" value="Booking"/><br />
                        <br/>
                    </form>
                </div>
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

export default Book;