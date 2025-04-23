import { FaHandshake, FaLightbulb, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#231F41]">
      {/* Hero Section */}
      <section className="bg-[#FDF6E3] py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Who We Are at <span className="text-yellow-500">YatraEd</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Empowering students to journey beyond boundaries—academically and
            professionally.
          </p>
        </motion.div>
      </section>

      {/* Philosophy & Mission */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Philosophy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            At YatraEd, we believe education is not just a journey of acquiring knowledge, but a transformative experience that shapes futures. Our philosophy is rooted in guiding students with integrity, insight, and intention—empowering them to make informed decisions, unlock opportunities worldwide, and discover the paths that align with their true potential. Much like a torchbearer lighting the way, we help illuminate the path ahead, guiding students towards success and fulfillment in their academic and professional lives. We’re not just consultants; we are partners in your academic odyssey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://res.cloudinary.com/dddvipq4h/image/upload/v1745382663/torch_ikt48q.jpg"
              alt="Philosophy"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-[#231F41] text-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white text-[#231F41] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">End-to-End Guidance</h3>
              <p>
                From shortlisting universities to securing scholarships, we walk
                with you every step.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white text-[#231F41] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">Strong Student Relationships</h3>
              <p>
              Driven by our core values of compassion, integrity, and excellence, we build strong relationships with each of our students.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white text-[#231F41] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">Career-Driven</h3>
              <p>
                Your academic path is aligned with your long-term career goals—
                we help you map both.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Heading Below "What Sets Us Apart" */}
      <section className="px-6 md:px-16 py-12 bg-[#FDF6E3]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Join Us on Your Academic Journey
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With YatraEd, you’re not just enrolling in a program; you’re
            embarking on a lifelong partnership. Our holistic approach ensures
            your success, not only in your education but in your career. Let’s
            shape your future together.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3 text-white bg-[#231F41] rounded-full hover:bg-yellow-500 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
