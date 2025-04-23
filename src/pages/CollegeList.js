// Example in a React component (e.g., CollegeList.js)
import { useEffect, useState } from "react";

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      const response = await fetch("/api/colleges");
      const data = await response.json();
      setColleges(data);
    };
    fetchColleges();
  }, []);

  return (
    <div>
      <h2>List of Colleges</h2>
      <ul>
        {colleges.map((college) => (
          <li key={college.id}>
            <h3>{college.name}</h3>
            <img src={college.photo} alt={college.name} width="100" />
            <p>{college.location}</p>
            <p>Courses: {college.courses.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;
