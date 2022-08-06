import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

const uploadBannerToIPFS = async (image) => {
    try {
        const uploadImage = await client.add(image, { pin: true });
        const url = `https://ipfs.infura.io/ipfs/${uploadFile.path}`;
        const imageInfo = {
            imageCID: uploadImage.cid,
            imageLink: url
        }
        console.log(url);
        return imageInfo;
    } catch (error) {
        console.log(error);
    }
};
export default uploadBannerToIPFS;
