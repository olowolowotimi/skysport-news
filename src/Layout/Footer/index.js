import React from 'react'
import cssStyle from './style/Footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return(
        <div className={cssStyle.details}>
            <div className={cssStyle.info}>
            <li>
            <FaTwitter /> Twitter
            </li>
            <li>
                <FaFacebook /> Facebook
            </li>
            </div>
            <div className={cssStyle.link}>
                <div className={cssStyle.linkcontnt}>
                    <h2 className={cssStyle.title}>Sky</h2>
                    <li>Get Sky Sports</li>
                    <li>Sky Sports Apps</li>
                    <li>Sportinglife.com</li>
                    <li>TEAMtalk.com</li>
                    <li>Football365.com</li>
                </div>

                <div className={cssStyle.linkcontnt}>
                    <h3 className={cssStyle.title}>Partners</h3>
                    <li>Sky Bet</li>
                    <li>Fantasy Football</li>
                    <li>Super 6</li>
                    <li>Planet Rugby</li>
                    <li>Golf365</li>
                    <li>Planet F1</li>
                    <li>Cricket365</li>
                </div>

                <div className={cssStyle.linkcontnt}>
                    <h3 className={cssStyle.title}>Sky Sport Channels</h3>
                    <li>Sky Sports Main Event</li>
                    <li>Sky Sports Premier League</li>
                    <li>Sky Sports Football</li>
                    <li>Sky Sports Cricket</li>
                    <li>Sky Sports Golf</li>
                    <li>Sky Sports Racing</li>
                    <li>Sky Sports F1</li>
                    <li>Sky Sports NFL</li>
                    <li>Sky Sports Arena</li>
                </div>


              <div className={cssStyle.linkcontnt}>
                  <h3 className={cssStyle.title}>More Sky Sites</h3>
                  <li>Sky.com</li>
                  <li>Sky News</li>
                  <li>Sky Group</li>
                  <li>Sky For Business</li>
                  <li>NOW TV</li>
                  <li>Sky Communal TV</li>
                  <li>Bigger Picture</li>
                  <li>Store Locator</li>
                  <li>Work For Sky</li>
                  <li>Advertise with US</li>
                  <li>Sky TV Accessories</li>
              </div>
              <div className={cssStyle.lower}>
                  
                      
                
              </div>

            </div>


        </div>
    )
}
export default Footer