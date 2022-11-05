/** @format */

import React from "react";
import { useState } from "react";
function Contact() {
  const InitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    check: false,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const [formData, setFormData] = useState(InitialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(InitialValues);
  };

  return (
    <section className='contact'>
      <div className='contact-head'>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <section className='form'>
          <form action='' onSubmit={handleSubmit}>
            <div className='names'>
              <div className='firstName'>
                <label htmlFor='first_name'>First Name</label>
                <input
                  type='text'
                  id='first_name'
                  value={formData.first_name}
                  name='first_name'
                  onChange={handleChange}
                  placeholder='Enter Your First Name'
                  required
                />
              </div>
              <div className='lastName'>
                <label htmlFor='last_name'>Last Name</label>
                <input
                  type='text'
                  id='last_name'
                  value={formData.last_name}
                  name='last_name'
                  onChange={handleChange}
                  placeholder='Enter Your Last Name'
                  required
                />
              </div>
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your Last Name'
                required
              />
            </div>
            <div className='textarea'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                onChange={handleChange}
                name='message'
                value={formData.message}
                cols='30'
                rows='10'
                required></textarea>
              {formData.message ? null : (
                <h5 className={!formData.message ? "red" : "not"}>Please enter a message </h5>
              )}
            </div>
            <div className='checked'>
              <input
                type='checkbox'
                name='check'
                id='check'
                required
                checked={formData.check}
                onChange={handleChange}
              />
              <h4>
                You agree to providing your data to Manasseh who may contact you
              </h4>
            </div>
            <button id='btn__submit' type='submit'>
              Send message
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Contact;
