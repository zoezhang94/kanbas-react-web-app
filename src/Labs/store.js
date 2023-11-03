import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "./a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
    
  },
});
export default store;