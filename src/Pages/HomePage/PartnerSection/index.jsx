import React from 'react';
import Carousel from 'react-elastic-carousel'

import './PartnerSection.scss';

const images = [
  { id: 1, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423839/mDoc/mdoc_image/projectecho.png' },
  { id: 2, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423837/mDoc/mdoc_image/Image_4.png' },
  { id: 3, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423837/mDoc/mdoc_image/Image_5.png' },
  { id: 4, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423838/mDoc/mdoc_image/Image_6.png' },
  { id: 5, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423838/mDoc/mdoc_image/Image_7.png' },
  { id: 6, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423839/mDoc/mdoc_image/projectecho.png' },
  { id: 7, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423838/mDoc/mdoc_image/Image_7.png' },
  { id: 8, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423837/mDoc/mdoc_image/Image_4.png' },
  { id: 9, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423838/mDoc/mdoc_image/Image_7.png' },
  { id: 10, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423838/mDoc/mdoc_image/Image_6.png' },
  { id: 11, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423837/mDoc/mdoc_image/Image_5.png' },
  { id: 12, url: 'https://res.cloudinary.com/dx0nauane/image/upload/v1594423838/mDoc/mdoc_image/Image_7.png' },
];

const PartnerSection = () => {
  return (
    <div className="PartnerSection">
      <div className="container">
        <h3>Partners and Recognition</h3>
        <Carousel itemsToScroll={5} itemsToShow={5} >
          {images.map(image => <img key={image.id} src={image.url} alt="" />)}
        </Carousel>
      </div>
    </div>
  );
}

export default PartnerSection;
