import MusicCard from "./MusicCard";
import getAllSongs from "../utils/getAllSongs";
import Genre from "./Genre";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Container() {
  useEffect(() => {
    getAllSongs().then(res => {
      console.log(res);
    });
  }, []);

  let MusicList = [];
  for (let i = 0; i < 10; i++) {
    MusicList[i] = i + 10;
  }
  return (
    <div className="bg-[#121212] flex-1 py-6 min-h-full">
      <Genre />
      <div className="w-screen flex flex-row flex-wrap justify-center gap-10 overflow-x-scroll Scroll ml-3">
        {MusicList.map((item) => (
          <Link to={"1"}>
            <MusicCard key={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
