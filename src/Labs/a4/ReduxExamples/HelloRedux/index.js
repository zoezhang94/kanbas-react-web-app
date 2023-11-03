// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./helloReducer";
function HelloRedux(){
    // const [message] = useState("Hello World");
    const { message } = useSelector((state) => state.helloReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Hello Redux</h2>
            <button onClick={() => dispatch(setMessage("Hello Redux"))}>
                Set Message
            </button>
            <h3>{message}</h3>
        </div>
    )
}

export default HelloRedux;