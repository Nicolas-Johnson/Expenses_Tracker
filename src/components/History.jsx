import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';

/*class History extends React.Component{
  constructor() {
    super();
    this.state = {
      History: [],
    }
  }
  componentDidMount() {
    const { history } = this.props;
    this.setState({History: history})
  }

  render() {
    const { History } = this.state;
    return(
      <div>
        <h2>History</h2>
        <div>
          {History.map((entry) =>  entry.infos.entry === 'income' ? <div>{ entry.title } income: {entry.infos.amount}</div> : <div>{ entry.title } expense: {entry.infos.amount}</div>,)}
        </div>
      </div>
    );
  }
}

const mapstateToProps = (state) => ({
  history: state.ADD_HISTORY.HISTORY,
});

export default connect(mapstateToProps, null)(History);*/

export default function History() {
  const [History, setHistory] = useState([]);

  const history = useSelector(state => state.ADD_HISTORY.HISTORY);

  useEffect(() => {
    setHistory([history]);
  }, [history])

  return(
    <div>
      <h2>History</h2>
      <div>
        {History.map(({ title }, index) => (<div key={ index }>{ title }</div>))}
      </div>
    </div>
  );
};
