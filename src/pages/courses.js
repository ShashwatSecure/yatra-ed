"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Menu, X } from "lucide-react";

const primaryColor = "#231F41";

// Utility to safely parse courses
const parseCourses = (courses) => {
  if (Array.isArray(courses)) return courses;
  try {
    return JSON.parse(courses || "[]");
  } catch {
    return [];
  }
};

export default function CoursesPage() {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [allCourses, setAllCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchColleges = async () => {
      const { data, error } = await supabase.from("Colleges").select("*");

      if (error) {
        console.error("❌ Error fetching colleges:", error.message);
      } else {
        const sortedColleges = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setColleges(sortedColleges);
        setFilteredColleges(sortedColleges);
        

        // Extract unique courses
        const coursesSet = new Set();
        data.forEach((college) => {
          const courses = parseCourses(college.courses);
          courses.forEach((course) => coursesSet.add(course.trim()));
        });
        setAllCourses([...coursesSet]);
      }
    };

    fetchColleges();
  }, []);

  const handleCourseFilter = (course) => {
    setSelectedCourse(course);
    if (!course) {
      setFilteredColleges(colleges);
    } else {
      const filtered = colleges.filter((college) =>
        parseCourses(college.courses).includes(course)
      );
      setFilteredColleges(filtered);
    }
  };

  return (
    <>

      <div className="min-h-screen bg-white px-4 py-10 md:px-12">
        <h1
          className="text-3xl font-bold text-center mb-6"
          style={{ color: primaryColor }}
        >
          Courses & Colleges Under YatraEd
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            className={`px-4 py-2 border rounded-full text-sm ${
              selectedCourse === null
                ? "bg-[#231F41] text-white"
                : "bg-gray-100"
            }`}
            onClick={() => handleCourseFilter(null)}
          >
            All
          </button>
          {allCourses.map((course) => (
            <button
              key={course}
              className={`px-4 py-2 border rounded-full text-sm ${
                selectedCourse === course
                  ? "bg-[#231F41] text-white"
                  : "bg-gray-100 hover:bg-yellow-200"
              }`}
              onClick={() => handleCourseFilter(course)}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.length === 0 ? (
            <div className="text-center col-span-full text-gray-500">
              No colleges found for this course.
            </div>
          ) : (
            filteredColleges.map((college) => (
              <div
                key={college.id}
                className="shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                {/* College Photo */}
                {college.photo && (
                  <img
                    src={college.photo}
                    alt={`${college.name} image`}
                    className="w-full h-40 object-cover"
                  />
                )}

                {/* College Details */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#231F41]">
                    {college.name}
                  </h2>
                  <p className="text-sm text-gray-600">{college.location}</p>
                  <div className="mt-2 text-sm text-gray-800">
                    <span className="font-medium">Courses:</span>{" "}
                    {parseCourses(college.courses).join(", ")}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
