import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { saveCourse, getCourseBySlug } from "./api/courseApi";
import styles from "./ManageCoursePage.module.css";
import TextInput from "./reusable/TextInput";
import { toast } from "react-toastify";

function ManageCoursePage(props) {
  // Hook. Using the useState hook.
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      getCourseBySlug(slug).then(courses => {
        // Should return just one matching course, so grab the first one.
        setCourse(courses[0]);
      });
    }
  }, [props.match.params.slug]);

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value
    });
  }

  function isValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (isNaN(course.authorId)) _errors.authorId = "Author ID must be a number";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid()) return;
    saveCourse(course)
      .then(response => {
        toast.success("Course saved.");
        props.history.push("/courses");
      })
      .catch(error => {
        toast.error("Uh oh, save failed:" + error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.body}>
      <h1>Manage Course</h1>
      <TextInput
        id="title"
        name="title"
        value={course.title}
        label="Title"
        error={errors.title}
        onChange={handleChange}
      />

      <TextInput
        id="authorId"
        name="authorId"
        value={course.authorId || ""}
        label="Author ID"
        error={errors.authorId}
        onChange={handleChange}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        error={errors.category}
        value={course.category}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
}

ManageCoursePage.propTypes = {
  // This is passed in by React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageCoursePage;
