// components/AddCollegeForm.js
import { useState } from "react";

const AddCollegeForm = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [courses, setCourses] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/colleges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        photo,
        courses: courses.split(",").map((c) => c.trim()),
        location,
      }),
    });

    const data = await response.json();
    if (data.error) {
      alert("Error: " + data.error);
    } else {
      alert("College added successfully!");
      // Optionally clear form
      setName("");
      setPhoto("");
      setCourses("");
      setLocation("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        placeholder="College Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Courses (comma separated)"
        value={courses}
        onChange={(e) => setCourses(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Add College</button>
    </form>
  );
};

export default AddCollegeForm;
