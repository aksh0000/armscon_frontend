import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function UpiQRCodeGenerator(props) {
  const upiLink = `upi://pay?pa=yourname@bank&pn=YourName&am=${props.pricing}&cu=INR`;
  const qrRef = useRef(); // Reference for the QR code canvas

  // Function to download QR code as an image
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas'); // Get the canvas element
    const url = canvas.toDataURL('image/png'); // Convert canvas to an image URL
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png'; // File name for the download
    link.click(); // Trigger the download
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan to Pay</h2>
      <br/>
      {/* QR Code */}
      <div ref={qrRef}>
        <QRCodeCanvas 
          value={upiLink} 
          size={256} 
          fgColor="#000000" 
          bgColor="#ffffff" 
        />
      </div>

      <h3 style={{color:'black'}}>Pay ₹ {props.pricing}  via UPI</h3>

      {/* Download Button 
      <button onClick={downloadQRCode} style={{ marginTop: '20px' ,padding:'10px',}}>
        Download QR Code
      </button> */}
    </div>
  );
}
