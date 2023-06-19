import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../App.css";

const Context = () => {
  const content = [
    {
      id: 1,
      heading: 'Feature Name',
      text: 'This is the dummy text to fill in the space for the description of a feature in the product. This is the dummy text to fill in the space for the description of a feature in the product.This is the dummy text to fill in the space for the description of a feature in the product. ',
    },
    {
      id: 2,
      heading: 'Pharmacy Registration',
      text: "Join the Elite League of Pharmacies: Experience the Power of Pharmacy Registration on our Platform ! Calling all visionary pharmacists! Experience the transformative power of pharmacy registration on our platform. Gain access to advanced features, targeted marketing opportunities, and seamless integration. Stay ahead of the competition, expand your customer base, and lead the digital revolution in pharmacy management.Don't miss this chance to propel your pharmacy to new heights- register today and unlock unparalleled success",
    },
    {
      id: 3,
      heading: 'Inventory',
      text: "Unleash the Power of Inventory Management: Connect Customers to Your Comprehensive Drug Inventory! Introducing our app's inventory feature, designed to revolutionize how pharmacists manage their inventory while providing customers with instant access to available medications. With effortless registration and categorization, your inventory becomes visible to customers, enhancing their experience and driving loyalty. Streamline your workflow, boost customer satisfaction, and stay ahead of the competition with our game-changing inventory feature. Join us today and transform your pharmacy like never before!",
    },
    
    {
      id: 4,
      heading: 'Reseveration',
      text: "Introducing our Reservation Feature for Pharmacies: Connecting Pharmacists and Needy Customers,Our app revolutionises the way pharmacies serve customers in need by offering a seamless reservation feature. Pharmacists can view reservations for specific drugs made by customers, including information about the drug and customer. This enables efficient preparation and personalised service. Join us to streamline your operations, save time, enhance customer satisfaction, and boost revenue. Embrace the future of pharmacy services with our app's reservation feature today.",
    },
     
    {
      id: 5,
      heading: 'Reseveration',
      text: "Choose your plan wisely and experience the power of success with Pharmassist. Whether you're just starting or aiming for the top, our plans will propel your pharmacy towards unrivaled growth and prosperity.Don't wait, join Pharmassist's Plan Levels today and embark on an exciting journey towards pharmacy greatness! see more...",
    },
  ];
// Introducing Pharmassist's Plan Levels: Unleash the Power of Success!




const [currentSlide, setCurrentSlide] = useState(0);
const [showOverlay, setShowOverlay] = useState(false);
const [visibleHeadings, setVisibleHeadings] = useState(content.slice(0, 3));

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, [content.length]);

const handleHeadingClick = () => {
  setShowOverlay(true);
};

const handleOverlayClose = () => {
  setShowOverlay(false);
};

const handleShowMoreHeadings = () => {
  const nextIndex = visibleHeadings.length;
  const newHeadings = content.slice(nextIndex, nextIndex + 1);

  setVisibleHeadings((prevHeadings) => [...prevHeadings, ...newHeadings]);
};

const handlePrevSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide - 1 + content.length) % content.length);
};

const handleNextSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
};

return (
  <div>
    <div className="slide-headings">
      {visibleHeadings.map((slide) => (
        <h1
          key={slide.id}
          onClick={handleHeadingClick}
          className={`slide-heading ${
            currentSlide === slide.id - 1 ? 'active' : ''
          }`}
        >
          {slide.heading}
        </h1>
      ))}
      {visibleHeadings.length < content.length && (
        <button className="show-more-button" onClick={handleShowMoreHeadings}>
          <FaChevronRight />
        </button>
      )}
    </div>

    {showOverlay && (
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={handleOverlayClose}
      >
        <div className="overlay-content mx-auto px-10 py-10">
          <h1 className='text-center text-[#3C9386] font-bold  py-2 text-[20px] '>{content[currentSlide].heading}</h1>
          <div className='flex '>
          <p>{content[currentSlide].text}</p>
          <p>{content[currentSlide].text}</p>
          </div>
          
        </div>
      </motion.div>
    )}

    <div className="slider">
      <button className="slider-button left-button" onClick={handlePrevSlide}>
        <FaChevronLeft />
      </button>
      <button className="slider-button right-button" onClick={handleNextSlide}>
        <FaChevronRight />
      </button>
      <div
        className="slide-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {content.map((slide) => (
          <div
            key={slide.id}
            className={`slide ${currentSlide === slide.id - 1 ? 'active' : ''}`}
          >
            <h2>{slide.heading}</h2>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Context;