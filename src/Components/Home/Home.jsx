import React from "react";
import Hero from "../Hero/Hero";
import Category from "../category/category";

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="container mx-auto">
                <Category />
            </div>
        </div>
    );
};

export default Home;
