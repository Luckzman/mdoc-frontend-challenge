import React from 'react';
import Card from '../../Components/Card';
import data from './fixtures';

import './ResourceDetailsPage.scss';

const ResourceDetailsPage = () => {
  return (
    <div className="ResourceDetailsPage">
      <div className="container">
        <h1 className="resource-details-header">
          Intermountain Healthcare:<br />
          Optimizing the Provider-Patient Digital Experience Through Telehealth
          Interoperability
        </h1>
        <div className="img-section">
          <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594598351/mDoc/mdoc_image/covid-response/NoPath_-_Copy_2.png" alt="" />
          <div className="img-group">
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594598349/mDoc/mdoc_image/covid-response/NoPath_-_Copy_3.png" alt="" />
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594598350/mDoc/mdoc_image/covid-response/NoPath_-_Copy_5.png" alt="" />
          </div>
        </div>
        <div className="about-section">
          <h2>About</h2>
          <div className="about-group">
            <div className="about-group_left">
              <p>Watch At 20 June 2020, 6 PM </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="about-group__right">
              <h6>Market Verticals</h6>
              <p>Webinar</p>
              <div className="social-links">
                <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591255/mDoc/mdoc_image/covid-response/Group_13117.svg" alt="" />
                <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591255/mDoc/mdoc_image/covid-response/Group_13116.svg" alt="" />
                <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591255/mDoc/mdoc_image/covid-response/Group_13115.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Detail</h2>
          <p>Working remotely—whether from home, a café, a coworking space, or a satellite office—is becoming increasingly popular as people seek out flexibility and balance in their work environments. In fact, data from the U.S. census indicates that over 8 million people worked from home in 2017, and current workplace trends suggest that number will continue to grow.<br /><br />

          There are plenty of benefits of integrating remote work into your organizational culture. When your talent pool is unrestricted by location, you’re better equipped to recruit the very best talent, with a better chance to increase diversity in the workplace by hiring people from different locations and backgrounds. Offering your employees flexibility can also reduce your business’s carbon footprint and help your employees cut commuting costs, too. Studies show that when employees have the option to work remotely, they feel a stronger sense  of work-life balance, which can boost productivity and overall well-being, ultimately saving the company money in the long run.<br /><br />

          But managing a remote team comes with challenges. Without face-to-face contact, it can be more difficult to establish personal connections and build trust with employees. With remote employees, managers have less insight into their teams’ day-to-day tasks, and may have to experiment with different types of communication practices to help the team function at its full potential.<br /><br />

          With so many people seeking out flexible opportunities, managers have to learn to adapt to this new format. With the right tools and tips, managers can ensure their virtual employees are supported, productive, and engaged.<br /><br />

          There are plenty of benefits of integrating remote work into your organizational culture. When your talent pool is unrestricted by location, you’re better equipped to recruit the very best talent, with a better chance to increase diversity in the workplace by hiring people from different locations and backgrounds. Offering your employees flexibility can also reduce your business’s carbon footprint and help your employees cut commuting costs, too. Studies show that when employees have the option to work remotely, they feel a stronger sense  of work-life balance, which can boost productivity and overall well-being, ultimately saving the company money in the long run.  There are plenty of benefits of integrating remote work into your organizational culture. When your talent pool is unrestricted by location, you’re better equipped to recruit the very best talent, with a better chance to increase diversity in the workplace by hiring people from different locations and backgrounds. Offering your employees flexibility can also reduce your business’s carbon footprint and help your employees cut commuting costs, too. Studies show that when employees have the option to work remotely, they feel a stronger sense  of work-life balance, which can boost productivity and overall well-being, ultimately saving the company money in the long run. <br /><br />

          </p>
        </div>

        <div className="other-resource-section">
          <div className="other-resource-heading">
            <h5>Other Resource</h5>
            <p>See All</p>
          </div>
          <div className="card-container">
            {data.map((item, i) => <Card
              key={`item${i}`}
              url={item.url}
              type={item.type}
              topic={item.topic}
              content={item.content}
            />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDetailsPage;
