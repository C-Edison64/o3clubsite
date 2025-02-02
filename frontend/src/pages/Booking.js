// src/pages/Booking.js
import React, { useState } from "react";

const Booking = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Booking successful:", result);
      alert("Your booking request has been submitted!");
      // Optionally reset form data:
      setFormData({ name: "", email: "", date: "", time: "" });
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("There was an error submitting your booking.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Booking Page</h1>
      <p>
        Please fill in the form below to schedule your re-gripping appointment.
      </p>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="date">Date:</label>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="time">Time:</label>
          <br />
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
