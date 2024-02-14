
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: black;
  color: white;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

function Contact() {
  // common stylings
  
  const formStyle = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  };
  const styleInput = {
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

  return (
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

        <form>
          {/* inputs */}
          <div style={formStyle}>
            <label style={lableStyle}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value=""
              style={styleInput}
              required
            />
          </div>
          <div style={formStyle}>
            <label style={lableStyle}>Email</label>
            <input
              type="email"
              name="email"
              value=""
              style={styleInput}
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
              required
            ></textarea>
          </div>
          {/* actions */}
          <div style={{ textAlign: "center"}}>
            <button type="submit" style={{...buttonStyle, marginInlineEnd:'25px',backgroundColor: "#007bee"}}>
              Submit
            </button>
            <button type="reset" style={{...buttonStyle, backgroundColor:'red'}}>Cancel</button>
          </div>
        </form>
    
    </FormContainer>
  );
}

export default Contact;
