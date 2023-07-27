import React, { useState } from 'react';

const MissionAndVision = () => {
  const [showMission, setShowMission] = useState(true);
  const [showVision, setShowVision] = useState(false);

  const handleMissionClick = () => {
    setShowMission(true);
    setShowVision(false);
  };

  const handleVisionClick = () => {
    setShowMission(false);
    setShowVision(true);
  };

  return (
    <div className="container lg:hidden flex flex-col mx-auto bg-white border-b-2 border-blue-500 border-2">
      <div className="flex space-x-8">
        <span
          className={`cursor-pointer px-4  rounded-lg ${
            showMission ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
          }`}
          onClick={handleMissionClick}
        >
          Mission
        </span>
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg ${
            showVision ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
          }`}
          onClick={handleVisionClick}
        >
          Vision
        </div>
      </div>

      <div className=" p-4">
        {showMission && (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              euismod enim eget mauris ultrices
            </p>
          </div>
        )}

        {showVision && (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              euismod enim eget mauris ultrices
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionAndVision;
