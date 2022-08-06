import React from "react";
import { useState, useEffect, useRef } from "react";
import sendAmmount from "../utils/sendAmmount";
export default function RewardPopup(props) {
  const [rewarsAmmount, setRewarsAmmount] = useState(0.001);
  const [txnhash, setTxnhash] = useState("");
  const ref = useRef(null);
  const { onClickOutside } = props;
  const saveClicked = () => {
    // navigate('/');
    onClickOutside && onClickOutside();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  if (!props.show) return null;
  return (
    <div
      ref={ref}
      className="w-96 h-80 absolute left-[23rem] rounded-lg top-72 bg-white mb-1 shadow-xl shadow-black z-40
      flex
      flex-col justify-start items-center
      "
    >
      <div className="p-4">
        <h4 className="text-2xl">Send some reward to creator</h4>
        <input
          className="border-2 my-2 rounded-lg p-2 outline-none border-2 focus:ring-purple-500 focus:ring-2"
          type="number"
          value={rewarsAmmount}
          onChange={(e) => {
            setRewarsAmmount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            sendAmmount(rewarsAmmount).then((res) => {
              setTxnhash(`https://mumbai.polygonscan.com/tx/${res.hash}`);
            });
          }}
          className="bg-purple-500 p-2"
        >
          Send {rewarsAmmount} MATIC to creator
        </button>
        {txnhash.length !== 0 ? (
          <h5 className="relative  my-4">
            Follow your transaction{" "}
            <a className="text-purple-700" href={txnhash} target="_blank">
              Here
            </a>
          </h5>
        ) : null}
      </div>
    </div>
  );
}
