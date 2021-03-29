import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

const items = [
  {
    src: 'https://www.nutrimart.co.id/media/wysiwyg/MEB_NUTRIMART_Banner-Fruit-Juice-_-Syrup_Web-Banner__1366x400_digital.jpg'
  },
  {
    src: 'https://www.highco-data.be/sites/default/files/styles/case_study_feature/public/2017-12/oreo-banner.jpg?h=05e39d2b&itok=KSK7yzjD'
  },
  {
    src: 'https://m.media-amazon.com/images/S/aplus-media/vc/e20ff0eb-4609-419b-82ef-0bda5809d1c4._CR0,0,970,300_PT0_SX970__.png'
  },
  {
    src: 'https://hargamerek.com/wp-content/uploads/2019/05/Sirup-ABC-favorit-keluarga-sejak-lama-hargapaket.com_.jpg'
  },
  {
    src: 'https://www.static.ferrero.com/globalcms/immagini/53030.jpg'
  }
];

const CarouselPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <center>
            <img src={item.src} alt={item.src} width="1000" height="300" style={{borderRadius:25, marginTop: 30}}/>
        </center>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselPage;