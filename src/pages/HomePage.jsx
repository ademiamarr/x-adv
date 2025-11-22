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

const HomePage = () => {
  return (
    <div className='home-page'>
        <nav className='navIcons'>
            <Link to="/user">
                <FaUser  size={"23px"}/>
            </Link>
            <Link to="/location">
                <IoLocationSharp size={'29px'} />
            </Link>
            <Link to='/cart'>
                <FaShoppingCart size={'25px'} />
            </Link>
            <a href='/products'>
                <FaShop size={'28px'} />
            </a>
        </nav>
        <nav className='navbar'>
        <nav className='navContent'>
            <h1>X-ADV 750cc</h1>
            <p>The Honda X-ADV is an adventure-styled scooter that blends the capabilities of an off-road motorcycle with the practicality of a maxi-scooter.</p>
            <span id='goShop'>&nbsp;&nbsp;$14,950&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Order Now<button id='goShopButton'>&#10230;</button></span>
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
        <footer>
            <p>&copy; 2024 Honda Motor Co., Ltd. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default HomePage;
