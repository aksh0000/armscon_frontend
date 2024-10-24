import React, { useState } from 'react';
import './SubmitForm.css';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import camera_icon from '../assets/camera_icon.png'
import { useNavigate } from 'react-router-dom';
export default function SubmitForm() {
  const navigate=useNavigate();
  const [selectedImage, setSelectedImage] = useState(camera_icon);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ attachment: '' });
  const location = useLocation();
  const json_Data = location.state;

  let final_data = {
    personInfo: json_Data.data_to_submit.data_to_send.dataOfPerson[0],
    plans: json_Data.data_to_submit.data_to_send.dataOfPerson[1],
    entertainment: json_Data.data_to_submit.data_to_send.dataOfPerson[2],
    profilePicture: json_Data.data_to_submit.data_to_send.dataOfPerson[3].profile_picture,
    screenshot: "",
  };

  console.log("THIS IS FINAL DATA ", final_data);
  console.log("THIS IS JSON DATA", json_Data);

  function check_data(message) {
    let parsedMessage = JSON.parse(message);
    if (parsedMessage.message=="This Screen Shot Has already been used before Try again!") {
      
      console.log("pasrsed message",parsedMessage.message);
      alert("Sorry, but this screenshot has already been sent to us. Please share your payment screenshot , if you have any queries then contact: 6396233297");
      setLoading(false);
    } else {
      alert("Your payment is successful!");
      console.log("pasrsed message",message);
      setLoading(false);
      navigate('/login');
    }
  }

  function POSTDATA(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('dp', final_data.profilePicture);
    formData.append('screenshot', values.attachment);
    formData.append('user_data', JSON.stringify(final_data));

    fetch('http://localhost:8000/signup', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.text())
    .then((message) => check_data(message))
    .catch((error) => console.error(error));
  }

  const handleChange = (event) => {
    const { name, files } = event.target;
    if (files) {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          setValues((prevValues) => ({ ...prevValues, attachment: file }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  function handleClick(event) {
    setLoading(true);
    POSTDATA(event);
  }

  return (
    <main id="lalalala">
      <div id="submit_form_container">
        <article>
          <h2>Attach Screenshot of Payment!</h2>
          <p>Please attach the screenshot of the payment that you did on your respective UPI application.</p>
        </article>
        <input
          type="file"
          name="attachment"
          id="attachment"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <section id="image_holder2">
          <label htmlFor="attachment">
            <img src={selectedImage} alt="Selected Profile" />
          </label>
          <br /><br />
        </section>
        <LoadingButton
        size="large"
        sx={{width:"50%"}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          variant="contained"
          color="secondary"
          disabled={selectedImage==camera_icon ? true : false}
        >
          Submit
        </LoadingButton>
      </div>
    </main>
  );
}
