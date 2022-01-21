import React from "react";
import UserLayout from "../../../layout/UserLayout";
import "./Contact.css";
function Contact() {
  return (
    <UserLayout>
      <div className="contact_container">
        <div className="map_container">
          <h2>Find us at: </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15838.1858912774!2d125.5915421!3d7.062452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb05a2ecf51763cb5!2sAlorica%20-%20Davao!5e0!3m2!1sen!2sph!4v1641964578057!5m2!1sen!2sph"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="LOVE Location"
          />
        </div>
      </div>
    </UserLayout>
  );
}

export default Contact;
