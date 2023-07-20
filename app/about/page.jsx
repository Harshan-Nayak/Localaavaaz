import React from "react";

export const metadata = {
  title: "About",
  description: "Meet and Get Guided",
};

const bout = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            We Would Love To Offer The Services
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            This Site Provides You Contact Information of People , Who are
            Willing To Help You.
          </p>
        </div>
        <div className="flex flex-col items-end w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0"></div>
      </div>
    </section>
  );
};

export default bout;
