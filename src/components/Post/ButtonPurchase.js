import React from 'react';

function ButtonPurchase() {
  return (
    <div className="content-section mt-4 flex flex-col  px-4">
      <div className="  w-full mt-4 mb-8 flex justify-center  ">
        <button className=" text-white font-light italic text-xl rounded-full shadow-input w-auto p-6 h-10 flex justify-center items-center bg-primary-grad forhover">
          Purchase to unlock
        </button>
      </div>
    </div>
  );
}

export default ButtonPurchase;
