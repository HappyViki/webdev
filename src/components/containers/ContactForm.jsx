const ContactForm = () => {

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact", 
        "name": e.target.elements.name.value,
        "email": e.target.elements.email.value,
        "subject": e.target.elements.subject.value,
        "message": e.target.elements.message.value,
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <form
      name="contact"
      method="POST"
      className="card -mt-1.5 space-y-4 p-4 md:p-5"
      netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="inputbox">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          name="name"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          name="email"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Enter subject..."
          name="subject"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter you message..."
          cols="1"
          rows="5"
          name="message"
        />
      </div>
      <button type="submit" className="btn">
        <span>Send</span>
      </button>
    </form>
  );
};

export default ContactForm;
