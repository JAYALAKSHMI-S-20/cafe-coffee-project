import React from 'react'

export default function Rating() {
  const handlesubmit = () =>{
    alert('Thanks for the Rating');
  }
  return (
    <div>
    <label>Name</label><br></br>
        <input type="text"></input><br></br><br></br>
    <label>Rating & Comments</label><br></br>
        <textarea cols="30" rows="5"></textarea><br></br><br></br>
        <button onClick={()=>handlesubmit()} type="submit" value="Submit" size="1">Submit</button><br></br><br></br>
    </div>
  )
}

