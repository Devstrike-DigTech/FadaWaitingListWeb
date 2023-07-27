
import React, { useState } from 'react';
import logo from "../images/logo.png";
import img from "../images/img.png";
import Slider from 'react-slick';
import Slick from "./Slick.jsx"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phoneman from "../images/phoneman.png"
import overlay from "../images/overlay.jpg";
// import "./App.css";

export default function Header(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [showOverlay, setShowOverlay] = useState(false);

  const handleJoinWaitingList = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };
    return(
         
<section className=''>
<div className='bg-[#3C9386] flex justify-between' >
  <div className='flex'>
    <p><img src={logo} alt="" /></p>
    <div className=''>
      <p className='font-bold text-2xl'> Fada</p>
      <p>Buy Drugs Anywhere</p>
    </div>
  </div>
  <div className='md:flex hidden '>
  <p>
              <button
                className="bg-[#FAAB54] text-shadow text-white rounded-lg font-bold px-5 mt-2 text-[16px]"
                onClick={handleJoinWaitingList}
              >
                Join <br /> Waiting List
              </button>
            </p>
            <p>
              <button className="leading-10 pt-4 px-2 text-shadow text-white text-[24px]">
                Contact Us
              </button>
            </p>
  </div>
  <div className="md:hidden flex  mt-2">
  <p>
              <button
                className="bg-[#FAAB54] outline-none text-shadow text-white rounded-3xl font-bold px-3 py-2 text-[16px]"
                onClick={handleJoinWaitingList}
              >
                Join List
              </button>
            </p>
            <p>
              <img src={phoneman} className='w-10 h-10 mx-3' alt="" />
            </p>
  </div>
</div>
{showOverlay && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" p-8 rounded text-center mx-auto">
            <button
              className=" hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={handleOverlayClose}
            >
             <img src={overlay} alt=""  className="w-[80%] mx-auto px-auto h" />
            </button>
          </div>
        </div>
      )}
      
      

      
</section>
    )
}