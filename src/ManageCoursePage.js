import React, { useState } from "react";
import PropTypes from "prop-types";

function ManageCoursePage(props) {
  // Hook. Using the useState hook.
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form>
      <h1>Manage Course</h1>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={course.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="authorId">Author Id</label>
        <br />
        <input
          type="text"
          id="authorId"
          name="authorId"
          value={course.authorId}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <br />
        <input
          type="text"
          id="category"
          name="category"
          value={course.category}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

ManageCoursePage.propTypes = {};

export default ManageCoursePage;
