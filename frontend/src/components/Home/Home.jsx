import React from "react";

const Home = () => {
  return (
    <div className="w-full bg-[#f4f4f4]">
      <div className="container mx-auto flex min-h-[90vh] justify-center items-center">
        <div className="flex gap-4 py-6 md:flex-row flex-col">
          <div className="w-full h-full px-3">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_1280.jpg"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col gap-4 h-full px-3">
            <h1 className="text-3xl font-bold">Securing Applications</h1>
            <p className="text-xl max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus suscipit porro nihil nulla veniam provident ipsum
              ex fuga doloribus dolor, ad voluptatem minima eligendi consequatur
              dolorem! Distinctio saepe repellendus facere.
            </p>
            <p className="text-xl max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus suscipit porro nihil nulla veniam provident ipsum
              ex fuga doloribus dolor, ad voluptatem minima eligendi consequatur
              dolorem! Distinctio saepe repellendus facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
