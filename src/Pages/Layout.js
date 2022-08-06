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
import MusicPage from "../components/MusicPage";
const Layout = () => {
    return (
        <>
            
        <div className="flex flex-row">
          <BrowserRouter>
            {/* <Sidebar /> */}
            <Routes>
              {/* <Route index element={<Sidebar />} /> */}
              <Route path="/" element={<MusicPanel />} />
              <Route path="/upload" element={<UploadMusic />} />
              <Route path="/:id" element={<MusicPage />} />
              {/* <Route index element={<MusicPlayer />} /> */}
            </Routes>
            {/* <MusicPage/> */}

            <MusicPlayer />
          </BrowserRouter>
        </div>

       
      </>
    );
}

export default Layout