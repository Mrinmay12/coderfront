import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styling
import apiUrl from '../ApiAxios';
const Form = ({onClose,username,password,setReff}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload=async()=>{
    try{
        let json={
            post_title: title,
            description:description
        }
        let res = await apiUrl.post(`/code/api/post/data`,json)

        if(res){
            onClose()
            setTitle('');
            setDescription('');
            // setReff(new Date().getMilliseconds())
        }
    }catch(err){

    }
  }
  const handleSubmit = (event) => {
if(username==="Mrinmay" && password==="Mrinmay@2024" && title!=="" && description!==""){
    handleUpload()
}else{
    return
}
 
    console.log("Title:", title);
    console.log("Description:", description);
    // Clear input fields after submission
    setTitle('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <h2>Code Title and Description</h2>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="form-group">
          <label htmlFor="title"  style={{ display:"flex" }}>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description"  style={{ display:"flex" }}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" onClick={()=>{handleSubmit()}}>Submit</button>
      {/* </form> */}
    </div>
  );
};

export default Form;
