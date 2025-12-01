import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Logo from '../assetss/logo2.png';
import Transmission from '../assetss/transsmition.png';
import Top from '../assetss/top.png';
import Wheel from '../assetss/wheel.png';
import Front from '../assetss/front.png';
import BoxAcc from '../assetss/Box.png';
import Givi from '../assetss/Givi.png';
import Exhachus from '../assetss/Exchaust.png'; 
import { FaShop } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import advNav from '../assetss/Adv 750.jpg';


// register plugins we need (do not register react hook as plugin)
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const HomePage = () => {

    // GSAP context — animates UI when component mounts
    useGSAP(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section1',
            scrub: true,
            start: 'center 100%',
            end: '40% center',
            toggleActions: 'play play  none none'
        }
    }, []);

    tl.addLabel('#section1')
    .fromTo('.middleButtons', {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scale: 1,
        ease: 'power2.out'
    })




    gsap.from(['.user','.location','.shopping','.shop',], {
        x: -300,
        ease: 'backIn(2)',
    })


    gsap.from('.navAdv', {
        duration: 1,
        ease: "power2(2)",
        scale: 0.8,
        opacity: 0
    })

        // Section 2: smooth scrubbed reveal for each child
        gsap.utils.toArray('#section2 > div').forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 60, opacity: 0, scale: 0.98 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        end: 'top 40%',
                        scrub: 0.8
                    }
                }
            );
        });

        // Footer reveal: fade and lift each footer area as it scrolls into view
        gsap.utils.toArray('#top-footer, #bottom-footer').forEach((el) => {
            gsap.fromTo(
                el,
                { y: 40, opacity: 0, scale: 0.99 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                        end: 'top 35%',
                        scrub: 0.9,
                    }
                }
            );
        });

    }, [])

    // helper to smooth-scroll to section2 using ScrollToPlugin
    const scrollToSection2 = () => {
        try {
            gsap.to(window, { duration: 1, scrollTo: '#section2', ease: 'power2.inOut' });
        } catch (e) {
            // if animation plugin not available, fallback to native scroll
            document.querySelector('#section2')?.scrollIntoView({ behavior: 'smooth' });
        }
    };


  return (
    <div className='home-page'>
        <nav className='navIcons'>
            <Link className="user" to="/user">
                <FaUser  size={"23px"}/>
            </Link>
            <Link to="/location" className="location">
                <IoLocationSharp size={'29px'} />
            </Link>
            <Link to='/cart'>
                <FaShoppingCart size={'25px'} className="shopping" />
            </Link>
            <Link to='/products'>
                <FaShop size={'28px'} className="shop" />
            </Link>
        </nav>
        <nav className='navbar'>
            <img src={advNav} alt="Adv" className="navAdv"/>
        <nav className='navContent'>
            <h1>X-ADV 750cc</h1>
            <p>The Honda X-ADV is an adventure-styled scooter that blends the capabilities of an off-road motorcycle with the practicality of a maxi-scooter.</p>
            <span id='goShop'>&nbsp;&nbsp;$14,950&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Order Now<button id='goShopButton' onClick={scrollToSection2}>&#10230;</button></span>
        </nav>
        <nav className='navAside'>
            <span id='aside1'>
                <img id='Transmission' src={Transmission} alt="Transmition" />
                <p id='transmissionCnt'>6-speed Dual Clutch Transmission DCT</p>
            </span>
            <span id='aside2'>
                <img id='Logo' src={Logo} alt="Logo" />
            </span>
        </nav>
        </nav>
        <section id="section1">
            <span id='decSpan'></span>
            <h2>The power of dreams</h2>
            <p id="bodyCtn">Manages rear-wheel traction for improved safety and control, with multiple levels for various riding conditions.</p>
            <div className="middleButtons">
                <button id="firstBtn">
                    <img style={{width: '100%', height: '95%', borderRadius: '25px'}} src={Top} alt="Top" />
                </button>
                <button id='secondBtn'>
                    <img style={{width: '100%', height: '95%', borderRadius: '25px'}} src={Wheel} alt="Wheel" />
                </button>
                <button id='thirdBtn'>
                    <img style={{width: '275px', height: '85%', borderRadius: '25px', marginTop: '22px'}} src={Front} alt="Front" />
                </button>
            </div>
        </section>
        <section id="section2">
            <div id='BoxAcc'>
                <img style={{width: '280px'}} src={BoxAcc} alt="BoxAcc" />
                <span>
                    <h1>Top-case Givi </h1>
                    <p>Trekker Outback Evo Smart 42L for Honda X-ADV 750.</p>
                </span>
            </div>
            <div id='GiviAcc'>
                <span>
                    <h1>GIVI</h1>
                    <p>Aluminum finish cover to enhance the overall aesthetics of your system.</p>
                </span>
                <img style={{width: '400px'}} src={Givi} alt="Givi" />
            </div>
            <div id='ExhaustAcc'>
                <img style={{width: '350px'}} src={Exhachus} alt="Exhachus" />
                <span>
                <h1>Exhaust SC-Project</h1>
                <p>SC-Project exhaust system for a sportier sound and improved performance.</p>
                </span>
            </div>
        </section>
        <Footer />
    </div>
  );
};

export default HomePage;
