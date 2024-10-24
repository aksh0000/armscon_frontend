import React, { useState } from 'react';
import './RegisterForm.css'
import { Button } from '@mui/material';
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';
import FormPart4 from './FormPart4';
import FormPart5 from './FormPart5';
import FormPart6 from './FormPart6';
import SubmitForm from './SubmitForm';
import { Link } from 'react-router-dom';

import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const RegisterForm = () => {
    // State to store the data from child components
    const [dataOfPerson, setDataOfPerson] = useState([]);
    const [pricing,setPricing]=useState(123);
    // Function to handle receiving data from child components
    function handleChildData(data) {
        console.log('Data from Child:', data);
        setDataOfPerson(prevData => [...prevData, data]);
    
        // Check if it's the relevant step and call set_pricing_for_insiders
       
    }
    

    // Function to handle form submission
    function handleFormSubmit(event) {
        // Prevent the default form submission behavior (since you are using onClick)
        event.preventDefault();
        // Output the data collected from the form parts
        alert(JSON.stringify(dataOfPerson, null, 2));
    }
    function set_pricing_for_insiders() {
        if (dataOfPerson[1]?.plans === "Basic Registeration (BR)") {
            if (dataOfPerson[2]?.entertainment === "Star Night") {
                setPricing(()=>1099);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else if (dataOfPerson[2]?.entertainment === "Comedy night") {
                setPricing(()=>799);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else if (dataOfPerson[2]?.entertainment === "Star Night & Comedy night") {
                setPricing(()=>1299);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else {
                setPricing(()=>499);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            }
        } else if (dataOfPerson[1]?.plans === "BR + Full Day Workshops") {
            if (dataOfPerson[2]?.entertainment === "Star Night") {
                setPricing(2199);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else if (dataOfPerson[2]?.entertainment === "Comedy night") {
                setPricing(1899);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else if (dataOfPerson[2]?.entertainment === "Star Night & Comedy night") {
                setPricing(2399);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else {
                setPricing(1599);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            }
        } else if (dataOfPerson[1]?.plans === "BR + Halfday workshops") {
            if (dataOfPerson[2]?.entertainment === "Star Night") {
                setPricing(1899);
            } else if (dataOfPerson[2]?.entertainment === "Comedy night") {
                setPricing(1599);
            } else if (dataOfPerson[2]?.entertainment === "Star Night & Comedy night") {
                setPricing(2099);
            } else {
                setPricing(1299);
            }
        } else if (dataOfPerson[1]?.plans === "BR + Fullday workshops + Halfday workshops") {
            if (dataOfPerson[2]?.entertainment === "Star Night") {
                setPricing(2699);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else if (dataOfPerson[2]?.entertainment === "Comedy night") {
                setPricing(2399);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else if (dataOfPerson[2]?.entertainment === "Star Night & Comedy night") {
                setPricing(2899);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            } else {
                setPricing(2099);
                console.log(dataOfPerson[2].entertainment,dataOfPerson[1].plans,pricing);
            }
        }
        return pricing
    }
    const data={
        name:'akshansh kumar',
        age:20
    } 
    return (
        <div id="register_container" >
            <h1 id="heading_of_armscon">ARMSCON <br/> <h3>User Sign up</h3></h1>
            
            <section id="form_outside_container">
                <form id="register_form">
                    <div id="form_items_container">
                        <FormPart1 sendDataToParent={handleChildData} />
                    </div>
                    <div id="form_items_container">
                        <FormPart2 sendDataToParent={handleChildData} />
                    </div>
                    <div id="form_items_container">
                        <FormPart3 sendDataToParent={handleChildData} />
                    </div>
                    <div id="form_items_container">
                        <FormPart4 sendDataToParent={handleChildData} function_to_call_for_pricing={set_pricing_for_insiders}/>
                    </div>
                    <div id="form_items_container">
                        <FormPart5 sendDataToParent={handleChildData} dataOfPerson={dataOfPerson} pricing_={pricing}/>
                    </div>
                    <div id="form_items_container">
                    
                    </div>
                    <div id="form_items_container">
                        
                    </div>
                </form>
                <br/>
                
                
            </section>
            <footer>
                <p>
                    &copy; ARMSOCON 2024
                </p>
                <br/>
                <p id="uoiupouu">
                    <Instagram/>
                    <YouTubeIcon/>
                    <FacebookIcon/>
                </p>
            </footer>
        </div>
    );
}

export default RegisterForm;
