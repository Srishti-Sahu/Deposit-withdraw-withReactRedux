import React from "react";
import {useSelector, useDispatch} from "react-redux";
function App() {
  const dispatch = useDispatch();
  const depositRef = React.useRef(null);
  const balance = useSelector((state)=>{
    return state.balance
  });

  function deposit(){
    dispatch({type: 'DEPOSIT', data: parseInt(depositRef.current.value)});
  }
  function withdraw(){
    dispatch({type: 'WITHDRAW', data: parseInt(depositRef.current.value)});
  }
  return (
    <div>
      {balance}
      <input type="number" placeholder="deposit" ref={depositRef}/>
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}

export default App;
