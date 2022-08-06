//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MetaMusic is ERC721, ERC721Enumerable, ERC721URIStorage {
    event MusicNFTMinted(
        address songOwner,
        uint256 tokenID,
        string musicLink,
        string metaDataLink,
        string songName,
        string singer,
        string albumName,
        string bannerImage
    );

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    struct Song {
        address songOwner;
        uint256 tokenID;
        string musicLink;
        string metaDataLink;
        string songName;
        string singer;
        string albumName;
        string bannerImage;
    }

    constructor() ERC721("SPOTIFYTOKEN", "SPT3") {}

    function mintMusicNFT(
        string memory musicLink_,
        string memory metaDatalink,
        string memory songName_,
        string memory singer_,
        string memory albumName_,
        string memory bannerImage_
    ) external {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, metaDatalink);
        songs.push(
            Song(
                msg.sender,
                tokenId,
                musicLink_,
                metaDatalink,
                songName_,
                singer_,
                albumName_,
                bannerImage_
            )
        );
        emit MusicNFTMinted(
            msg.sender,
            tokenId,
            musicLink_,
            metaDatalink,
            songName_,
            singer_,
            albumName_,
            bannerImage_
        );
    }

    Song[] private songs;

    function getAllSongs() public view returns (Song[] memory) {
        return songs;
    }

    function tipToOwner(address payable songOwner_) external payable {
        require(msg.value > 0, "Mufat me nam kamana hai");
        songOwner_.transfer(msg.value);
    }

    function burnToken(uint256 tokenID) external {
        _burn(tokenID);
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
