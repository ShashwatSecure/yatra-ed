// pages/api/colleges.js
import { supabase } from "../../../lib/supabase"; // Make sure supabase is correctly imported

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST request (to add a new college)
    const { name, photo, courses, location } = req.body;

    const { data, error } = await supabase
      .from("Colleges")
      .insert([{ name, photo, courses, location }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json({ message: "College added successfully", data });
  } else if (req.method === "GET") {
    // Handle GET request (to fetch colleges data)
    const { data, error } = await supabase
      .from("colleges")
      .select("*");

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  // If the request method is neither GET nor POST, return Method Not Allowed
  res.status(405).json({ error: "Method Not Allowed" });
}
