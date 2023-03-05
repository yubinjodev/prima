export const Contact = () => {
  return (
    <form className="contact">
      <h3>CONTACT US</h3>
      <label>TO.</label>
      <input readOnly value="orders@grishkoshop.com" />
      <label>FROM</label>
      <input type="email" placeholder="enter your e-mail address here ..." />
      <textarea></textarea>
      <div className="contact-button">
        <button>CONTACT US</button>
      </div>
    </form>
  );
};
