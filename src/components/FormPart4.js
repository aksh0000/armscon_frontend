import React, { useState } from 'react';
import './FormPart4.css';
import Hr from './Hr.js';
import { Button } from '@mui/material';
import swipe from './Swipe_functions';
import back_screen from './BackSwipeFx';

export default function FormPart4(props) {
  // State to store the selected image URL
  const [selectedImage, setSelectedImage] = useState(
    'https://img.freepik.com/premium-vector/vector-bearded-person-giving-thumbs-up-expression-flat-design-style-vector-illustration_1062857-1596.jpg?ga=GA1.1.1372127489.1726830212&semt=ais_hybrid'
  );
  
  // State for button disable/enable
  const [btnState, setBtnState] = useState(true);

  // State for form values
  const [values, setValues] = useState({
    profile_picture: '',
  });

  const sendData = () => {
    const data = values;
    // Call the function passed from the parent and send the data
    props.sendDataToParent(data);
  };

  function testValues() {
    sendData();
    swipe(4);
    props.function_to_call_for_pricing();
  }

  // Combined function to handle input changes and file selection
  const handleChange = (event) => {
    const { files } = event.target;

    if (files && files[0]) {
      // Handle file selection
      const file = files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image as the selected file URL
        setValues((prevValues) => ({
          ...prevValues,
          profile_picture: file, // Store the image URL in the state
        }));
        
        // Enable the NEXT button once the image is selected
        setBtnState(false);
      };
      
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div id="formpart4_container">
      <article>
        <h2>Setup your Profile picture</h2>
        <p>
          This profile picture plays an important role as it cannot be changed.
          At the security counter, this profile picture will be used to
          authenticate your credentials.
        </p>
      </article>

      {/* File input for selecting the profile picture */}
      <input
        type="file"
        name="profile_picture"
        id="profile_picture"
        accept="image/*" // Ensure only image files can be selected
        style={{ display: 'none' }}
        onChange={handleChange} // Handle image selection and regular changes
      />

      {/* Image holder to display the selected image */}
      <section id="image_holder">
        <label htmlFor="profile_picture">
          {/* Display the selected image */}
          <img
            src={selectedImage}
            alt="Selected Profile"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </label>
      </section>

      <br />
      <Hr />

      <section id="btn_holder">
        <Button variant="outlined" color="secondary" onClick={() => back_screen(2)}>
          BACK
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={testValues} 
          disabled={btnState} // Button is disabled until an image is selected
        >
          NEXT
        </Button>
      </section>
    </div>
  );
}
