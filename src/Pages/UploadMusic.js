import React, { useState } from "react";
import Navbar from "../components/Navbar";
import saveMetaData from "../utils/saveMetaData";
import StoreToIPFS from "../utils/saveToIPFS";
function UploadMusic() {
  const [audioFile, setAudioFile] = useState(null);
  const [ImageFile, setImageFile] = useState(null);
  const [imageUrl, setImageurl] = useState(null);

  const handleFileChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setAudioFile(e.target.files[0]);
    }
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageurl(URL.createObjectURL(e.target.files[0]));
      console.log(imageUrl);
    }
  };

  const [songData, setSongData] = useState({
    songName: "",
    singer: "",
    albumName: "",
    license: "",
  });

  const handleSongdata = (e) => {
    setSongData((songData) => ({
      ...songData,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleMint = async () => {
    const cid = await StoreToIPFS(audioFile);
    console.log(cid);
    const metadata = await saveMetaData(
      songData.songName,
      cid,
      songData.singer
    );
    console.log(metadata);
  };

  const inputFields = [
    {
      label: "Song Name",
      inputName: "songName",
      value: songData.songName,
      required: true,
    },
    {
      label: "Singer",
      inputName: "singer",
      value: songData.singer,
      required: true,
    },
    {
      label: "Album Name",
      inputName: "albumName",
      value: songData.albumName,
      required: false,
    },
    {
      label: "License",
      inputName: "license",
      value: songData.license,
      required: false,
    },
  ];
  return (
    <div className="flex flex-col w-screen overflow-hidden min-h-screen">
      <Navbar />
      <div className="bg-[#121212] h-full flex flex-col">
        <div className=" font-bold text-center text-4xl my-6 text-green-400">
          Lets Upload Your work
        </div>
        <div className="flex flex-row px-3">
          <div className="flex flex-1 flex-col bg-[#121212] w-full">
            {inputFields.map((input) => (
              <>
                {/* <label className="text-white text-xl my-4" htmlFor="songName">
									{input.label}
								</label> */}
                <input
                  className="glass-strong px-4 py-4 my-4 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                  type="text"
                  placeholder={input.label}
                  value={input.value}
                  name={input.inputName}
                  onChange={handleSongdata}
                  required={input.required}
                />
              </>
            ))}
            <button
              type="submit"
              disabled={!songData.songName || !songData.singer}
              onClick={handleMint}
              className="bg-green-400 text-white text-3xl font-extrabold rounded-md my-6 px-2 py-4 disabled:bg-green-200"
            >
              Mint Now
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center  justify-start  bg-[#121212]  ">
            <div className="flex flex-col w-full my-4 px-4">
              <form className="flex flex-col items-center w-full">
                <div className="flex justify-evenly w-full items-center">
                  <h6 className="w-72 text-md font-bold text-white">
                    Upload your Music
                  </h6>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 my-4"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="flex justify-evenly w-full items-center">
                  <h6 className="w-72 text-md font-bold text-white">
                    Upload your Music Photo
                  </h6>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 my-6"
                    onChange={handleImageChange}
                  />
                </div>
              </form>
              {imageUrl ? (
                <div className="h-64 w-full">
                  <img
                    src={imageUrl}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadMusic;
