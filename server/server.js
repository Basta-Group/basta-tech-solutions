import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });
// console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY);
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid

process.env.SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Contact us  endpoint
app.post('/send-email', async (req, res) => {
  console.log('Received email request:', req.body);

  try {
    const { firstName,lastName, email, phone, location, position, city,comments,company,reasonOfInquiry } = req.body;

    // Validate email field
    if (!email) {
      throw new Error('Recipient email is required');
    }
    const msg = {
      to: email, // Dynamic recipient email from form data
      from: 'dubeyanmol602@gmail.com', // This must be a verified sender
      subject: 'New Contact Form Submission',
      text: `
       Reason Of Enquiry: ${reasonOfInquiry}
       first Name: ${firstName}
       last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Position: ${position}
        Location: ${location}
        City: ${city}
        Comments: ${comments}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h3 { color: #2c3e50; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h3>New Contact Form Submission</h3>
            <p><span class="label">Name:</span> ${firstName} ${lastName}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Phone:</span> ${phone}</p>
            <p><span class="label">Position</span> ${position}</p>
            <p><span class="label">Location</span> ${location}</p>
            <p><span class="label">City</span> ${city}</p>
            <p><span class="label">Comments:</span> ${comments}</p>
          </div>
        </body>
        </html>
      `,
    };
    console.log('Sending email with SendGrid to:', email);
    await sgMail.send(msg);
    console.log('Email sent successfully');

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});


// Contact Form endpoint
app.post('/send-message', async (req, res) => {
  console.log('Received email request:', req.body);

  try {
    const { name, email, message} = req.body;

    // Validate email field
    if (!email) {
      throw new Error('Recipient email is required');
    }
    const msg = {
      to: email, // Dynamic recipient email from form data
      from: 'dubeyanmol602@gmail.com', // This must be a verified sender
      subject: 'New Get In Touch Enquiry',
      text: `
       
       Name: ${name}
       Email: ${email}
       Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h3 { color: #2c3e50; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h3>New Contact Form Submission</h3>
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            
            <p><span class="label">Message:</span> ${message}</p>
          </div>
        </body>
        </html>
      `,
    };
    console.log('Sending email with SendGrid to:', email);
    await sgMail.send(msg);
    console.log('Email sent successfully');

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});