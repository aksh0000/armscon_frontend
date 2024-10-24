import React, { useEffect, useState } from 'react';
import './FormPart6.css';
import UpiQRCodeGenerator from './UPI';
import { Button } from '@mui/material';
import back_screen from './BackSwipeFx';
import swipe from './Swipe_functions';
import Hr from './Hr.js';
import { useLocation,Link } from 'react-router-dom';

export default function FormPart6() {
  const location=useLocation();
  const jsonData=location.state;
  console.log(jsonData.data_to_send);
  function next_fxn() {
   
  }

  return (
    <div id="form_part_6_container">
      <main>
      <article>
        <h2>Billing Info</h2>
        <ol>
          {/*Uncomment and fill in details if needed */}
           <li><b>Name:</b> {jsonData.data_to_send.dataOfPerson[0].fullname}</li>
          <li><b>Phno:</b> {jsonData.data_to_send.dataOfPerson[0].phoneNumber}</li>
          <li><b>Email:</b> {jsonData.data_to_send.dataOfPerson[0].email}</li>
          <li><b>Plan:</b> {jsonData.data_to_send.dataOfPerson[1].plans}</li>
          <li><b>Entertainment:</b> {jsonData.data_to_send.dataOfPerson[2].entertainment}</li>
          <li><h2><mark>Total Bill: ₹ {jsonData.data_to_send.pricing_}/-</mark></h2></li> 
        </ol>
        <br />
        {jsonData.payment_method=="Cash" ? <h2 id="small_para">You have to do the payment at the entry gateway to registeration team<br/> <small>NOTE :please don't pay to anyone else other than armscon team.</small></h2> : <><p>Please do the following payment on this given QR code through UPI application.</p>
      <section id="qrCode_holder">
        <UpiQRCodeGenerator pricing={jsonData.data_to_send.pricing_}/>
      </section>
      <br />
      <hr />
      <Button variant="contained"onClick={()=>window.location.href="upi://pay?pa=yourname@bank&pn=YourName&am=1000&cu=INR"} fullWidth sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'black'

      }}><img src="https://imgs.search.brave.com/kGCqRMecqNkIKxsbZh3kxq2pCs3uCLhB_PFrqaqDYYM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE2NDUxNDAucG5n" style={{width:"20%"}}/> pay with UPI</Button>
      </>}
      <section id="btn_holder">
        <Link to={jsonData.payment_method=="Cash" ? "/submit2" : "/screenshot"} state={
          {
            data_to_submit:jsonData
          }
        }>
        
        <Button variant="outlined" color="secondary" onClick={next_fxn} fullWidth>
          Next
        </Button>
        </Link>
      </section> 
      </article>
     
      </main>
    </div> 
  );
}
