import React from "react";
import { useState } from "react";
import { NFTStorage } from "nft.storage";
/// used NFT.storage to prepare the metadata for the NFT
export const saveMetaData = async (image, Name, audioCID, singer) => {
  const token = process.env.REACT_APP_KEY;
  console.log("Preparing Metadata ....");
  const nft = {
    image: image,
    name: `${Name}`,
    description: `The music file is stored here : ${audioCID} and it is sung by ${singer}`,
    external_url: audioCID,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: token });
  const metadata = await client.store(nft);
  console.log(metadata);
  console.log("NFT data stored successfully");
  console.log("Metadata URI: ", metadata.url);
  // SetMetadataURI(metadata.url);

  return metadata;
};
