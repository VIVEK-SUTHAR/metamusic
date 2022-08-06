import React from "react";
import { useState,useEffect,useRef} from "react";

export default function RewardPopup(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;
    const saveClicked = () => {
      // navigate('/');
      onClickOutside && onClickOutside();
    }
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside();
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [onClickOutside]);
    if (!props.show)
      return null;

  return (
    <div
      ref={ref}
      className="w-96 h-80 absolute left-[23rem] rounded-lg top-72 bg-white mb-1 shadow-xl shadow-black z-40"
    >
      <div className=""></div>
    </div>
  );
}
