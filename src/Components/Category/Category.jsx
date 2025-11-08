import React from "react";

const Category = () => {
    return (
        <div className="py-8">
            <h3 className="text-2xl">Shop by category</h3>
            <div className="flex gap-6 mt-6 flex-wrap justify-center">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="sneaker.jpg"
                            alt="Shoes"
                            className="h-57 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            sneaker
                            <div className="badge text-red-500 border-1 border-red-400">
                                NEW
                            </div>
                        </h2>
                        <p>
                            A card component has a figure, a body part, and
                            inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="casual.jpg"
                            alt="Shoes"
                            className="h-57 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Casual
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            A card component has a figure, a body part, and
                            inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="boot.jpg"
                            alt="Shoes"
                            className="h-57 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Boot
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            A card component has a figure, a body part, and
                            inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
