import React from "react";
import { useState } from "react";
import { NFTStorage } from "nft.storage";
/// used NFT.storage to prepare the metadata for the NFT
export const saveMetaData = async (image, Name, audioCID, singer) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM1MDk3QzQyMTAwY0QyNGYyODdBNEM4RUQ3MmIyYkVkMTczMzNjNzgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTU5NzI3OTY0NCwibmFtZSI6Ik1ZS0VZIn0.VQGeFmV9xrlW8Ag5EKpX4GqnTY40ekTCl0R3m3YbPjI";
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
