import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "../images/img.png";
import Clicker from "./Clicker";
import TextSlider from './New';


const SliderComponent = () => {
  return (
    <>
    <div className="flex">
      <TextSlider/>

      {/* Hidden image on medium and small screens */}
      <div className="hidden lg:w-1/2 lg:block">
        <img className="w-full h-auto py-10" src={img} alt="Hidden on medium and small screens" />
      </div>
    </div>
    <div className="  lg:flex hidden  text-[14px]">
          <div className="shadow-2xl  w-[60%] mx-2  text-center ">
            <h2 className="text-3xl py-3 text-center text-[#3C9386] font-bold">
              Mission
            </h2>
            <div className="px-3">
              <p className="text-[14px] my-2">Our mission at Pharmassist is to revolutionize the pharmacy industry by seamlessly connecting pharmacies and customers, ensuring easy access to essential medications and healthcare products. </p>

              <p className="text-[14px]">Through innovative technology and user-centric solutions, we aim to empower lives, enhance healthcare experiences, and foster a future where every individual can lead a healthier and happier life.</p>
            </div>
          </div>
          <div className="shadow-2xl  w-[60%] mx-2  text-center">
            <h2 className="text-3xl py-3 text-center text-[#3C9386] font-bold">Vision</h2>
            <div className="px-3 ">
              <p className="text-[14px]">  Our vision at Pharmassist is to create a world where pharmacies and customers are seamlessly connected, enabling effortless access to life-saving medications and healthcare products. </p>

              <p className="text-[14px] my-2">We envision a future where no one faces the frustration of product unavailability, where pharmacies thrive as trusted healthcare partners, and where individuals can easily obtain the medications they need to lead healthy and fulfilling lives. Through our innovative platform, we aspire to transform the pharmacy industry and empower individuals to take control of their well-being.</p>
            </div>
          </div>
        </div>
        <div>
        <Clicker/>
        </div>

    </>
  );
};

const App = () => {
  return (
    <div>
      <SliderComponent />

      
    </div>
  );
};

export default App;
