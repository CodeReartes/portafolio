import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Diego, I consider myself a proactive, self-taught, companion and sociable person. I enjoy new challenges and always eager to learn. Web developer recently graduated from a Bootcamp looking for a job opportunity as a Trainee Developer. For my final project to develop a web page with backend and frontend. I want to be part of your company to apply my knowledge acquired during the degree and provide effective solutions for customers.
        </p>

       

      </div>
    </div>
  );
};

export default About;