import React from "react";
import AddTodoItems from "./AddTodoItems";
import ActiveItems from "./ActiveItems";
import CompletedItems from "./CompletedItems";
export default () => {
    return (

    <div>
        <h1>My To-do List</h1>
        
        <AddTodoItems />
        
        <ActiveItems />

        <CompletedItems />

    </div>

    )
}