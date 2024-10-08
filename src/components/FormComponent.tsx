"use client";
import React, { FormEvent, useState } from "react";

const FormComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted : ", { email, message });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="email"
          placeholder="Type your email here"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          required
        />
        <textarea
          value={message || ""}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          rows={5}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default FormComponent;
