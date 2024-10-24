import React, { useState, useEffect } from 'react';
import './FormPart2.css';
import Hr from './Hr.js';
import { Button, MenuItem, TextField } from '@mui/material';
import swipe from './Swipe_functions';
import back_screen from './BackSwipeFx';

export default function FormPart2(props) {
    const [values, setValues] = useState({
        plans: '',
        halfday_workshops: '',
        fullday_workshops: ''
    });
    
    const [halfday, setHalfday] = useState(true);
    const [fullday, setFullday] = useState(true);
    const [btnState, setBtnState] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value // Update the value of the specific field that changed
        }));
    };

    // Effect to handle button state and workshop dropdown logic when `plans` changes
    useEffect(() => {
        // Enable/disable button based on plan selection
        setBtnState(values.plans === '');

        // Enable/disable dropdowns based on selected plan
        if (values.plans === 'Basic Registeration (BR)') {
            setFullday(true);
            setHalfday(true);
        } else if (values.plans === 'BR + Full Day Workshops') {
            setFullday(false); // Enable full day workshops
            setHalfday(true); // Disable half day workshops
        } else if (values.plans === 'BR + Halfday workshops') {
            setHalfday(false); // Enable half day workshops
            setFullday(true); // Disable full day workshops
        } else if(values.plans === ""){
            setHalfday(true);
            setFullday(true);
        }
        else{
            setFullday(false);
            setHalfday(false);
        }
    }, [values.plans]); // Dependency on `plans` to trigger effect

    const sendData = () => {
        const data = values;
        // Send data to parent
        props.sendDataToParent(data);
    };

    function testValues() {
        console.log(values.halfday_workshops, values.fullday_workshops, values.plans);
        sendData();
        swipe(2);
    }

    const plans = [
        'Basic Registeration (BR)', 
        'BR + Full Day Workshops', 
        'BR + Halfday workshops', 
        'BR + Fullday workshops + Halfday workshops'
    ];

    const halfday_workshops = [
        'Trauma troopers', 'Paeds – Endo – Alert', 'Eyes wide open', 
        'Know your steth', 'Ataraxia – Calm into chaos', 'Inside the autopsy room', 
        'ECG : Got a rhythm?', 'Essential Neonatal Skills', 'Disaster Prep - Lab', 'Radiology 101'
    ];

    const fullday_workshops = [
        'Emergency and critical care workshop', 'Basic Surgical skills', 
        'Basic Obstetrics Skills', 'Oxygenation Workshop', 'DiagnoPath– Diagnostic Medicine', 
        'Research Methodology', 'Integrated Medical Skills'
    ];

    return (
        <div id="formpart2_container">
            <article>
                <h2>Choose the plans</h2>
                <br/>
                <p>We offer 20+ Halfday workshops & 50+ Fullday workshops. You can choose both types of workshops.</p>
            </article>
            <Hr />
            <section id="plans_container">
                <TextField
                    select
                    label="Plans"
                    helperText="Please select the plan"
                    fullWidth
                    onChange={handleChange}
                    value={values.plans}
                    name="plans"
                    color="secondary"
                >
                    {plans.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
            </section>
            
            <section id="plans_container">
                <TextField
                    select
                    label="Halfday workshops"
                    helperText="Please select a Halfday workshop"
                    fullWidth
                    onChange={handleChange}
                    value={values.halfday_workshops}
                    name="halfday_workshops"
                    disabled={halfday}
                    color="secondary"
                >
                    {halfday_workshops.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
            </section>

            <section id="plans_container">
                <TextField
                    select
                    label="Fullday workshops"
                    helperText="Please select a Fullday workshop"
                    fullWidth
                    onChange={handleChange}
                    value={values.fullday_workshops}
                    name="fullday_workshops"
                    disabled={fullday}
                    color="secondary"
                >
                    {fullday_workshops.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
            </section>

            <Hr />
            <section id="btn_holder">
                <Button variant="outlined" color="secondary" onClick={() => back_screen(0)}>
                    Back
                </Button>
                <Button variant="contained" color="secondary" onClick={testValues} disabled={btnState}>
                    Next
                </Button>
            </section>
        </div>
    );
}
