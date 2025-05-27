import React from "react";
import DropboxLogo from "./DropboxLogo";

export default function SecondScreen() {
  return (
    <div className="grid grid-cols-7 grid-rows-5 gap-0 w-screen h-screen border-2 border-blue-400 bg-white">
      {/* Row 1 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-3 bg-[#b4c8e1]"></div>

      {/* Row 2 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-3 row-span-3 flex flex-col items-start justify-between p-5 bg-blue-600 text-white border ">
        <p className="text-5xl font-bold">
          From icons to illustrations, logos to language this collectionis the
          foundation for how Dropbox ooks, feels, and sounds like Dropbox.
        </p>
        <DropboxLogo color="white" />
      </div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 3 */}
      <div className="col-span-1 row-span-3 border bg-[#f9a34b]"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 4 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>

      {/* Row 5 */}
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
      <div className="col-span-1 row-span-1 border border-blue-400"></div>
    </div>
  );
}
