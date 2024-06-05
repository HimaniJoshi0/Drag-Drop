import { dropList } from "@/redux/slices";
import { RootState } from "../../redux/store";
import React, { useCallback, useEffect, useState } from "react";
import {
  DragDropContainer,
  DropTarget,
} from "react-drag-drop-container-typescript";
import { useSelector, useDispatch } from "react-redux";

interface Data {
  heading: string;
  description: string;
  status: string;
  id: number;
}

interface DataItems {
  data: Data[];
  title: string;
}

const Card = ({ data, title }: DataItems) => {
  const [id, setId] = useState<number>(1);
  const [listStatus, setlistStatus] = useState<string>();
  const [dropped, setDropped] = useState<boolean>(false);
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.counter);

  const renderData = (item: Data, index: number) => {
    return (
      <DragDropContainer
        targetKey="foo"
        onDrag={() => dragItem(item.id, item.status)}
      >
        <div className="bg-white m-2 flex flex-col ">
          <h1>{item.heading}</h1>
          <p>{item.description}</p>
          <p>{item.status}</p>
          <p>{item.id}</p>
        </div>
      </DragDropContainer>
    );
  };

  const dragItem = (id: number, status: string) => {
    console.log("hello", id, status);
    setId(id);
    setlistStatus(status);
  };

  const checkDrop =() => {
 
  };

  // useEffect(() => {
  //   console.log("drop id",id)
  //   console.log("drop status",listStatus)
  //   if (dropped) {
  //     checkDrop();
  //     setDropped(false); 
  //   }
  // }, [dropped]);

  
  const handleDrop = () => {
    // setDropped(true);
    console.log("drop id",id)
    console.log("drop status",listStatus)
  };

  return (
    <>
      <DropTarget targetKey="foo" onHit={() => handleDrop()}>
        <div className="flex flex-col">
          <h1>{title}</h1>
          <div>{data.map(renderData)}</div>
        </div>
      </DropTarget>
    </>
  );
};

export default Card;
