"use client";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="flex flex-col">
      {/* Cover Image Header */}
      <div className="relative h-72 w-full">
        <img
          src="https://res.cloudinary.com/dddvipq4h/image/upload/v1745385185/contact-us1_ffnbbc.svg"
          alt="Contact cover"
          className="object-cover w-full h-full rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center rounded-b-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>


      {/* Main Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="w-full bg-[#231F41] rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
            Other ways to contact us:
          </h3>

          <div className="space-y-6 text-gray-800">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <div className="bg-[#f5f4fa] p-3 rounded-full">
                <MapPin className="text-[#231F41]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#231F41]">Address</h4>
                <p className="text-gray-700">
                  YatraEd Office, 2nd Floor, EduHub Tower,<br />
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <div className="bg-[#f5f4fa] p-3 rounded-full">
                <Phone className="text-[#231F41]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#231F41]">Phone</h4>
                <p className="text-gray-700">+91 9876543210</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <div className="bg-[#f5f4fa] p-3 rounded-full">
                <Mail className="text-[#231F41]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#231F41]">Email</h4>
                <p className="text-gray-700">support@yatraed.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-4 pb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#231F41] mb-6 text-center">
          Find Us On The Map
        </h2>
        <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">


          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d557.604108150337!2d88.428434008933!3d22.569874813047566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b225f5efd9%3A0xed68992aac5b9bd3!2sAurora%20Waterfront%2C%20GN%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1746250264996!5m2!1sen!2sin" width="100%" height="410" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
  );
}
