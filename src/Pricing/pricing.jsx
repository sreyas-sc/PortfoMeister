import React, { useEffect } from 'react';
import './pricing.scss';
import Header from '../Header/Header';
import { Link, NavLink } from 'react-router-dom';
import Payment from '../Assets/payment.png';
import template1Image from '../Assets/temp1.jpg';
import template2Image from '../Assets/temp2.jpg';
import template3Image from '../Assets/temp3.jpg';
import template4Image from '../Assets/template4.jpg'
function Pricing() {


  return (
    <div>
      <Header />
      <div className="pricing">
        <h1>Pricing Plans</h1>
        <div className="plans">
          {/* Plan 1 */}
          <div className="plan">
            <h2>Personal Portfolio template</h2>
            <p>Perfect for individuals</p>
            <div className="template-preview">
                <img
                  src={template1Image}
                />
              </div>
            <div className="price">₹350.00</div>
            <NavLink to="/templates">
            <button>Get Started</button>
            </NavLink>
          </div>

          {/* Plan 2 */}
          <div className="plan">
            <h2>E-Commerce Template</h2>
            <p>Great for small businesses</p>
            <div className="template-preview">
                <img
                  src={template2Image}
                />
              </div>
            <div className="price">₹400.00</div>
            <NavLink to="/templates">
            <button >Get Started</button>
            </NavLink>
          </div>

          {/* Plan 3 */}
          <div className="plan">
            <h2>Professional Templates</h2>
            
            <p>For Tech professional</p>
            <div className="template-preview">
                <img
                  src={template3Image}
                />
              </div>
            <div className="price">₹470.00</div>
            <NavLink to="/templates">
            <button>Get Started</button>
            </NavLink>
          </div>
          <div className="plan">
            <h2>Enterprise Portfolio Template</h2>
            
            <p>For larger enterprises</p>
            <div className="template-preview">
                <img
                  src={template4Image}
                />
              </div>
            <div className="price">₹100.00</div>
            <NavLink to="/templates">
            <button >Get Started</button>
            </NavLink>
          </div>
        </div>
        <div className="comparison-table">
  {/* <h2>Plan Features</h2> */}
  {/* < */}
</div>

<div className="payment-methods">
  <h2>Accepted Payment Methods</h2>
  <p>We accept the following payment methods:</p>
  <div className="payment-image-container">
  <img src={Payment} alt="Accepted Payment Methods" />
  </div>
</div>

        {/* Brief Regarding Premium Plans */}
        <div className="premium-plans">
          
        </div>
      </div>
      </div>
    );
  }

export default Pricing;