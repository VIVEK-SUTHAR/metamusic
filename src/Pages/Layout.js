import MusicPanel from "../components/MusicPanel"
import Sidebar from "../components/Sidebar"
import MusicPlayer from "../components/MusicPlayer"
import { useEffect } from "react"
import UploadMusic from "./UploadMusic"
const Layout = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            {/* <MusicPanel /> */}
            <UploadMusic/>
            <MusicPlayer/>
        </div>
    )
}

export default Layout