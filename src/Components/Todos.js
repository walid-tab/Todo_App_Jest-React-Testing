import React from 'react'

function Todos({todo}) {
    
    const {id, title, completed}=todo;
    const h1 = <h1>{title}</h1>;
    const task=completed?<strike>{h1}</strike> : h1;
  return (
    <div data-testid={`todo-${id}`}>
        {
            task
        }
    </div>
  )
}

export default Todos