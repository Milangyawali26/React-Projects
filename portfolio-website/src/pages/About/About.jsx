import React, { useEffect, useState } from "react";
import ServiceData from "../../../public/services.json";
import Service from "./Service";
import Testimonial from "./Testimonial";

const About = () => {
  const [testimonials, setTestmonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json").then((res) =>
      res.json().then((data) => {
        setTestmonials(data);
      })
    );
  }, []);

  console.log(testimonials);

  return (
    <div className="about active">
      <header>
        <h2 className="  font-bold text-2xl text-white article-title ">
          About Me
        </h2>
      </header>
      <section className="about-text text-white">
      <p className="">
      I am a passionate and detail-oriented software developer with expertise in **Flutter, React, and backend technologies**. I have a strong foundation in **mobile and web development**, focusing on building **user-friendly, scalable, and high-performance applications**.  
    </p>
    <p className=" mt-3">
      My journey in tech has allowed me to work on **real-world projects**, gaining hands-on experience in **UI/UX design, API integrations, and database management**. I am always eager to learn and apply new technologies to create innovative solutions.
    </p>
    <p className=" mt-3">
      Currently, I am **seeking opportunities** to grow my skills and contribute to impactful projects. I believe in **continuous learning, problem-solving, and teamwork** to build efficient software solutions.
    </p>
      </section>

      {/* services */}
      <section className="service">
        <h2 className="h3 service-title">what i am doing</h2>
        <ul className="grid grid-cols-2 gap-2">
          {ServiceData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icons={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* testimonial sections  */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title"> Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* clients logo  */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
