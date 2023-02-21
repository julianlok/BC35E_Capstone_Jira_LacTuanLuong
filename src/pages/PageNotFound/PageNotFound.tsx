import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const PageNotFound = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col text-white bg-text1 items-center justify-center">
      <div className="max-w-[1000px] mx-auto my-0 text-center">
        <img
          src="./img/404.png"
          alt="notfound"
          className="max-w-[250px] mx-auto mb-10"
        />
        <h1 className="text-[60px] font-bold mb-5 ">
          404 - Looks like you're lost.
        </h1>
        <p className="max-w-[800px] mx-auto mb-10">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-block py-4 px-8 text-white bg-gradient-to-tr from-[#00a7b4] to-[#a4d96c] font-medium rounded-lg"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
