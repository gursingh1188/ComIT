import React from "react";


export default () => {
    const description = 'Upload Examples'
    return (
       <section>
            <h2>Add To-Do Items</h2>
            <input type="text" value={description}/>
            <button>Add To-Do</button>
        </section>
        

    )
}