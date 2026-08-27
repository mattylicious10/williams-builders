"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section
        id="quote"
        className="py-24 px-6 bg-[#1D3A22] text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Thank You
          </h2>

          <p>
            Your quote request has been sent.
            We'll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote"
      className="py-24 px-6 bg-[#1D3A22] text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Request a Quote
        </h2>

        <p className="text-center mb-12 text-gray-200">
          Tell us about your project and we'll get in touch.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full p-4 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#B78B3A]"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full p-4 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#B78B3A]"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full p-4 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#B78B3A]"
            />

            <select
              value={formData.projectType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  projectType: e.target.value,
                })
              }
              className="w-full p-4 rounded-lg border border-gray-300 text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B78B3A]"
              required
            >
              <option value="">
                Select Project Type
              </option>
              <option value="Custom Home">
                Custom Home
              </option>
              <option value="Renovation">
                Renovation
              </option>
              <option value="Deck">
                Deck
              </option>
              <option value="Garage / Shop">
                Garage / Shop
              </option>
              <option value="Other">
                Other
              </option>
            </select>

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full p-4 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#B78B3A]"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#1D3A22] text-white py-4 rounded-lg font-semibold hover:bg-[#B78B3A] transition cursor-pointer"
            >
              Request Quote
            </button>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p>204-999-4339</p>
          <p>info@williamsbuilders.ca</p>
        </div>
      </div>
    </section>
  );
}