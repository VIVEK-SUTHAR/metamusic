import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
const saveMetaData = async (name, external_url, description) => {
  try {
    const metadata = {
      "description": description,
      "external_url": external_url,
      "image": "",
      "name": name,
    };
    const uploadFile = await client.add(JSON.stringify(metadata), { 
      pin: true,
    });
    const metaDataURL = `https://ipfs.infura.io/ipfs/${uploadFile.path}`;
    console.log(metaDataURL);
    return metaDataURL;
  } catch (error) {
    console.log(error);
  }
};
export default saveMetaData;
