import React from "react";

class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        { id: 1, title: "Horses for dummies", category: "Pets" },
        { id: 2, title: "Clean code", category: "Programming" }
      ],
      isAdmin: false
    };

    // Binding in the constructor
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = event => {
    const idToDelete = event.target.name;

    // Option 1: Object assign
    // const coursesCopy = Object.assign([], this.state.courses);

    // Option 2: Object spread
    // const courseCopy = [...this.state.courses];

    // Option 3: Just use filter.
    const courses = this.state.courses.filter(
      course => course.id !== parseInt(idToDelete)
    );

    this.setState({ courses: courses });
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
