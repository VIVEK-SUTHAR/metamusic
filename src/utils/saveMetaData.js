import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
const saveMetaData = async (name, external_url,image, description) => {
	try {
		const metadata = {
			"description": description,
			"external_url": external_url,
			"image": `ipfs://${image.imageCID}`,
			"name": name
		};
		const uploadFile = await client.add(JSON.stringify(metadata), {
			pin: true,
		});
		const metaDataURL = `https://ipfs.infura.io/ipfs/${uploadFile.path}`;
		const medataInfo = {
			metadataCid: uploadFile.cid,
			metaDataLink: metaDataURL
		}
		console.log(metaDataURL);
		return medataInfo;
	} catch (error) {
		console.log(error);
	}
};
export default saveMetaData;
