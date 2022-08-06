import MusicCard from "./MusicCard";
import getAllSongs from "../utils/getAllSongs";
import Genre from "./Genre";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Container() {

  const [allSongs, setallSongs] = useState([]);
  
  useEffect(() => {
    getAllSongs().then(res => {
      setallSongs(res);
    });
  }, []);

  return (
    <div className="bg-[#121212] flex-1 py-6 min-h-full">
      <Genre />
      <div className="w-screen flex flex-row flex-wrap justify-center gap-10 overflow-x-scroll Scroll ml-3 mb-24">
        {allSongs.map((item, index) => (
          <Link to= {`/${index}`}>
            <MusicCard image={item.bannerImage} name={item.songName} singer={item.singer}/>
          </Link>
        ))}
      </div>
    </div>
  );
}
