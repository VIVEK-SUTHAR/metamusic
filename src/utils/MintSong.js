import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "./utils";

export default async function MintSong(
  musicLink,
  metaDatalink,
  songName,
  singer,
  albumName,
  bannerImage
) {
  try {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const songs = await contract.mintMusicNFT(
      musicLink,
      metaDatalink,
      songName,
      singer,
      albumName,
      bannerImage
    );

    console.log(songs);
  } catch (error) {
    console.log(error);
  }
}
