import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
    },3000)
}, [])

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'gmail', 'template_hqow4ii', form.current, 'G0Qhha2jWXJH73zU8')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
}

    return (
        <>
        <div className='container contact-page'> 
        <div className='text-zone'>
            <h1>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                idx={15}
                />
            </h1>
            <p>I am interested in freelance oppurtunities - specially ambitious or 
                large projects. However, if you have other request or question,
                don;t hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}> 
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder='Email' required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required ></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className="info-map">
            Christian Wally Atendido,
            <br/>
            Philippines,
            <br />
            San Buena Compound, Barangay Santo Domingo <br/>
            Cainta, Rizal <br/>
            <span>christianwallyatendido@gmail.com</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[14.5873307, 121.1155378]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[14.5873307, 121.1155378]}>
              <Popup>Wally lives here, come over for a cup of coffee :)</Popup>
              </Marker>
            </MapContainer>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact