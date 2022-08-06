import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

const StoreToIPFS = async (file) => {
  try {
    const uploadFile = await client.add(file, { pin: true });
    const url = `https://ipfs.infura.io/ipfs/${uploadFile.path}`;
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
  }
};
export default StoreToIPFS;
