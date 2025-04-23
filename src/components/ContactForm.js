"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");

  useEffect(() => {
    const fetchColleges = async () => {
      if (!course) return;

      const { data, error } = await supabase
        .from("Colleges")
        .select("name, courses");

      if (error) {
        console.error("Error fetching colleges:", error);
      } else {
        const filtered = data.filter((college) =>
          college.courses.includes(course)
        );
        setColleges(filtered.map((college) => college.name));
      }
    };

    fetchColleges();
  }, [course]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Students")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          course_interested: course,
          college_interested: selectedCollege,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message, error.details, error.hint);
        alert("Failed to submit. Please try again!");
      }
       else {
      console.log("Form submitted successfully:", data);
      alert("Form submitted successfully! We will contact you shortly.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setSelectedCollege("");
      setColleges([]);
    }
  };

  return (
    <form
      className="flex-1 flex flex-col gap-4 mt-8 md:mt-12"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First Name *"
          required
          className="flex-1 p-3 border border-gray-300 rounded"
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name *"
          required
          className="flex-1 p-3 border border-gray-300 rounded"
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <input
        type="email"
        placeholder="Email Address *"
        required
        className="p-3 border border-gray-300 rounded"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="p-3 border border-gray-300 rounded"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <select
        aria-label="Course you are interested in"
        name="course"
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
          setSelectedCollege(""); 
        }}
        className="p-3 border border-gray-300 rounded"
        required
      >
        <option value="" disabled>Select your course</option>
        <option value="B.Tech">B.Tech</option>
        <option value="M.Tech">M.Tech</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="BBA">BBA</option>
        <option value="MBA">MBA</option>
      </select>

      <select
        aria-label="Select college"
        name="college"
        value={selectedCollege}
        onChange={(e) => setSelectedCollege(e.target.value)}
        className="p-3 border border-gray-300 rounded"
        required
        disabled={!course}
      >
        <option value="" disabled>
          {course ? "Select a college" : "Select a course first"}
        </option>
        {colleges.map((college, index) => (
          <option key={index} value={college}>
            {college}
          </option>
        ))}
      </select>

      <button
  type="submit"
  className="bg-[#231F41] hover:bg-blue-800 hover:text-white text-yellow-400 font-semibold py-3 rounded transition-all"
>
  Submit
</button>

    </form>
  );
}
