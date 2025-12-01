import logo from '../assetss/logohonda.png';

function Footer() {
    return (
        <>
        <footer id="top-footer">
            <div className="leftFooter">
                <h1>Subscribe our news letter</h1>
                <p>Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing your financial menagement.</p>
            </div>
            <div className="rightFooter">
                <label>Stay up to date</label>
                <br />
                <div style={{display: 'flex'}}>
                <input type="email" placeholder="Enter your email" 
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
                />
                <button style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    cursor: "pointer",
                    color: "white"
                }}
                >Subscribe</button>
                </div>
                <p>By subscribing you agree to our <a href="a">Privacy Police</a></p>
            </div>
        </footer>
        <footer id="bottom-footer">
            <div className="leftBottomFooter">
                <img style={{width: '50%'}} src={logo} alt='Logo'/>
            </div>
            <div className="rightBottomFooter">
                <ul>
                    <p>Features</p>
                    <li>Payment</li>
                    <li>Card</li>
                    <li>Pricing</li>
                </ul>
                <ul>
                    <p>Support</p>
                    <li>Help</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <p>Legal</p>
                    <li>Privacy Policy</li>
                    <li>Terms of Services</li>
                    <li>Cookies</li>
                </ul>   
            </div>
        </footer>
        </>
    );
}

export default Footer;