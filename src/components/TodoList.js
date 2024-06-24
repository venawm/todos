import React, { useEffect } from "react";
import { useUser } from "../context/UserContext.js";
import Card from "./Card.js";

const TodoList = () => {
  useEffect(() => {
    fetchTodos();
  }, []);
  const { todos, fetchTodos } = useUser();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "2rem",
        }}
      >
        {todos?.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
