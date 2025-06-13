import React from "react";
import DropboxLogo from "./DropboxLogo";

export default function SplashScreen() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-0 w-screen h-screen border-2 border-blue-400 bg-white">
      {/* Row 1 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 2 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-2 row-span-3 flex flex-col items-start justify-between p-5 text-blue-600 border ">
        <p className="text-2xl lg:text-3xl font-bold lg:w-[50%]">
          At Dropbox, our Brand Guidelines help us infuse everything we make
          with identity.
        </p>
        <DropboxLogo color="blue-600"/>
      </div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 3 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 4 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 5 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
    </div>
  );
}
