import React, { useState } from "react";

export default function Form(props) {
  const [isEdit, setisEdit] = useState(false);
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [itemList, setlist] = useState([]);

  function validateForm(e) {
    // Check if the First Name is an Empty string or not.
    e.preventDefault();
    if (state.fname == "")
      return alert("Invalid Form, First Name can not be empty");
    if (state.lname == "")
      return alert("Invalid Form, Last Name can not be empty");

    if (state.email == "") return alert("Invalid Form, Email can not be empty");
    submit();
  }

  const submit = (e) => {
    // e.preventDefault();
    setlist((prev) => {
      let data = [...prev];
      data.push(state);
      return data;
    });
  };
  const onChangeHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(itemList, "event value");

  const handleDelete = (e, index) => {
    setlist(itemList.filter((v, i) => i !== index));
  };

  const handleEdit = (e, data) => {
    e.preventDefault();
    setState(data);
    setisEdit(true);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="fname"
              value={state.fname}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lname"
              value={state.lname}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div>
          {isEdit ? (
            <button type="submit" onClick={submit}>
              Update
            </button>
          ) : (
            // <button type="submit" onClick={submit}>
            <button
              type="submit"
              onClick={(e) => {
                validateForm(e);
              }}
            >
              Submit
            </button>
          )}
        </div>

        <table border="3">
          <tr>
            {" "}
            <th>Sr.no</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

          {itemList?.map((item, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={(e) => handleDelete(e, idx)}>Delete</button>
                <button onClick={(e) => handleEdit(e, item)}>Edit</button>
              </td>
            </tr>
          ))}
        </table>
      </form>
    </div>
  );
}
