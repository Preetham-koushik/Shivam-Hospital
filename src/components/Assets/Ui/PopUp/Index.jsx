"use client";
import React, { useEffect, useState } from "react";
import Popup from "./Popus";

const PopUpIndex = () => {
  const [show, setShow] = useState(false);
  console.log("pop");

  useEffect(() => {
    const set = setTimeout(() => setShow(true), 3000);

    return () => {
      clearTimeout(set);
    };
  }, []);

  return <Popup show={show} setShow={setShow} />;
};

export default PopUpIndex;
