import React from "react";

const Contact = () => {
return (
    <div className="contact">
        <header>
            <h2 className="h2 article-title">Contact</h2>
        </header>

        <div style={{padding:"24px 0px"}}>
            <figure  >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712411!2d85.3261328!3d27.70896035000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1742557438706!5m2!1sen!2snp"
                    loading="lazy"
                    allowFullScreen=""
                    width="100%"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </figure>
        </div>

        {/* contact form */}

        <section className="contact-form">
            <h3 className="form-title h3">Contact_form</h3>
            <form action="#" className="form">
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        className="form-input"
                        placeholder="enter your full name"
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-input"
                        placeholder="email address"
                    />
                </div>
                <textarea
                    className="form-input"
                    name="message"
                    id="message"
                    placeholder="enter your message here..."
                ></textarea>

                <button className="form-btn" type="submit">
                    <span>Send Message</span>
                </button>
            </form>
        </section>
    </div>
);
};

export default Contact;
