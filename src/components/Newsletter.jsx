import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="bg-[#1a1410] text-white pt-20 md:pt-32 pb-16 px-4 md:px-8">
      <div className="flex flex-col gap-10 mb-16 md:mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get AI insights
          </h2>

          {subscribed ? (
            <p className="text-orange-400">Thanks for subscribing! 🎉</p>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-full sm:w-64">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className={`w-full bg-transparent border-b py-2 outline-none placeholder-white/50 ${
                      error ? "border-red-500" : "border-white/40"
                    }`}
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="rounded-full bg-white text-black px-6 py-3 font-medium whitespace-nowrap hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  SUBSCRIBE
                </button>
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
