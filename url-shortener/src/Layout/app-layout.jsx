import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = ({ children }) => {
  return (
    <div >
      <main>
        {/*Header*/}
        <Outlet/>

      </main>
      {/*Footer*/}
    </div>
  );
};

export default AppLayout;