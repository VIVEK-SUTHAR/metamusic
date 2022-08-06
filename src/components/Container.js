import MusicCard from "./MusicCard";
import Genre from "./Genre"
import {Link} from "react-router-dom"
import { list } from "postcss";
function Container() {
    let MusicList = [];
    for (let i = 0; i < 10; i++) {
        MusicList[i] = i + 10;
    }
    return (
        <div className='bg-[#121212] flex-1  py-6 min-h-full'>
            <Genre />
            <div className="w-screen flex flex-row flex-nowrap justify-start gap-10 overflow-x-scroll Scroll ml-3">
                {
                    MusicList.map((item) => (
                        <Link to={'1'} >
                        <MusicCard key={item} />
                        </Link>  

                    ))
                }


            </div>
        </div>
    )
}

export default Container