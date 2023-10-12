import React from "react";

class LabExercise extends React.Component {
  render() {
    return (
      <div>
        <h4>Lab Exercise 4</h4>
        <h4>IT1050 – Object Oriented Concepts Java</h4>
        <h3>Semester 2, 2021</h3>

        <h2>Objectives</h2>

        <h2>Exercise</h2>
        <ol>
          <li>Create a new project in Lab Workspace..</li>
          <li>Select Project - Add New Item - Name the file as "ShapeArea".</li>
          <li>Type the function prototypes in this file as shown below:</li>
        </ol>
        <pre>
          {/* Function prototypes for ShapeArea.h */}
          {/* Add your function prototypes here */}
        </pre>
        <ol start="4">
          <li>
            Add another .java file. Select Project Add New Item Java File
            (.class). Name the file as "ShapeArea".
          </li>
          <li>
            Implement the functions in the ShapeArea.java file as shown below.
            Note that you have to add the following header files in the code.
          </li>
        </ol>
        <pre>{/* Add your C++ code for ShapeArea.cpp here */}</pre>
        <ol start="6">
          <li>
            Now write the main program ( in Lab-05.java file ) to use the above
            three functions to calculate the area of the green colour shape in
            the diagram below. Note that you have to add the following header
            files to your main program.
          </li>
        </ol>
        <pre>{/* Add your C++ code for Lab-05.cpp here */}</pre>

        <h3>Diagram:</h3>
        <img src="diagram.png" alt="Diagram of the shape" />

        <h2>Homework</h2>
        <p>
          You can add the function you have developed to find the perimeter of
          the rectangle into the program and calculate the cost for fixing a
          fence around the Yard.
        </p>
      </div>
    );
  }
}

export default LabExercise;
