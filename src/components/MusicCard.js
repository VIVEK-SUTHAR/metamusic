import MetaMask from "../Assets/metalogo.svg";

export default function MusicCard({ item, image, name, singer }) {
  console.log(item);
  return (
    <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-md">
      <div className="MusicCard min-w-max h-64 bg-[#181818] rounded-md p-4 overflow-hidden opacity-9 hover:transition-all hover:delay-75 gradientborder">
        <div className="w-40 h-40 rounded-md ">
          <img
            className="rounded-md"
            aria-hidden="false"
            draggable="false"
            loading="lazy"
            src={image ? `https://w3s.link/ipfs/${item.bannerImage.slice(28)}` : ""}
            data-testid="card-image"
            alt=""
            class="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt"
          ></img>
        </div>
        <div className="pt-4 text-white">
          <h1 className="text-lg">{name}</h1>
          <h4 className="text-md text-slate-400">{singer}</h4>
        </div>
      </div>
    </div>
  );
}
