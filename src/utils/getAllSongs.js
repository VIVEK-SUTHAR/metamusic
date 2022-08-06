import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "./utils";

export default async function getAllSongs() {
  try {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");

    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const songs = await contract.getAllSongs();
    
    return songs
  } catch (error) {
    console.log(error);
  }
}
