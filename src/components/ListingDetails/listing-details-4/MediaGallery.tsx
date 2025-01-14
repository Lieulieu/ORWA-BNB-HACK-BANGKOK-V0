import Slider from "react-slick";
import { useRef } from "react";

const gallery_data: string[] = [
   "/assets/images/listing/img_57.jpg",
   "/assets/images/listing/img_58.jpg",
   "/assets/images/listing/img_59.jpg",
   "/assets/images/listing/img_60.jpg"];

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 3000,
}

const MediaGallery = () => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="media-gallery position-relative mt-100 xl-mt-80 lg-mt-60">
         <Slider {...setting} ref={sliderRef} className="media-slider-two">
            {gallery_data.map((gallery, i) => (
               <div key={i} className="item">
                  <img src={gallery} alt="" className="w-100" />
               </div>
            ))}
         </Slider>
         <ul className="slider-arrows d-flex justify-content-between style-none">
            <li onClick={handlePrevClick} className="prev_c slick-arrow"><i className="bi bi-arrow-left"></i></li>
            <li onClick={handleNextClick} className="next_c slick-arrow"><i className="bi bi-arrow-right"></i></li>
         </ul>
      </div>
   )
}

export default MediaGallery
