import MusicCard from "./MusicCard";
import Genre from "./Genre"
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
                        <MusicCard key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Container