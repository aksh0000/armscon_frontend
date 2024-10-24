import React, { useState } from 'react';
import './FormPart5.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import Hr from './Hr.js';
import swipe from './Swipe_functions';
import back_screen from './BackSwipeFx';
import { Link,Outlet } from 'react-router-dom';
export default function FormPart5(props) {
    const [values, setValues] = useState({
        mode_of_payment: '' // Correct state field
    });
    const [btnState, setBtnState] = useState(true); // Initial button state is disabled

    const sendData = () => {
      const data = values;
      // Call the function passed from the parent and send the data
      props.sendDataToParent(data);
    };

    function testValues() {
      sendData();
      swipe(5);
      
    }
    const data_to_send={
        dataOfPerson:props.dataOfPerson,
        pricing_:props.pricing_
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the state and then enable the button if a payment method is selected
        setValues((prevValues) => {
          const newValues = {
            ...prevValues,
            [name]: value
          };
          setBtnState(newValues.mode_of_payment === ''); // Enable button only when a payment method is selected
          return newValues;
        });
    };

    return (
        <div id="formpart5_container">
            <article>
                <h2 id="heading_of_payment">Payment Options</h2>
                <p id="lolp">Select the payment methods : either UPI or Cash ,</p>
                <br/>
            </article>
            <Hr />
            <section id="main_items_holder">
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" color="secondary">
                        Choose the following options
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={values.mode_of_payment} // Bind the value to the correct state field
                        name="mode_of_payment" // Match the name to the state key
                        onChange={handleChange} // Handle change event
                        color="secondary"
                    >
                        <FormControlLabel
                            value="UPI"
                            control={<Radio color="secondary" />}
                            label="UPI"
                        />
                        <FormControlLabel
                            value="Cash"
                            control={<Radio color="secondary" />}
                            label="Cash"
                        />
                    </RadioGroup>
                </FormControl>
            </section>
            <Hr />
            <section id="btn_holder">
                <Button variant="outlined" color="secondary" onClick={() => back_screen(2)}>
                    BACK
                </Button>
                <Link to="/billing" state={
                    {data_to_send:data_to_send,payment_method:values.mode_of_payment}
                }>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={testValues} 
                    disabled={btnState} // Button is disabled until a payment option is selected
                >
                    NEXT
                </Button> 
                </Link>
            </section>
        </div>
    );
}
