import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import Header from "../../components/Header/Header";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <div className="relative min-h-screen md:px-10 md:py-5 bg-lite">
      <Header />
      <div className="flex items-start gap-x-10 ">
        <div className="md:fixed ">
          <Dashboard />
        </div>
        <div className="w-full pl-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
