import MetaMask from '../Assets/metalogo.svg'
import illustration from '../Assets/metacreator2.png'
import { useState } from 'react'

const Hero = ({ connectWallet }) => {
const [about, setAbout] = useState(false)

    return (
        <div className="h-screen glass min-w-full">
            <div id="nav" className="flex flex-row justify-between top-0 mt-0 px-12">
                <img src={MetaMask} alt="" className="" />
                <ul className="flex flex-row items-center relative justify-center transition-all ease-in-out duration-300 text-2xl font-Barlow font-light ">
                    <li className="mx-6 my-2 text-white font-mono w-min h-min hover:cursor-pointer navlink rounded-lg px-4 py-2 hover:text-purple-400" >Home</li>
                    <li onClick={()=>setAbout(value=> !value)} className="mx-6 my-2 text-white font-mono w-min h-min hover:cursor-pointer navlink rounded-lg px-4 py-2 hover:text-purple-400" >About</li>

                    
                   {about? (<div className='AboutPart absolute top-20 bg-gradient-to-br from-slate-200 via-slate-500 to-slate-700 shadow-black shadow-2xl p-4 rounded-l'>
                        <h3>Metamusic is a decentralized music platform where artists can showcase their work as NFT , and can claim rewards for the same.</h3>
                        <br/>
                        <h3>Enjoy your music, keep listening</h3>
                    </div> ): null }

                    <li className="mx-6 my-2 text-white font-mono w-min h-min hover:cursor-pointer p-4" onClick={connectWallet} ><button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-3 rounded-xl hover:scale-105 transition-all text-white" >Connect</button></li>
                </ul>
            </div>
            {/* <hr className="h-1 w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/> */}
            <div className="flex justify-around">
                <main className=" bg-gradient-to-b pl-12 flex flex-col justify-center overflow-hidden rounded-lg mt-10">
                    <h2 className="font-extrabold max-w-4xl md:text-8xl font-Inter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Turn Your Music Into NFT's</h2>
                    <h2 className="text-5xl font-QuickSand text-purple-500 font-extrabold my-6  tracking-widest ">Listen | Own | Earn</h2>
                    <div className="flex justify-between max-w-sm">
                        <button className="px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-xs font-semibold py-4 rounded-2xl hover:scale-94 text-2xl text-white hover:scale-105 transition-all mt-4" onClick={connectWallet}>Connect Wallet </button>
                        {/* <button className="glass-strong px-4 border-purple-400 border-0 max-w-xs font-semibold py-4 rounded-2xl hover:scale-94 text-2xl text-purple-500 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:scale-105 transition-all" onClick={connectWallet}>Learn More </button> */}
                    </div>
                </main>
                <div className=" max-w-xl  ">
                    <img className='h-[32rem]' src={illustration} alt="" />
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
