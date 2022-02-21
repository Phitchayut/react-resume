import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dnu2zgq",
        "template_1oxi2vj",
        formRef.current,
        "user_odKSTkcTFsMCTEwRH9DMI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let,s discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              080-0875915
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              beam.phitchayut@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              760/75 Lumpini Ville 76
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            tempora cum totam ex suscipit quas.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && '#333'}} type="text" className="email" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && '#333'}}
              name="message"
              placeholder="Message"
              cols="30"
              rows="5"
            ></textarea>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
