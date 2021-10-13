import React from "react";
import { useSelector } from 'react-redux';
import ItemHistory from "./itemHistory";

export default function History() {
  const history = useSelector(state => state.ADD_HISTORY.HISTORY);

  return(
    <div>
      <h2>History</h2>
      <div>
        {history.map((item, index) => <ItemHistory key={index} itemList={ item } />)}
      </div>
    </div>
  );
};
