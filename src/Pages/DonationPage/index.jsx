import React from 'react';
import { ReactComponent as EmbraceIcon } from '../../Assets/Group 13057.svg'

const DonationPage = () => {
  return (
    <div className="DonationPage">
      <div className="container">
        <div>
          Donation
        </div>
        <div className="content-container">
          <EmbraceIcon className="icon" />
          <div>
            <h1>Help Save A Life Today</h1>
            <p>Together, we can save people who are
Suffering from COVID19 </p>
            <h3>Billing Information</h3>
            <input type="text" placeholder="Full Name" />
            <div>
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <h3>Donation Amount</h3>
            <div>
              <label htmlFor="amt50">
                <input id="amt50" name="amount" type="radio" className="radio" />
                $50.00
              </label>
              <label htmlFor="amt100">
                <input id="amt100" name="amount" type="radio" className="radio" />
                $100.00
              </label>
              <label htmlFor="amt200">
                <input id="amt200" name="amount" type="radio" className="radio" />
                $200.00
              </label>
              <label htmlFor="amt1000">
                <input id="amt1000" name="amount" type="radio" className="radio" />
                $1000.00
              </label>
            </div>
            <h3>Card Detail</h3>
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Card Number" />
            <div>
              <input type="text" placeholder="CVV" />
              <input type="text" placeholder="Expiry Date" />
            </div>
            <h3>Leave A Comment</h3>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
            <button type="submit">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
