import React from "react";

function Chatbox() {
    return (
        <div className="bg-primary-grad p-0.5 w-1/4 absolute rounded-t-3xl">
            <div className="flex bg-white rounded-t-3xl">
                <div
                    className="w-20 h-20 rounded-full"
                    style={{
                        backgroundImage:
                            'url("https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <p>Rose Blackpink</p>
            </div>
        </div>
    );
}

export default Chatbox;
