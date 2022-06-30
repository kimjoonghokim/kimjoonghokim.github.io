import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 0.0.1</h4>
      <h4 style={{color: "red"}}>Please note that this is a work in progress! It is mostly incomplete!!</h4>
      <h1>&nbsp;</h1>
      <h5>The purpose of this app is to guide the user through the steps of:</h5>
      <h5 style={{fontWeight: "normal"}}>1. "Braindumping" a task list</h5>
      <h5 style={{fontWeight: "normal"}}>2. Picking the three priority tasks</h5>
      <h5 style={{fontWeight: "normal"}}>3. Organizing the tasks into a schedule</h5>
      <h5>So far, only the task tracker part of the design is implemented</h5>
      <h1>&nbsp;</h1>
      <h5>Please also note that this is designed for phone screens</h5>
      <h1>&nbsp;</h1>







      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
