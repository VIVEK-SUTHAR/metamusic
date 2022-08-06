import { useState } from "react";
import {
  ConnectDevice,
  Loop,
  Lyrics,
  NextSong,
  Pause,
  Play,
  PreviousSong,
  Queue,
  Shuffle,
  Volume,
} from "../Assets/Icons";

export default function MusicPlayer() {
  const [song, setSong] = useState("https://bafybeie54botbitl5iivjuypbuzsv3mczdy4s53mn4vfxdrbe7ppg42i5i.ipfs.infura-ipfs.io/");
  console.log(song);
  const [play, setPlay] = useState(false);
  const [currntTime, setCurrntTime] = useState(0);
  const [songLength, setSongLength] = useState(0);
  const changeValue = (e) => {
    setSongLength(parseInt(e.target.duration));
    setCurrntTime(parseInt(e.target.currentTime));
    // console.log(playValue);
  };
  return (
    <div className="z-10 h-20 fixed align-middle flex bg-[#2a2a2a] mx-3  px-2 bottom-1 rounded-lg  transition-all  ">
      <div className="flex items-center">
        <div className="w-[calc(24rem+4rem)] h-14 flex">
          <div className="w-14 h-14">
            <img
              src="https://i.scdn.co/image/ab67616d0000485160ec4df52c2d724bc53ffec5"
              alt=""
            />
          </div>
          <div className="flex-col items-center px-3 box-border">
            <h3 className="w-fit  font-semibold leading-5 text-slate-100">
              {song.title}
            </h3>
            <h5 className="w-fit font-thin text-slate-100">Jaden,Kid Cudi</h5>
          </div>
        </div>
        <div className="w-[calc(24rem+13rem)] block h-16">
          <div className="flex justify-center">
            <div className="w-64 h-8 flex justify-self-stretch space-x-5 pl-44 items-center">
              <Shuffle />
              <PreviousSong />
            </div>
            <div className="PlayPause w-8 h-8 bg-white rounded-full flex justify-center items-center">
              {play ? (
                <button onClick={() => setPlay((play) => !play)}>
                  <audio
                    onTimeUpdate={changeValue}
                    autoPlay={true}
                    src={inTheDark}
                  ></audio>
                  <Play />
                </button>
              ) : (
                <button onClick={() => setPlay((play) => !play)}>
                  <Pause />
                </button>
              )}
            </div>
            <div className="w-64 h-8 flex pl-7 space-x-5 items-center">
              <NextSong />
              <Loop />
            </div>
          </div>
          <input
            type="range"
            name=""
            value={currntTime}
            max={songLength}
            className="w-[calc(24rem+7rem)]  border-none h-1 flex mt-3 mx-auto rounded-xl accent-white border-0 Player"
          />
          {/* <progress
            value={currntTime} max={songLength}
            className="w-[calc(24rem+7rem)]  border-none h-1 flex mt-3 mx-auto rounded-xl accent-white border-0" /> */}
        </div>
        <div className="w-[calc(24rem+4rem)] h-8 ">
          <div className="flex space-x-6 ml-52 items-center h-full">
            <Lyrics />
            <Queue />
            <ConnectDevice />
            <Volume />
          </div>
        </div>
      </div>
    </div>
  );
}
