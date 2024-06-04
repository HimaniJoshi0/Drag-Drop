import Card from "@/components/card";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';



const Index = () => {
  
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.counter);
  

  return(
    <div  className="flex gap-3  justify-center bg-red-400">
    <Card data={data.filter((item)=> item.status === "todo")} title = "Todo" />
    <Card data={data.filter(item  => item.status === "progress")}  title = "In Progress"/>
    <Card data={data.filter(item  => item.status === "done")}  title = "Done"/>
  </div>
  )   
};

export default Index;
