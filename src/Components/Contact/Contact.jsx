import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import location_icon from '../../assets/location-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fece2a84-93ef-43da-9014-cb11806a14e3");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>
            Send us a message 
            <img src={msg_icon} alt=""/>
            </h3>
            <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            Medicosis community.
            </p>
            <ul>
                <li>
                <img src={mail_icon} alt=""/>
                #email
                </li>
                <li>
                <img src={phone_icon} alt=""/>
                #phone-no.
                </li>
                <li>
                <img src={location_icon} alt=""/>
                #addres,Rajasthan<br/>334001,India
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
                <label>Your Message Here</label>
                <textarea name='message' id="" rows="6" placeholder='Enter Your Message Here' required ></textarea>
                <button type='summit' className='btn dark-btn'>Summit now <img src={white_arrow} alt=""/> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact