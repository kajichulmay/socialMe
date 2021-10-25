import React from "react";
import Loader from "react-loader-spinner";

function Spinner() {
    return (
        <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <Loader type="Puff" color="rgb(255, 130, 80)" height={100} width={100} />
        </div>
    );
}

export default Spinner;
