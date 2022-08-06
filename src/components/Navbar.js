import { Search } from "../Assets/Icons";
import { Link } from "react-router-dom";
import useStore from "../Store/store";
import MetaMask from "../Assets/metalogo.svg";
import { useEffect, useState } from "react";
import getAllSongs from "../utils/getAllSongs";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [allSongs, setAllsongs] = useState("");
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);

  useEffect(() => {
    getAllSongs().then((res) => {
      setAllsongs(res)
    });
  }, []);

  const handlequery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    for (let i = 0; i < allSongs.length; i++) {
      if (allSongs[i].songName.includes(query)) {
        console.log(allSongs[i].songName);
      }      
    }
  };

  return (
    <div className="bg-[#2a2a2a]  h-16 w-full px-8">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        {/* <ul className="flex">
          <li>
            <Previous />
          </li>
          <li className="ml-5">
            <Next />
          </li>
        </ul> */}
        <ul className="flex py-2">
          <li>
            <img src={MetaMask} alt="" />
          </li>
        </ul>
        <ul className="flex py-2 ">
          <li className="relative block w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none text-gray-800"
              placeholder="Search songs"
              type="text"
              name="search"
              autoComplete="off"
              onChange={handlequery}
            />
          </li>
        </ul>
        <ul className="flex items-center">
          <li className=" hover:text-white hover:scale-105">
            <Link to="/">
              <a href="/" className="">
                <span className="mx-4">Home</span>
              </a>
            </Link>
          </li>
          <li className=" hover:text-white hover:scale-105">
            <a href="/" className=" ">
              <span className="mx-4">Support</span>
            </a>
          </li>
          <li className=" hover:text-white hover:scale-105">
            <a href="/upload" className=" ">
              <span className="mx-4">Download</span>
            </a>
          </li>
          <li className="hover:text-white hover:scale-105 ">
            <Link to="/upload">
              <a href="/" className="  mr-8">
                <span className="pl-4 border-l-2 mx-4">Upload</span>
              </a>
            </Link>
          </li>
          <button className="rounded-full bg-slate-100 hover:scale-105 px-8 py-3 text-black">
            {`0x..${currentAccount}`}
          </button>
        </ul>
      </div>
    </div>
  );
}
