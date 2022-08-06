import React, { useState } from "react";
import Navbar from "../components/Navbar";
import saveMetaData from "../utils/saveMetaData";
import StoreToIPFS from "../utils/saveToIPFS";
function UploadMusic() {
	const [audioFile, setAudioFile] = useState(null);
	const handleFileChange = async (e) => {
		e.preventDefault();
		if (e.target.files[0]) {
			setAudioFile(e.target.files[0]);
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
		<div className="flex flex-col w-screen overflow-hidden">
			<Navbar />
			<div className="bg-[#121212] h-full flex flex-col">
				<div className=" font-bold text-center text-4xl my-6 text-green-400">
					Lets Upload Your work
				</div>
				<div className="flex flex-row">
					<div className="flex flex-1 flex-col bg-[#121212] w-full p-4">
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
						I
					</div>
					<div className="flex flex-1 flex-col items-center  justify-start  bg-[#121212]  ">
						<div className="border-4 border-dashed border-green-400 my-24 text-green-400 p-8 h-72 flex flex-col justify-center items-center rounded-md">
							<h6 className="text-2xl">
								Upload Your Music in .mp3,.wav or any format
							</h6>
							<input
								type="file"
								className=" file:bg-green-400 file:outline-none file:border-0 file:max-w-max file:rounded-md my-9 rounded-md cursor-pointer"
								onChange={handleFileChange}
								//   accept=".mp3 .wav"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UploadMusic;
