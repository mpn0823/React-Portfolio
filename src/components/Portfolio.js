import React from "react";

const Card = () => (
    <div className="p-4">
        <img className="w-full" src="https://via.placeholder.com/150" />
        <div>Project Name Goes Here</div>
    </div>
);

export default () => {
    const arr = [0, 1, 2, 3, 4];
    return (
        <div className="w-full">
            <h1 className="text-6xl text-center">Portfolio</h1>
            <div>
                <div className="flex flex-wrap justify-center sm:justify-between">
                    {arr.map(() => (
                        <Card />
                    ))}
                </div>
            </div>
        </div>
    );
};
