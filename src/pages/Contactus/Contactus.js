import React, { useState } from "react";
import { send } from "emailjs-com";
import styles from "./Contactus.module.css";

export default function ContactUs() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  function sendEmail(e) {
    e.preventDefault();

    send(
      `${process.env.REACT_APP_EMAILJS_SERVICEID}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLEATEID}`,
      toSend,
      `${process.env.REACT_APP_EMAILJS_USERID}`
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Kontakta oss</h1>
          <h4>
            Fyll i formuläret för att komma i kontakt med oss så återkommer vi
            till dig omgående
          </h4>
          <form onSubmit={sendEmail}>
            <div className={styles.RowOne}>
              <div>
                  <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={toSend.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                  <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={toSend.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.RowTwo}>
              <div>
                  <label>Message</label>
                <textarea
                  className="form-control"
                  id=""
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className={styles.RowThree}>
              <div>
                <input
                  type="submit"
                  className={styles.button}
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
