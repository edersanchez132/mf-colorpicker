import { useEffect, useState } from "react";
import { getColorsList } from "../helpers/getColorsList";
import { getLastColor } from "../helpers/getColorsList";


export const useColors=()=>{
    const [color,setColor]=useState(getLastColor());

    const[colorsList,setcolorsList]= useState(getColorsList());
  
    const handleChangeColor=(e)=>{
        setColor(e.target.value);
    };
  
    const handleSubmitSaveColor=(e)=>{
      e.preventDefault();
      const copyColors=[color, ...colorsList];
      setcolorsList(copyColors);
      
    }

const handleClickClearColors=()=>{
  setColor("#f2f2f2");
  setcolorsList([]);
  localStorage.removeItem("colorsList");
};

    useEffect(()=>{
      localStorage.setItem("colorsList",JSON.stringify(colorsList))
    },[colorsList]

    )

    return {color,colorsList,handleChangeColor,handleSubmitSaveColor,handleClickClearColors};
};