import React, { useState } from "react";

import { BsFillMapFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

import { client } from "../lib/client";

import { useForm, SubmitHandler } from "react-hook-form";

const Contact = ({ bannerData }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:${bannerData[0].email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>{bannerData[0].contactText}</p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="contact-box">
            <div className="contact-icon">
              <BsFillMapFill />
            </div>
            <div className="contact-text">
              <h3>Address</h3>
              <p>{bannerData[0].address}</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <BsFillTelephoneFill />
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <a href={`tel:${bannerData[0].phone}`} target="_blank">
                {bannerData[0].phone}
              </a>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <AiTwotoneMail />
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <a href={`mailto:${bannerData[0].email}`} target="_blank">
                {bannerData[0].email}
              </a>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Send Message</h2>
            <div class="inputBox">
              <span>Full Name</span>
              <input
                {...register("name")}
                type="text"
                name=""
                required="required"
                placeholder="Name"
              />
            </div>
            <div class="inputBox">
              <span>Subject</span>
              <input
                {...register("subject")}
                type="text"
                name=""
                required="required"
                placeholder="The subject of the message.."
              />
            </div>
            <div class="inputBox">
              <span>Message</span>
              <textarea
                {...register("message")}
                type="text"
                required="required"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div class="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { bannerData },
  };
};

export default Contact;
