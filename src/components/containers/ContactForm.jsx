const ContactForm = () => {

  return (
    <form
      action="/thanks"
      name="contact"
      method="POST"
      className="card -mt-1.5 space-y-4 p-4 md:p-5"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="inputbox">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          id="name"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          id="email"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Enter subject..."
          id="subject"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter you message..."
          cols="1"
          rows="5"
          id="message"
        />
      </div>
      <button type="submit" className="btn">
        <span>Send</span>
      </button>
    </form>
  );
};

export default ContactForm;
