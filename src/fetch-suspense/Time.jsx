import { useEffect, useState } from "react";
import useGetData from "./api/useGetData";

const Time = ({url}) => {
    const time= useGetData(url)

  return(
    <p>
      Time is:
       {time && time.datetime}
    </p>
  )
}

export default Time;