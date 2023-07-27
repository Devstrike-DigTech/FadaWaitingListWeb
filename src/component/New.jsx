import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TextSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="md:w-1/2 w-3/4 md:mx-0 mx-auto  my-5 ">
      <Slider {...settings}>
        <div className="">
          <h2 className='text-[#3C9386] font-bold text-lg'>The Motive</h2>
          <p className=" mb-3 text-justify ">
          Our story began with a personal experience that ignited a vision for change. Faced with a prescription for a vital medication, our founder embarked on a time-consuming and frustrating journey, visiting multiple pharmacies in search of the elusive product. This experience sparked a revolutionary idea - a solution that would empower individuals to easily locate the exact pharmacy they need, right from the comfort of their homes.
          </p>
          <p className=" my-3 text-justify ">
          Whether you're a store looking to expand your reach or a customer in search of a specific product, PharmAssist is here to make your life easier. No more wasted time and energy. No more frustration or rigmarole. With our innovative solution, you can effortlessly connect with stores that cater to your unique needs, even if they're outside your local area. Say goodbye to scarcity and reservations for scarce items are just a few taps away.
          </p>
        </div>
        <div className="">
          <p className=" my-3 text-justify ">Welcome to PharmAssist, where convenience and accessibility meet innovation and empowerment. Together, let's shape a future where no one is left without the products they need, and pharmacies become beacons of efficiency and customer satisfaction.</p>
          <p className="text-justify">
          Our platform is meticulously designed to enhance convenience, saving you valuable time and ensuring a hassle-free experience for customers. Discover the availability of desired products, easily locate nearby stores, reserve scarce items, and enjoy a seamless shopping experience
          </p>
          
        </div>
        <div className="">
          <h2 className='text-[#3C9386] font-bold text-lg'>Identity</h2>
          <p className=" my-3 text-justify ">
          Pharmassist, developed by Devstrike Digital Limited, is a cutting-edge software revolutionizing the pharmacy industry. Our comprehensive suite of solutions bridges the gap between customers and pharmacies, ensuring seamless product availability and exceptional customer experience.
          </p>
          <p className=" my-3 text-justify ">
          From effortless store registration and precise inventory management to seamless reservation handling and the ability to advertise your products through our sponsored ads feature, Pharmassist equips pharmacies with the tools they need to stay ahead of the competition and deliver exceptional service. 
          </p>
          
          <p className=" my-3 text-justify ">
          Pharmassist will be available on both web and mobile, providing seamless access across devices., whether you're a pharmacy owner or a customer in need,
          </p>
          <p className=" mt-3 text-justify ">
          Join Pharmassist today and be part of the future of pharmacy!
          </p>
        </div>
        
      </Slider>
    </div>
  );
};

export default TextSlider;
