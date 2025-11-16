import React from "react";

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(src/assets/CoverPics/bg.jpg)",
                }}
            >
                <div className="hero-overlay static"></div>
                <div className="hero-content text-neutral-content text-center relative">
                    <div className="">
                        <h1 className="mb-5 text-7xl font-bold">
                            Holiday gifts for everyone
                        </h1>

                        <button className="btn shadow-red-600 border-red-500 text-red-600">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
