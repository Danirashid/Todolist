import {React, useState, useEffect} from 'react'
import Tasks from './tasks';
const  Home = () => {

  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];



  const [tasks, setTasks] = useState(initialArray);

  const [title, setTitle] = useState('');
  const [description, setDescrition] = useState('');
  
  const submithandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {title, description}]);
  };

  const deleteTask = (index) => {
      const filteredArr = tasks.filter((val, i) => {
        return i !== index;
      });

      setTasks(filteredArr);
  };

  useEffect (() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  return (
   <div className='container'>
    <h3>Daily tasks</h3>
      <form onSubmit={submithandler}>
      <input type="text" placeholder='Enter you Title here' value={title} onChange={(e)=> setTitle(e.target.value)} />
      <textarea placeholder='Enter your task description here' value={description} onChange={(e) => setDescrition(e.target.value)} cols="30" rows="10"></textarea>
      <button type="submit">Submit</button>
      </form>
      {tasks.map((item, index)=> (
        <Tasks key={index} title = {item.title} description = {item.description}
        deleteTask={deleteTask} index={index} />
      ))}
   </div>
  )

}
export default Home;