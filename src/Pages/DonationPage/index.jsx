import React, { useState } from 'react';
import { ReactComponent as EmbraceIcon } from '../../Assets/Group 13057.svg'
import AmountSelector from '../../Components/Selector';
import './DonationPage.scss';
import Header from '../../Components/Header';

const DonationPage = () => {
  const [index, setIndex] = useState(-1);
  const amountArr = [50, 100, 200, 1000];
  const handleAmount = (amt, index) => {
    setIndex(index);
  };
  return (
    <div className="DonationPage">
      <div className="container">
        {/* <div className="donation">
          Donation
        </div> */}
        <Header name="Donation" />
        <div className="content-container">
          <EmbraceIcon className="icon" />
          <div className="donation-content">
            <h1>Help Save A Life Today</h1>
            <p>Together, we can save people who are
Suffering from COVID19</p>
            <h3>Billing Information</h3>
            <input type="text" placeholder="Full Name" />
            <div className="form-group">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <h3>Donation Amount</h3>
            <div className="radio-group">
              {amountArr.map((amt, i) => <AmountSelector key={`a${i}`} item={amt} index={i} isActive={index === i} handleItem={handleAmount} />)}
            </div>
            <h3>Card Detail</h3>
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Card Number" />
            <div className="form-group">
              <input type="text" placeholder="CVV" />
              <input type="text" placeholder="Expiry Date" />
            </div>
            <h3>Leave A Comment</h3>
            <textarea name="comment" draggable="false" id="" cols="20" rows="10" placeholder="Comment Here"></textarea>
            <button type="submit">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
