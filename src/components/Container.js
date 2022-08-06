import MusicCard from "./MusicCard";
function Container() {
    let MusicList = [];
    for (let i = 0; i < 10; i++) {
        MusicList[i] = i + 10;
    }
    return (
        <div className='bg-[#121212] flex-1 overflow-y-scroll Scroll py-6 min-h-full'>
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