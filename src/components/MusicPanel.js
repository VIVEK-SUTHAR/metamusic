import Container from "./Container";
import Navbar from "./Navbar";
export default function MusicPanel() {
    return (
        <>
            <div className="flex flex-col w-screen overflow-hidden min-h-screen">
                <Navbar />
                <Container/>
                
                {/* <UploadMusic/> */}
            </div>
        </>
    );
}
