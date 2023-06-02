import React from 'react'

const tasks = ({title, description, index, deleteTask}) => {
  return (
    <div className='task'>
       <div>
        <p style={{fontSize : "1.4rem", fontWeight: "normal",  }}>{title}</p>
        <span style={{fontSize : "1.4rem", fontWeight: "normal", color: "rgb(102, 96, 96)" }}>{description}</span>
        </div>
        <button onClick={()=> deleteTask(index)}>-</button>
    </div>
    
  )
}


export default tasks;