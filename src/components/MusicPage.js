import React, { useEffect } from "react";
import { PlayAtAlbum, Previous } from "../Assets/Icons";
import { Next } from "../Assets/Icons";
import useStore from "../Store/store";
import { PauseAtAlbum } from "../Assets/Icons";
import { useState } from "react";
import { RewardMedal } from "../Assets/Icons";
import opensea from "../Assets/opensea.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import MusicPlayer from './MusicPlayer.js'
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
import MusicPlayer from "./MusicPlayer";

export default function MusicPage() {
  const [reward, setReward] = useState(false);
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  const [play, setPlay] = useState(false);
  const allsong = store.allsong;
  console.log(allsong);
  const { id } = useParams();
  console.log(allsong[id]);

  // console.log(id);
  // // id ? (
  //   // console.log(currentSong);
  //  let currentSong= allsong[0]
  //   useEffect(()=>{
  //        currentSong= allsong[id];
      
  // },[id])
  return (
    <div className="container relative">
      <div className="bg-[#2a2a2a]  h-16 w-full px-8 flex items-center justify-between">
        <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
          <ul className="flex">
            <li
              className="w-14 bg-transparent hover:bg-slate-400"
              onClick={() => window.history.back()}
            >
              <Previous />
            </li>
          </ul>
        </div>
        <div>
          <button className="rounded-full bg-slate-100 hover:scale-105 px-8 py-3 text-black">
            {`0x..${currentAccount}`}
          </button>
        </div>
      </div>
      <div className="h-72 bg-gradient-to-br from-slate-700 via-slate-500 to-slate-100  items-center flex pl-8">
        <div className="shadow-2xl shadow-slate-900 rounded-lg">
          <img
            className="max-h-60 rounded-lg "
            src={allsong[id].bannerImage}
            alt=""
          />
        </div>
        <div className="px-8">
          {/* <h4 className="text-lg font-bold text-white">Song Type</h4> */}
          <h1 className="font-extrabold text-7xl text-white">
            {allsong[id].songName}
          </h1>
          <p className="flex font-bold text-white">{allsong[id].singer}</p>
        </div>
      </div>

      <div className="h-[10vh] w-full items-center flex">
        <div className=" ml-8 bg-green-500 hover:scale-110 ease-in-out duration-150 w-14 h-14 min-w-max min-h-max rounded-full gap-y-5 flex items-center justify-center">
          {play ? (
            <button onClick={() => setPlay((play) => !play)}>
              <audio
                // onTimeUpdate={changeValue}
                autoPlay={true}
                src={allsong[id].musicLink}
              ></audio>
              <PlayAtAlbum />
            </button>
          ) : (
            <button onClick={() => setPlay((play) => !play)}>
              <PauseAtAlbum />
            </button>
          )}
        </div>

        <a
          href={`https://testnets.opensea.io/assets/mumbai/0x5E921d44C04A311d4cC98444513fD88554183E57/${allsong[id].tokenID}`}
        >
          <div className="px-12">
            <div className="flex min-w-max items-center min-h-max bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-full">
              <button
                onClick={() => setReward(true)}
                className="min-w-max min-h-max items-center px-4 py-1 justify-between rounded-full flex font-extrabold bg-white"
              >
                <div>VIEW ON OPENSEA</div>
                <div className="min-w-max">
                  <img src={opensea} alt="" />
                </div>
              </button>
            </div>
            
          </div>
        </a>

        <div className="px-12">
          <div className="flex min-w-max items-center min-h-max bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-full">
            <button
              onClick={() => setReward(true)}
              className="min-w-max min-h-max items-center px-4 py-1 justify-between rounded-full flex font-extrabold bg-white"
            >
              <div> REWARD OWNER</div>
              <div className="min-w-max">
                <RewardMedal />
              </div>
            </button>
          </div>
          <RewardPopup
            show={reward}
            onClickOutside={() => {
              setReward(false);
            }}
          />
        </div>
      </div>

      <div className="h-screen ">
        <div>
          <h1 className="font-light text-gray-300 pt-4 ml-8 items-center text-xl">
            # TITLE
          </h1>
          <hr className="mx-8 mt-4 " />
        </div>

        <div className="hover:bg-[#a7a7a7] tracking-widest font-Abeezee drop-shadow-lg ease-in-out duration-200 h-12 mt-4 mx-8 rounded-md flex items-center">
          <div className="list-decimal tracking-widest mx-8 flex font-medium text-lg text-white">
            {play ? (
              <button
                className="mx-2 "
                onClick={() => setPlay((play) => !play)}
              >
                <audio
                  // onTimeUpdate={changeValue}
                  autoPlay={true}
                  src={allsong[id].musicLink}
                ></audio>
                <Play />
              </button>
            ) : (
              <button
                className="mx-2 "
                onClick={() => setPlay((play) => !play)}
              >
                <span className="pr-2">1. </span>
                {/* <Pause /> */}
                {/* <Play/> */}
              </button>
            )}
            <h1 className="">{allsong[id].songName}</h1>
          </div>
        </div>
      </div>
      <MusicPlayer id={id}/>
    </div>
  );
}
