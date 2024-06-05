// src/components/ContactForm.jsx
import React, { useState } from "react";
import AlertBox from "./AlertBox";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "This field is required";
    if (!formData.lastName) newErrors.lastName = "This field is required";
    if (!formData.email) newErrors.email = "Please enter a valid email address";
    if (!formData.queryType) newErrors.queryType = "Please select a query type";
    if (!formData.message) newErrors.message = "This field is required";
    if (!formData.consent)
      newErrors.consent = "Please consent to being contacted";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle form submission
      console.log("Form data:", formData);
      setAlertMessage("Message sent");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <p className="block text-sm font-medium text-gray-700">
            Query Type <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center rounded-md border-muted_light border-2 py-2 px-5 hover:bg-teal-100 w-full">
              <input
                type="radio"
                id="general-enquiry"
                name="queryType"
                value="General Enquiry"
                checked={formData.queryType === "General Enquiry"}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <label
                htmlFor="general-enquiry"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                General Enquiry
              </label>
            </div>
            <div className="flex items-center rounded-md border-muted_light border-2 py-2 px-10 w-full hover:bg-teal-100">
              <input
                type="radio"
                id="support-request"
                name="queryType"
                value="Support Request"
                checked={formData.queryType === "Support Request"}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <label
                htmlFor="support-request"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Support Request
              </label>
            </div>
          </div>
          {errors.queryType && (
            <p className="text-red-500 text-sm">{errors.queryType}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label
            htmlFor="consent"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            I consent to being contacted by the team{" "}
            <span className="text-red-500">*</span>
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#0C7D69] text-white font-semibold rounded-md hover:bg-[#065945] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
      <AlertBox message={alertMessage} />
    </div>
  );
};

export default ContactForm;
