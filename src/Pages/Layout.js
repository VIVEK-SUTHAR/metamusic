import MusicPanel from "../components/MusicPanel"
import Sidebar from "../components/Sidebar"
import MusicPlayer from "../components/MusicPlayer"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { useEffect } from "react"
import UploadMusic from "./UploadMusic"
const Layout = () => {
    return (
        <div className="flex flex-row">
            <BrowserRouter>
            {/* <Sidebar /> */}
                <Routes>
                    {/* <Route index element={<Sidebar />} /> */}
                    <Route path="/" element={<MusicPanel/>} />
                    <Route path="/upload" element={<UploadMusic/>} />
                    {/* <Route index element={<MusicPlayer />} /> */}
                
                </Routes>
                <MusicPlayer/>
            </BrowserRouter>
        </div>
    )
}

export default Layout