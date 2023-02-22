import React, { Component } from 'react'
import './Form1.css';
export default class Form1 extends Component {
  render() {
    return (
      <div className='form'>
        <h1 className='green width'>Superapp</h1>
        <p className='grey width'>Create your new account</p>
        <div className='grey width'>
        <a href="#" >Email | </a>
        <a href="#" >Google</a>
        </div>
        <input type="text" placeholder="Name" className='width'/>
        <input type="text" placeholder="UserName" className='width'/>
        <input type="email" placeholder="Email" className='width'/>
        <input type="tel" placeholder="Mobile" className='width'/>
        <p className='width'><input type="checkbox" />Share my registration data with Superapp</p>
        <button className='width'>SIGN UP</button>
         <p className='width'>By clicking on Sign up. you agree to Superapp <span className='green'>Terms and Conditions of Use</span>   </p>
        <p className='width'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="green">Privacy Policy</span></p>

      </div>
    )
  }
}
