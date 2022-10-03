import { useEffect, useRef } from 'react'
import './index.scss';
import LogoS from '../../../assets/images/logo-w.png'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
    const bgRef = useRef()
    //const outlineLogoRef = useRef()
    //const solidLogoRef = useRef()

   useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
    .to(bgRef.current, {
        duration:1,
        opacity: 1,
    })
    //.from(outlineLogoRef.current, {
        //drawSVG: 0,
        //duration: 20,
    //})
    gsap.fromTo(
        solidLogoRef.current,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            delay: 2,
            duration: 2,
        }
    )
   }, [])
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="W" />
            <svg 
            width="303.000000pt"
            height="358.000000pt"
            version="1.0"
            viewBox="0 0 303.000000 358.000000"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g 
                className="svg-container"
                transform="translate(0.000000,358.000000) scale(0.100000,-0.100000)"
                fill="none"
            >
                <path 
                //ref={outlineLogoRef}
                d="M2631 3558 c-47 -13 -149 -118 -195 -199 -134 -243 -270 -814 -330
                -1389 l-12 -125 -8 65 c-16 141 -56 382 -82 491 -110 475 -155 625 -231 779
                -32 65 -65 113 -103 153 -51 52 -60 57 -100 57 -135 0 -273 -257 -469 -877
                -61 -195 -84 -272 -145 -503 -15 -54 -15 -54 -9 70 11 247 -55 805 -122 1035
                -57 194 -132 333 -207 383 -61 40 -141 43 -208 6 -181 -98 -237 -361 -219
                -1019 31 -1127 150 -1879 340 -2163 73 -109 171 -182 244 -182 17 0 57 13 90
                28 168 80 334 372 593 1047 16 44 49 143 72 220 23 77 44 141 45 143 2 2 8
                -23 15 -55 59 -302 204 -792 290 -983 101 -222 228 -385 319 -410 199 -53 373
                235 535 885 98 394 249 1248 276 1560 13 155 13 437 0 545 -40 328 -184 494
                -379 438z"/>
            </g>
            </svg>
        </div>
    )
}

export default Logo
