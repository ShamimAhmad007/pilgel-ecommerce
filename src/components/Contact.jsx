import { useState } from "react";

const WHATSAPP_NUMBER = "919910524369"; // no +, no spaces, no dashes

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function validate() {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) newErrors.message = "Please enter a message.";
    return newErrors;
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const text = `Hi, I'm ${values.name} (${values.email}).\n\n${values.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <section className="min-h-screen bg-[#111111] text-white pt-32 md:pt-40 px-4 md:px-8 pb-20">
      <span className="text-orange-500 text-sm">✳ Contact</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16">
        Let's work together
      </h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-xl flex flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full bg-transparent border-b py-3 outline-none placeholder-white/50 text-base ${
              errors.name ? "border-red-500" : "border-white/40"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full bg-transparent border-b py-3 outline-none placeholder-white/50 text-base ${
              errors.email ? "border-red-500" : "border-white/40"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={4}
            className={`w-full bg-transparent border-b py-3 outline-none placeholder-white/50 resize-none text-base ${
              errors.message ? "border-red-500" : "border-white/40"
            }`}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="rounded-full bg-orange-500 text-white px-8 py-3 w-fit hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
        >
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
}
