import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "./utils";

export default async function sendAmmount(ammount) {
  try {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");

    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const songs = await contract.tipToOwner(
      "0x62CFBDE5B8805A2FA0c1e66514CaC6f4F15D9Ef3",
      {
        value: ethers.utils.parseEther(ammount),
      }
    );
      return songs;
  } catch (error) {
    console.log(error);
  }
}
