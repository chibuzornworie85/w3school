import React, { FC } from "react";
import { NavBar } from "./Component/NavBar";
import { SideBar } from "./Component/SideBar";

const App: FC = () => {
  return (
    <>
      <div className=" fixed w-[100%] z-10">
        <NavBar />
      </div>
      <div className="">
        <SideBar />
      </div>
    </>
  );
};

export default App;
