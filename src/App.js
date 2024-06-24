import React, { useEffect } from "react";
import { useUser } from "./context/UserContext.js";
import TodoList from "./components/TodoList.js";

function App() {
  const { fetchUser } = useUser();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
