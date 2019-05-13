import React from "react";
import { getCourses, deleteCourse } from "./api/courseApi";
import { toast } from "react-toastify";

class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      isAdmin: false
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

  render() {
    return (
      <>
        <h1>Courses</h1>
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
                <td>{course.title}</td>
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
