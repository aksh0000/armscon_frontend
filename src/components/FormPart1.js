import React, { useEffect, useState } from 'react';
import Hr from './Hr.js';
import './FormPart1.css';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import swipe from './Swipe_functions.js';

export default function FormPart1(props) {
    const [values, setValues] = useState({
        fullname: '',
        phoneNumber: '',
        email: '',
        collge: '',
        course: '',
        year: '',
    });

    const [btnState, setBtnState] = useState(true);

    // Function to send data to parent component
    const sendData = () => {
        const data = values;
        props.sendDataToParent(data); // Call parent's function
    };

    const testValues = () => {
        console.log(values.fullname, values.phoneNumber, values.email, values.collge, values.course, values.year);
        sendData();
        swipe(1); // Move to next slide
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Validation: Use `useEffect` to validate the form whenever the values change
    useEffect(() => {
        formValidation();
    }, [values]); // Trigger when any form value changes

    // Validate form fields
    const formValidation = () => {
        if (
            values.fullname === '' ||
            values.phoneNumber === '' ||
            values.email === '' ||
            values.year === '' ||
            values.course === '' ||
            values.collge === ''
        ) {
            setBtnState(true); // Disable button if any field is empty
        } else {
            setBtnState(false); // Enable button if all fields are filled
        }
    };

    // Course options
    const courses = [
        "MBBS", "BDS", "MD/MS/DNB", "Mch/DM", "B.Pharma", "B.Nursing", "BPT"
    ];

    // Year options
    const years = [
        2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
    ];

    // College options
    const colleges = [
        "Pt.B.D.Sharma University of health sciences", "Kalpana Chawla medical college", 
        "BPS Government Medical College for Women", "ESIC Medical College, Faridabad", 
        "SHKM Nalhar", "Shri Atal Bihari Vajpayee Government Medical College, Faridabad", 
        "SGT University, Gurgaon", "Adesh Medical College and Hospital, Bathinda", 
        "N.C. Medical College and Hospital, Moga", ""
    ];

    return (
        <div id="formpart1_container" className='first_slide'>
            <article>
                <h2>Basic details</h2>
                <p>Please fill your personal details in the below mentioned form.</p>
            </article>
            <Hr />
            <section className='text_holder'>
                <TextField
                    variant='outlined'
                    color="secondary"
                    label="Full name"
                    fullWidth
                    onChange={handleChange}
                    value={values.fullname}
                    name="fullname"
                />
            </section>
            <section className='text_holder'>
                <TextField
                    variant='outlined'
                    color="secondary"
                    label="Phone number"
                    fullWidth
                    onChange={handleChange}
                    value={values.phoneNumber}
                    name="phoneNumber"
                />
            </section>
            <section className='text_holder'>
                <TextField
                    variant='outlined'
                    color="secondary"
                    label="Email address"
                    fullWidth
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                />
            </section>
            <section className='text_holder' id="select_holder">
                <TextField
                    id="outlined-select-course"
                    select
                    label="Course"
                    helperText="Select your Course"
                    onChange={handleChange}
                    value={values.course}
                    name="course"
                    color="secondary"
                >
                    {courses.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-year"
                    select
                    label="Year"
                    helperText="Select your year"
                    onChange={handleChange}
                    value={values.year}
                    name="year"
                    color="secondary"
                >
                    {years.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
            </section>
            <section className='text_holder'>
                <TextField
                    id="outlined-select-college"
                    select
                    label="College"
                    helperText="Select your College"
                    onChange={handleChange}
                    value={values.collge}
                    name="collge"
                    color="secondary"
                    fullWidth
                >
                    {colleges.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
            </section>
            <Hr />
            <section className='text_holder'>
                <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    onClick={testValues}
                    disabled={btnState}
                >
                    Next
                </Button>
            </section>
        </div>
    );
}
