import React, { useEffect } from "react";
import { useMyContext } from "../api/NameContext";

const Temp = () => {
  const { data, updateData } = useMyContext();

  useEffect(() => {
    if (data) console.log(data);
  }, []);

  return <div>asdad {data}</div>;
};

export default Temp;
