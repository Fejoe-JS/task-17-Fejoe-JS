import React from 'react'

const StudentCard = (props) => {
  return (
    <>
    <h1 style={{textAlign:"center"}}> Student Details</h1>
    <div style={{ display:"flex",justifyContent:"center" ,gap:"20px", flexWrap:"wrap", margin:"20px" }}>
    <div>
            <h3>Name: {props.name}</h3>
            <h3>Department: {props.department}</h3>
            <h3>CGPA: {props.cgpa} </h3>
        </div>
    </div></>
  )
}

export default StudentCard