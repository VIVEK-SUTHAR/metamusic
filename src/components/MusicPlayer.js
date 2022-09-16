import { useState,useEffect,useRef} from "react";
import useStore from "../Store/store";
import {
  ConnectDevice,
  Loop,
  Lyrics,
  NextSong,
  Pause,
  Play,
  PreviousSong,
  Queue,
  Reward,
  Shuffle,
  Volume,
} from "../Assets/Icons";
import RewardPopup from "./RewardPopup";
import { useParams } from "react-router-dom";


export default function MusicPlayer({id}) {
  const state = useStore();
  const allSong = state.allsong;
  console.log(allSong)
  // const {id} = useParams();
  const [song, setSong] = useState(
    "https://ipfs.filebase.io/ipfs/QmcZ4ecg9KkKS4sukAsFRWZ6Kiiq2hCLQ5azHek3B2dpjV"
  );
  // id?(num=id):num=song
  
  // console.log(song);
  const [play, setPlay] = useState(false);
  const [currntTime, setCurrntTime] = useState(0);
  const [songLength, setSongLength] = useState(0);

  const changeValue = (e) => {
    setSongLength(parseInt(e.target.duration));
    setCurrntTime(parseInt(e.target.currentTime));
    // console.log(playValue);
  };
  return (
    <div className="z-10 h-20 fixed align-middle flex bg-[#2a2a2a] my-2 mx-4 justify-center px-2 bottom-1 rounded-lg transition-all">
      <div className="flex items-center">
        <div className="w-[calc(24rem+4rem)] h-14 flex">
          <div className="w-14 h-14">
            <img
              src={`https://w3s.link/ipfs/${allSong[id].bannerImage.slice(28)}`}
              alt=""
            /> 
          </div>
          <div className="flex-col items-center px-3 box-border">
            <h3 className="w-fit  font-semibold leading-5 text-slate-100">
              {allSong[id].songName}
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
                    src={`https://w3s.link/ipfs/${allSong[id].musicLink.slice(28)}`}
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
            {/* <Lyrics /> */}
            {/* <Queue /> */}
            {/* <ConnectDevice /> */}
            <Volume />
          </div>
        </div>
      </div>
    </div>
  );
}
