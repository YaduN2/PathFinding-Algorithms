import React from "react";
import styled from "styled-components";
function ContactPage() {
  const contact = {
    name: "Yadunandan",
    email: "yyadunandann@gmail.com",
    github: "https://github.com/YaduN2",
    linkedIn: "https://www.linkedin.com/in/yadu-nandan-453b53219/",
  };

  return (
    <Heading>
      <div>
        <span> Name:&nbsp; </span>
        {contact.name}
      </div>
      <div>
        <span>Email:&nbsp;</span>
        {contact.email}
      </div>
      {/* <div>
        <span>Github:&nbsp;</span>
        <a href={contact.github}>YaduN2</a>
      </div> */}
      <div>
        <span>LinkedIn:&nbsp;</span>
        <a href={contact.linkedIn}>Yadu Nandan</a>
      </div>
    </Heading>
  );
}

export default ContactPage;

const Heading = styled.div`
  background-color: #b9b9b9;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: 3px solid transparent;
  width: 95%;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  span {
    user-select: none;
    font-weight: 500;
  }
  &:hover {
    border: 3px solid #15cdfc;
  }
  a {
    color: #111;
    text-decoration: underline;
    &:hover {
      color: #2eff2e;
    }
  }
`;
