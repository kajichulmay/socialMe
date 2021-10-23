import React from "react";
import { useHistory } from "react-router-dom";

function Register() {
    // history
    const history = useHistory();

    // function
    const handleclickSignin = () => {
        history.push("/");
    };

    return (
        <div className="w-full justify-center mt-10 flex lg:h-full lg:mt-20">
            <div className="shadow-lg w-full flex flex-col bg-white md:w-2/3 lg:flex-row lg:h-5/6 lg:rounded-3xl">
                {/* left sector */}
                <div className="text-center bg-primary-grad text-white w-full p-10 pt-20 flex flex-col items-center lg:w-2/3 lg:rounded-l-3xl lg:pt-32">
                    <p className="text-4xl">Register Now!!!</p>
                    <div className="flex flex-col justify-between items-center h-1/3 mt-10 font-light lg:h-1/3 lg:justify-between">
                        <p className="text-xl">Create Your new account</p>
                        <p className="text-xl">To Create youe comunity</p>
                        <p className="text-xl">Join your friend</p>
                        <p className="text-xl">and show Who you are</p>
                    </div>
                    <button
                        onClick={handleclickSignin}
                        className="h-12 bg-white text-red-400 shadow-lg rounded-full p-2 w-1/2 mt-16"
                    >
                        SIGN IN
                    </button>
                </div>
                {/*end left sector */}

                {/* right sector */}
                <div className="flex flex-col justify-between items-center
                w-full p-10">
                    <p className="text-gray-400 text-2xl">Register new account</p>
                    {/* form */}
                    <form className="flex flex-col justify-between 
                    w-2/3 lg:w-4/5 mt-6 lg:mt-12">
                        {/* input firstname */}
                        <div className=" mx-3">
                            <div class="relative">
                                <input
                                    type="text"
                                    className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                    <p className="text-red-600 text-dark text-sm font-normal">Firstname</p>
                                </div>
                            </div>
                        </div>
                        <p className="pl-10 text-red-600 mt-2 mb-5">Firstname is required</p>

                        {/* input lastname */}
                        <div className=" mx-3">
                            <div class="relative">
                                <input
                                    type="text"
                                    className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                    <p className="text-red-600 text-dark text-sm font-normal">Lastname</p>
                                </div>
                            </div>
                        </div>
                        <p className="pl-10 text-red-600 mt-2 mb-5">Lastname is required</p>

                        {/* input email */}
                        <div className=" mx-3">
                            <div class="relative">
                                <input
                                    type="text"
                                    className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                    <p className="text-red-600 text-dark text-sm font-normal">Email Address</p>
                                </div>
                            </div>
                        </div>
                        <p className="pl-10 text-red-600 mt-2 mb-5">Email is required</p>

                        {/* input password */}
                        <div className=" mx-3">
                            <div class="relative">
                                <input
                                    type="password"
                                    className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                    <p className="text-red-600 text-dark text-sm font-normal">Password</p>
                                </div>
                            </div>
                        </div>
                        <p className="pl-10 text-red-600 mt-2 mb-5">Password is required</p>

                        {/* input conFirmPassword */}
                        <div className=" mx-3">
                            <div class="relative">
                                <input
                                    type="password"
                                    className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                    <p className="text-red-600 text-dark text-sm font-normal">Confirm Password</p>
                                </div>
                            </div>
                        </div>
                        <p className="pl-10 text-red-600 mt-2 mb-5">Confirm Password is required</p>

                        <button className="h-12 bg-primary-grad forhover text-white rounded-full p-2 shadow-lg mt-5 w-3/4 m-auto lg:w-1/2">
                            Register
                        </button>
                    </form>
                    {/* end form */}
                </div>
                {/* end right sector   */}
            </div>
        </div>
    );
}

export default Register;
