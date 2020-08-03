import React from "react";


export default () => {
    const items = [
        {
            id:1,
        description:'Get Milk',
        isdone:false,
    },
    {
        id:1,
    description:'Fix Lawnmower',
    isdone:false,
},
{
    id:1,
description:'Buy Groceries',
isdone:false,
},
    ]
    return (
       <section>
            <h2>Active Items</h2>
        <ul>

         {items.map((item) => {
             return <li key={item.id}>
                 {item.description}
                 </li>
         })}
         </ul>    
         </section>
        

    )
}