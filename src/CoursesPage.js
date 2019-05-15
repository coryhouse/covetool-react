import React from "react";
import { getCourses, deleteCourse } from "./api/courseApi";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";

class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      isAdmin: false,
      redirectToAddCourses: false
    };

    // Binding in the constructor
    // this.handleDelete = this.handleDelete.bind(this);
  }

  // Will run when component is mounted. (after constructor)
  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses: courses });
    });
  }

  handleDelete = event => {
    const idToDelete = event.target.name;

    deleteCourse(idToDelete)
      .then(response => {
        const courses = this.state.courses.filter(
          course => course.id !== parseInt(idToDelete)
        );

        this.setState({ courses: courses }, () => {
          toast.success("Course deleted");
        });
      })
      .catch(error => {
        alert("Oops! Delete failed: " + error);
      });
  };

  handleAddCourseClick = event => {
    this.setState({ redirectToAddCourses: true });
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCourses && <Redirect to="/course" />}
        <h1>Courses</h1>
        <button type="button" onClick={this.handleAddCourseClick}>
          Add Course
        </button>
        <table>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button
                    onClick={this.handleDelete}
                    name={course.id}
                    type="button"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/course/${course.slug}`}>{course.title}</Link>
                </td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursePage;
