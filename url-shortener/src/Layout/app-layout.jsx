import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";



const AppLayout = () => {
  return (
    <div >
      <main className="min-h-screen container " >
        <Header/>
        <Outlet/>

      </main>
      <div className="text-center p-10 bg-gray-800 mt-10 text-white">
        made with ❤️ by <a href="codewithdeepanshu.me" className="text-blue-500 hover:underline">codewithdeepanshu</a>
      </div>
    </div>
  );
};

export default AppLayout;