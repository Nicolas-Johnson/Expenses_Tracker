import React from "react";

class ItemHistory extends React.Component{
  render() {
    const { itemList } = this.props;
    const { title, infos: { amount, entry} } = itemList;
    return(
      <div>
        <h3>{ title }</h3>
        <h3>{ amount }</h3>
        <h3>{ entry }</h3>
      </div>
    );
  }
}

export default ItemHistory;
