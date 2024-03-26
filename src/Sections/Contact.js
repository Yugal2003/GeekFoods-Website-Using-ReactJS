import React from 'react'
import './Contact.css'
import HeaderSecation from '../component/HeaderSecation'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <div>
        <HeaderSecation/>
        <h1 className='h1h1'>Welcome To Contact Page</h1>
        <div className='contact-page_text_plus_form_flex'>
            <div className='get_touch'>
                <h1>GET IN TOUCH WITH US</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className='our_location'>
                    <svg width={"20px"} height={"20px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>&nbsp;&nbsp;&nbsp;
                    <div className='without_icon_text'>
                      <h2>Our Location</h2>
                      <p>61,SanjayNagar,Limbayat,Udhna,Surat-394210</p>
                    </div>
                </div>
                <div className='our_location'>
                    <svg width={"20px"} height={"20px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>&nbsp;&nbsp;&nbsp;
                    <div className='without_icon_text'>
                      <h2>Phone Number</h2>
                      <p>+91 9316110894</p>
                    </div>
                </div>
                <div className='our_location'>
                    <svg width={"20px"} height={"20px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>&nbsp;&nbsp;&nbsp;
                    <div className='without_icon_text'>
                      <h2>Email Address</h2>
                      <p>yugalramesh6832@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className='form'>
              <h1>Submission Form</h1>
              <form className='form_some_input'>
                  <input autoComplete='off' type='text' placeholder='Your Name'/>
                  <input type='email' placeholder='Enter Email Address'/>
                  <input type='text' placeholder='Enter Phone Number'/>
                  <input type='password' placeholder='Enter Password'/>
                  <input type='password' placeholder='Conform Password'/>
                  <textarea placeholder='Enter Your Message' color={"10"} rows={"8"}></textarea>
                  <button className='submit_btns' type='submit'>Submit</button>
              </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact