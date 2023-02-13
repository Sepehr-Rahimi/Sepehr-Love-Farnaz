import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import heart from "../../pic/heart.gif";
import farnaz from "../../pic/pic (24).jpg";
import sepehr from "../../pic/pic (47).JPG";
import "./index.css";

const Home = () => {
  const now = new Date();
  const startRel = new Date("April 11,2022 16:00:00");
  const [duration, setDuration] = useState(
    (now.getTime() - startRel.getTime()) / 1000
  );
  const year = Math.floor(duration / (3600 * 24 * 365));
  const month = Math.floor(duration / (3600 * 24 * 30.4166) - year * 12);
  const day = Math.floor(
    duration / (3600 * 24) - year * 12 * 30.4166 - month * 30.4166
  );
  const hour = Math.floor(
    duration / 3600 - year * 12 * 30.4166 * 24 - month * 30.4166 * 24 - day * 24
  );
  const min = Math.floor(
    duration / 60 -
      year * 12 * 30.4166 * 24 * 60 -
      month * 30.4166 * 24 * 60 -
      day * 24 * 60 -
      hour * 60
  );
  const sec = Math.floor(
    duration -
      year * 12 * 30.4166 * 24 * 60 * 60 -
      month * 30.4166 * 24 * 60 * 60 -
      day * 24 * 60 * 60 -
      hour * 60 * 60 -
      min * 60
  );
  // const year = Math.floor(duration / (3600 * 24 * 365))
  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((p) => p + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="flex justify-around items-center w-full py-5 md:flex-col">
        <div className="w-[30%] flex flex-col items-center text-purple-900 md:w-[70%]">
          <img
            className="rounded-lg shadow-md shadow-black"
            src={farnaz}
            alt=""
          />
          <div className="font-semibold text-[25px]">Farnaz</div>
        </div>
        <img className="w-[30%] md:w-[70%]" src={heart} alt="" />
        <div className="w-[30%] flex flex-col items-center text-purple-900 md:w-[70%]">
          <img
            className="rounded-lg shadow-md shadow-black"
            src={sepehr}
            alt=""
          />
          <div className="font-semibold text-[25px]">Sepehr</div>
        </div>
      </div>
      <div className="text-[25px] font-semibold my-5">
        <span>{year}</span>
        <span> Year </span>
        <span>{month}</span>
        <span> Month </span>
        <span>{day}</span>
        <span> Day </span>
        <span>{hour}</span>
        <span> hour </span>
        <span>{min}</span>
        <span> min </span>
        <span>{sec}</span>
        <span> sec </span>
      </div>
      <div className="flex w-full justify-around">
        🖤
        <ProgressBar
          className="wrapper"
          // width={"330px"}
          completed={Math.floor((duration / (3600 * 24) / 365) * 100)}
        />
        💖
      </div>
      <div className="text-center font-bold text-[32px] my-4">
        Love in progress
      </div>
    </div>
  );
};

export default Home;
