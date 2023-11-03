import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

const Assignment4 = () => {
  const sayHello = () => {
    alert("Hello World!");
  }
 return(
   <div className="container">
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent />
     <PassingDataOnEvent />
     <PassingFunctions theFunction={(sayHello)} />
     <EventObject />
     <Counter />
     <BooleanStateVariables />
     <StringStateVariables />
     <DateStateVariable />
     <ObjectStateVariable />
     <ArrayStateVariable />
     <ParentStateComponent  />
     <ReduxExamples />

   </div>
 );
};
export default Assignment4;