# 1. React Student Dashboard Project 🎒

A simple React practice project to demonstrate **Props**, **Nested Objects**, and **Nested Destructuring**.

---

## 📋 Task Requirements

Create a React application with two components: `App` (Parent) and `StudentCard` (Child) following the rules below:

### 1. Parent Component (`App`)
* Create a main object named `studentData`.
* Inside `studentData`, create a nested object named `info`.
* The `info` object must contain the following properties:
  * `name` (String): The student's name.
  * `age` (Number): The student's age.
  * `courses` (Array): A list of courses (e.g., `["React", "JavaScript", "Tailwind"]`).
* Pass this `studentData` object as a prop (e.g., `studentInfo={studentData}`) to the child component.

### 2. Child Component (`StudentCard`)
* Use **Nested Destructuring** directly inside the component's parameter to extract `name`, `age`, and `courses`.
* Render the data in the UI as follows:
  * An `<h2>` tag displaying the student's name.
  * A `<p>` tag displaying the student's age.
  * A `<ul>` tag utilizing the `.map()` method to render each course as an `<li>` element (don't forget to pass a unique `key`).

---
