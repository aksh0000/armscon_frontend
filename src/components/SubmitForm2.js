import React, { useEffect, useState } from 'react'
import './SubmitForm2.css';
import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function SubmitForm2() {
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const location = useLocation();
  const json_Data = location.state;
    let final_data = {
        personInfo: json_Data.data_to_submit.data_to_send.dataOfPerson[0],
        plans: json_Data.data_to_submit.data_to_send.dataOfPerson[1],
        entertainment: json_Data.data_to_submit.data_to_send.dataOfPerson[2],
        profilePicture: json_Data.data_to_submit.data_to_send.dataOfPerson[3].profile_picture,
        screenshot:"",
      };

      function POSTDATA(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('dp', final_data.profilePicture);
        formData.append('screenshot', "");
        formData.append('user_data', JSON.stringify(final_data));
    
        fetch('http://localhost:8000/signup', {
          method: 'POST',
          body: formData,
        })
        .then((response) => response.text())
        .then((message) => JSON.parse(message).message == "Signup successful" ? navigate('/login') : alert("Oops Soemthing went wrong while signing up your account!"))
        .catch((error) => console.error(error));
      }
      function handleClick(event) {
        setLoading(true);
        POSTDATA(event);
      }
  return (
    <div id="submit_form_2_container">
        <main>
        <fieldset>
            
            <legend>
                <h1><span>ARMS</span>CON</h1>
            </legend>
            <p id="submit_form_2_subheading">
                please confirm your account registeration by clicking on the confirm button
            </p>
            <section id="buttons_for2_holder">
                <LoadingButton variant='contained' color="secondary"onClick={handleClick} loading={loading}>CONFIRM</LoadingButton>
                <Button variant="outlined" color="error">CANCEL</Button>
            </section>
           <footer>
            &copy; ARMSCON 2024
           </footer>
        </fieldset>
        </main>
    </div>
  )
}
