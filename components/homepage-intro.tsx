import React from "react";

type HomepageIntroProps = {
  className?: string;
};

const HomepageIntro = (props: HomepageIntroProps) => {
  return (
    <div className={props.className + " " + "flex max-md:flex-col gap-4 p-4"}>
      {/* Profile picture will go here */}
      <div className="flex-1 flex justify-center items-center text-center">
        {/* Circular background with box shadow. The image will be contained within. */}
        <div className="p-4 rounded-full shadow-profile">
          <img
            className="max-w-[400px] rounded-full"
            src="images/profile-picture.jpeg"
            alt="Profile picture of Vikram Singh."
          />
        </div>
      </div>
      {/* Name, tagline, and socials (github, linkedin) */}
      <div className="flex-1 flex justify-center items-start text-left flex-col gap-4">
        <p className="text-[#78cc9b] font-bold text-7xl">Vikram </p>
        <p className="text-[#a2dcb7] font-bold text-7xl">Singh.</p>
        <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum eos dolorum necessitatibus et, quisquam exercitationem maiores hic totam quasi a debitis corrupti quis? Rerum nulla voluptate obcaecati reprehenderit quod?</p>
        <div className="flex flex-row gap-4">
          <a href="https://github.com/vikramsingh13" target="_blank" className="">github</a>
          <a href="https://www.linkedin.com/in/vikram-singh-32b0b2119/" target="_blank" className="">linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
