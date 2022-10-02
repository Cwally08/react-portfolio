import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Picture from '../../assets/images/2x2.png';
import PDF from '../../assets/images/cv.pdf';



const Profile = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
    },3000)
}, [])


const [classList, setClassList] = useState("menu-hidden");
 //const [isToggle, setIsToggle] = useState(false);
setTimeout(() => {
    setClassList("menu");
  }, 2000);

  const circularButton = () => {
    //setIsToggle(!isToggle);
    //console.log(isToggle);
    classList === "menu" ? setClassList("menu active") : setClassList("menu");
  };
  const iZero =
    '<li style="--i: 0"><i style="color:#333;" class="fa fa-github-square" aria-hidden="true"></i></li>';
  const iOne =
    '<li style="--i: 1"><i style="color:#1A74ED;" class="fa fa-bitbucket" aria-hidden="true"></i></li>';
  const iTwo =
    '<li style="--i: 2"><i style="color:#0072b1 ;" class="fa fa-linkedin-square" aria-hidden="true"></i></li>';
  const iThree =
    '<li style="--i: 3"><i style="color: #F1502F;" class="fa fa-git" aria-hidden="true"></i></li>';
  const iFour =
    '<li style="--i: 4"><i style="color: #FF5700;"class="fa fa-reddit" aria-hidden="true"></i></li>';
  const iFive =
    '<li style="--i: 5"><i style="color:#80c660;" class="fa fa-android" aria-hidden="true"></i></li>';
  const iSix =
    '<li style="--i: 6"><i style="color:#ea4c89;" class="fa fa-dribbble" aria-hidden="true"></i></li>';
  const iSeven =
    '<li style="--i: 7"><i style="color:#66c0f4;" class="fa fa-steam-square" aria-hidden="true"></i></li>';
    return (
        <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M', 'y', ' ', 'P', 'r', 'o', 'f', 'i', 'l', 'e']}
                    idx={15}
                />
            </h1>
            <p>
              I am 4th year student I am currently studying in University of Rizal System Cainta Campus with 
              the course of Bachelor of Science in Information Technology.
            </p>
            <p>
              I created this portfolio for my ReactJS practice.
            </p>
            <p>
              If you want to download my CV just click the download button.
            </p>
          
            <a download="" href={PDF} className="button button--flex">Download CV</a>
        </div>
        <div className={classList}>
            <div className="toggle" onClick={circularButton}>
              <img src={Picture} alt="" />
            </div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iZero }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iOne }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iTwo }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iThree }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iFour }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iFive }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iSix }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iSeven }}
            ></div>
    </div>
    </div>
      
    <Loader type="pacman" />
    </>
)}

export default Profile