import React, { useState } from "react";

const Temprature = ({ setCity, stats }) => {
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>

      <div className="flex gap-1 h-full relative justify-center items-center">
        <input
          type="text"
          className="w-[90%] rounded outline-none focus:border-[#ccc] p-2 text-[12px] overflow-ellipsis bg-white/45  text-black text-center"
          onChange={handleChangeCity}
          placeholder="Enter Your City Name..."
          defaultValue={"Bengaluru"}
        />
        <span className="bi bi-geo-alt-fill w-[10%] text-white/85"></span>
      </div>
      <div className="flex justify-center my-3">
        {stats.isDay !== 0 ? (
          <span className="text-[55px] text-white/70  bi bi-sun-fill"></span>
        ) : (
          <span className="text-[55px] text-white/70  bi bi-moon-fill"></span>
        )}
      </div>

      <div className="flex justify-center">
        <span className="text-[40px] text-white/70 font-bold">
          {stats.temp}
          <span>&#176;C</span>
        </span>
      </div>

      <div className="absolute flex flex-col text-center w-[100%] bottom-2">
        <span className="text-white/70">{stats.condition}</span>
        <span className="text-white/70">{stats.time}</span>
      </div>
    </div>
  );
};

export default Temprature;
