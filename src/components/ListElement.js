import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ListElement = ({ component }) => {
  const [edit, setEdit] = useState(false);
  const [post, setPost] = useState("");
  const editInput = (
    <Fragment>
      <form onSubmit={e => onSubmitEdit(e)}>
        <input type="text" name="name" onChange={e => onChange(e)} />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  );

  const onChange = e => setPost(e.target.value);

  const onSubmitEdit = async e => {
    e.preventDefault();
    const body = JSON.stringify({
      title: post
    });
    const config = {
      headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${component.id}`,
      body,
      config
    );

    console.log(res);
  };

  const onClickTrash = async e => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${component.id}`
    );

    console.log(res);
  };
  const onClickPen = e => {
    console.log("pen");
    setEdit(true);
  };
  return (
    <Fragment>
      {edit ? (
        editInput
      ) : (
        <li className="item-list">
          <span>{component.title}</span>
          <i className="fas fa-pen" onClick={e => onClickPen(e)}></i>
          <i className="fas fa-trash" onClick={e => onClickTrash(e)}></i>
        </li>
      )}
    </Fragment>
  );
};

ListElement.propTypes = {
  component: PropTypes.object
};

export default ListElement;
