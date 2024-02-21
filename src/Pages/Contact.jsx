import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 20px;
  padding: 20px;
  border: none;
  background: black;
  color: white;


  @media (max-width: 600px) {
    width: 90%;
    margin: 0;
`;

function Contact() {
  // common stylings

  const formStyle = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  };
  const styleInput = {
    color: "black",
    border: "none",
    borderRadius: "14px",
    padding: "10px",
  };
  const lableStyle = {
    margin: "12px",
  };
  const buttonStyle = {
    padding: "5px 20px",
    marginTop: "15px",
    color: "#fff",
    border: "none",
    borderRadius: "19px",
    cursor: "pointer",
    alignItems: "center",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{backgroundColor: 'black'}} className="h-[90vh]">
      <FormContainer>
        <p
          style={{
            margin: "15px",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Get in touch
        </p>

        <form onSubmit={handleSubmit}>
          {/* inputs */}
          <div style={formStyle}>
            <label style={lableStyle}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              style={styleInput}
              value={formData.name}
              onChange={handleInput}
              required
            />
          </div>
          <div style={formStyle}>
            <label style={lableStyle}>Email</label>
            <input
              type="email"
              name="email"
              style={styleInput}
              value={formData.email}
              onChange={handleInput}
              placeholder="Enter valid email address"
              required
            />
          </div>
          <div style={formStyle}>
            <label style={lableStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Enter message"
              style={styleInput}
              value={formData.message}
              onChange={handleInput}
              required
            ></textarea>
          </div>
          {/* actions */}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                ...buttonStyle,
                marginInlineEnd: "25px",
                backgroundColor: "#007bee",
              }}
            >
              Submit
            </button>
            <button
              type="reset"
              onClick={handleCancel}
              style={{ ...buttonStyle, backgroundColor: "red" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default Contact;
