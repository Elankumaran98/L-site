import React,{useState} from 'react'
import {addDoc} from 'firebase/firestore'
import { userCollectionRef } from './CRUD';


function CreateUser() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
  
    const handleChange = (e) => {
      if(e.target.name==='name'){
          setName(e.target.value)
      }else{
          setAge(Number(e.target.value))
      }
    };
  
    const handleSubmit=async()=>{
      await addDoc(userCollectionRef,{name,age})
      setName('')
      setAge('')
    }
    return (
      <div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            id="age"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>
    );
  }
  
  export default CreateUser;
  