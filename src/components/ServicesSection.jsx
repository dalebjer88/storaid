import React from 'react'
import servicesimg from '../assets/servicesimg.svg';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
        <div className="container">
            <div className="services-content">
                <h4>Our Services</h4>
                <div className="services-text">
                    <h3>Specialized Storage for Every Special Item </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
                <div id="pair1" className="service-grid">
                    <div className="service-pair">
                        <h4>Diverse Unit Sizes</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div id="pair2" className="service-pair">
                        <h4>Vehicle Storage</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <img id="service-img" src={servicesimg}/>
                    <div id="pair3" className="service-pair">
                        <h4>Moving Assistance</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div id="pair4" className="service-pair">
                        <h4>Top-Notch Security</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>    
        </div>                  
    </section>
  )
}

export default ServicesSection