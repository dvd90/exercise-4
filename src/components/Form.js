import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  const { title, body } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const payload = JSON.stringify({
      title,
      body
    });
    const config = {
      headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload,
      config
    );

    console.log(res);
  };

  return (
    <div id="form">
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="Body"
          name="body"
          value={body}
          onChange={e => onChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
