import React from "react";
import { asstes } from "../../assets/assets";

const Category = () => {
    return (
        <div className="py-8 ">
            <h3
                className="text-2xl font-medium underline
"
            >
                Shop by category
            </h3>
            <div className="flex gap-6 mt-6 flex-wrap justify-center">
                <a href="">
                    <div className="card bg-base-100 w-96 shadow-sm rounded-none">
                        <figure className="">
                            <img
                                src={asstes.SneakerC}
                                alt="Shoes"
                                className="h-57 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sneaker
                                <div className="badge text-red-500 border-red-400">
                                    NEW
                                </div>
                            </h2>
                            <p>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="card bg-base-100 w-96 shadow-sm rounded-none">
                        <figure>
                            <img
                                src={asstes.ClothingC}
                                alt="Shoes"
                                className="h-57 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Clothing
                                <div className="badge text-red-500 border-red-400">
                                    NEW
                                </div>
                            </h2>
                            <p>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="card bg-base-100 w-96 shadow-sm rounded-none">
                        <figure>
                            <img
                                src={asstes.AccessoriesC}
                                alt="Shoes"
                                className="h-57 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Assaacories
                                <div className="badge text-red-500 border-red-400">
                                    NEW
                                </div>
                            </h2>
                            <p>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Category;
