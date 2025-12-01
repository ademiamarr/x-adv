import React from 'react';
import Apple from '../assetss/appleee.png';
import Facebook from '../assetss/fb.jpg';
import Google from '../assetss/google.png';
function user() {
    return (
        <div id='loginPage'>
            <div id='leftCtn'></div>
            <div id='rightCtn'>
                <div className='fromSU'>
                <h2>Sign Up</h2>    
                <form>
                    <input id='email' type="email" placeholder='Email' required />
                    <input id='password' type="password" placeholder='Password' required />
                    <p style={{cursor:"pointer", marginLeft: '55%', color: 'blue'}}>Forgot Password</p>
                    <button id='register' type="submit">Register</button>
                </form>
                <br />
                <p style={{ color: 'black'}}>OR continue with</p>
                <div id='socialBtns'>
                    <button className='socialBtn' id='googleBtn'><img src={Google} alt='Google' /></button>
                    <button className='socialBtn' id='facebookBtn'><img src={Facebook} alt='Facebook' /></button>
                    <button className='socialBtn' id='appleBtn'><img src={Apple} alt='Apple' /></button>
                </div>
                <br />
                <p>Don't have account?<strong style={{cursor: 'pointer'}}>Create Now</strong></p>
                </div>
            </div>       
        </div>
    )
}

export default user;