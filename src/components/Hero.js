import { useEffect } from "react";
import MetaMask from '../Assets/MetaMusicLogo.png'
import illustration from '../Assets/metacreator2.png'
const Hero = ({ connectWallet }) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 120 ? addBorder() : removeBorder();
        })
    })

    const addBorder = () => {
        document.getElementById('nav').classList.add('border-b-2')
        document.getElementById('nav').classList.add('border-green-400')
        document.getElementById('nav').classList.add('glass-strong')

    }
    const removeBorder = () => {
        document.getElementById('nav').classList.remove('border-b-2')
        document.getElementById('nav').classList.remove('border-green-400')
        document.getElementById('nav').classList.remove('glass-strong')
    }
    return (
        <div className="min-h-screen glass min-w-full">
            <div id="nav" className="flex flex-row justify-between top-0 mt-0 px-12">
                <img src={MetaMask} alt="" className="w-32 image" />
                <ul className="flex flex-row items-center justify-center transition-all ease-in-out duration-300 text-2xl font-Barlow font-light ">
                    <li className="mx-6 my-2 text-white font-mono w-min h-min hover:cursor-pointer navlink rounded-lg px-4 py-2 hover:text-purple-400" >Home</li>
                    <li className="mx-6 my-2 text-white font-mono w-min h-min hover:cursor-pointer navlink rounded-lg px-4 py-2 hover:text-purple-400" >About</li>
                    <li className="mx-6 my-2 text-white font-mono w-min h-min hover:cursor-pointer p-4" onClick={connectWallet} ><button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-3 rounded-xl hover:scale-105 transition-all text-white" >Connect</button></li>
                </ul>
            </div>
            {/* <hr className="h-1 w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/> */}
            <div className="flex justify-around">
                <main className=" bg-gradient-to-b pl-12 flex flex-col justify-center overflow-hidden rounded-lg mt-24">
                    <h2 className="font-extrabold max-w-4xl md:text-8xl font-Inter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Turn Your Music Into NFT's</h2>
                    <h2 className="text-5xl font-QuickSand text-purple-500 font-extrabold my-10  tracking-widest ">Listen | Own | Earn</h2>
                    <div className="flex justify-between max-w-sm">
                        <button className="px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-xs font-semibold py-4 rounded-2xl hover:scale-94 text-2xl text-white hover:scale-105 transition-all" onClick={connectWallet}>Connect Wallet </button>
                        <button className="glass-strong px-4 border-purple-400 border-0 max-w-xs font-semibold py-4 rounded-2xl hover:scale-94 text-2xl text-purple-500 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:scale-105 transition-all" onClick={connectWallet}>Learn More </button>
                    </div>
                </main>
                <div className="max-w-xl mt-4">
                    <img src={illustration} alt="" />
                </div>
            </div>
            {/* <section className="min-h-screen glass mx-2 rounded-xl flex flex-col sm:flex-row items-center justify-evenly sm:justify-around">
                <main className=" rounded-full h-52 w-52  sm:h-72  sm:w-72   gap-3 glass border-0 border-green-200  flex justify-center items-center p-2 ">
                    <img src="https://imgs.search.brave.com/BNQdG1wqrAsG52Ca_nJq2SKauXC7q4KPyjERvmr9Bzg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9q/dUJpcDk1VlBhOC9t/YXhyZXNkZWZhdWx0/LmpwZw"
                        className="absolute  h-52 w-52  sm:h-72 sm:w-72 object-cover  rounded-full"
                        alt="" />
                </main>
                <main className="rounded-xl h-min w-[75]  glass border-2 border-green-200 sm:flex-[0.8] h-76">
                    <div className=" text-4xl  font-serif font-bold px-10 py-4 sm:text-7xl text-left  text-green-400">Listening is </div>
                    <div className=" text-4xl font-serif font-bold px-10 py-4 sm:text-7xl text-end  text-green-400">Everything </div>
                    <div className=" text-4xl font-bold font-mono px-10 py-4 sm:text-5xl text-center  text-green-300">
                        Music for Everyone
                    </div>
                </main>
            </section> */}
        </div>
    )
}
export default Hero;
