import React from 'react'
import { GiCalendar, GiClawSlashes, GiMailbox, GiModernCity, GiPhone } from 'react-icons/gi'


const Aside = () => {
  return (
<aside  className='sidebar'>
    <div className='sidebar-info'>
        <figure className='avatar-box'>
            <img className='w-[80px]' src='/images/milan.jpg' alt="img" />
        </figure>
        <div className='info-content'>
            <h1 className='name'>Milan Gyawali</h1>
            <p className='title'>Web Developer</p>
        </div>
        <button className='info_more-btn '> <span>Show context</span>
        <GiClawSlashes/></button>
    </div>
    <br />
    <hr className='text-white text-center ' />
    <br />

     {/* contact info */}
     <div className='sidebar-info_more'>
        <ul className='contacts-list'>
            <li  className='contact-item'>
                <div className='icon-box'>
                    <GiMailbox className=''/> 
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>Email</p>
                    <a href="mailto:milangyawali@gmail.com" className='contact-link'>milangyawali26@gmail.com</a>
                </div>
            </li>
            <li  className='contact-item'>
                <div className='icon-box'>
                    <GiPhone className=''/> 
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>phone number</p>
                    <a href="tel:+977 9800563295" className='contact-link'>9800563295</a>
                </div>
            </li>
            <li  className='contact-item'>
                <div className='icon-box'>
                    <GiMailbox className=''/> 
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>Email</p>
                    <a href="mailto:milangyawali@gmail.com" className='contact-link'>milangyawali26@gmail.com</a>
                </div>
            </li>
            <li  className='contact-item'>
                <div className='icon-box'>
                    <GiCalendar className=''/> 
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>BirthDay</p>
                    <time dateTime="2001-12-11" className='contact-link'> 2001 december 11</time>
                </div>
            </li>
            <li  className='contact-item'>
                <div className='icon-box'>
                    <GiModernCity className=''/> 
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>Location</p>
                    <address  > Bhaktapur, Balkot , Nepal</address>
                </div>
            </li>
        </ul>
     </div>

</aside>
  )
}

export default Aside
