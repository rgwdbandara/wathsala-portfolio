function Contact() {
  return (
    <section id="contact" className="px-4 py-20 text-white bg-black md:px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-14 md:text-5xl">
          Contact Me
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-green-400">✉</span>
              <a
                href="mailto:wd34858@gmail.com"
                className="text-lg text-gray-200 hover:text-green-400"
              >
                wd34858@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400">📱</span>
              <a
                href="tel:0761218033"
                className="text-lg text-gray-200 hover:text-green-400"
              >
                0761218033
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400">📍</span>
              <p className="text-lg text-gray-200">Kandy, Sri Lanka</p>
            </div>

            <div className="pt-4">
              <div className="flex gap-4 text-lg">
                <a
                  href="https://wa.me/94761218033"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400"
                >
                  WhatsApp
                </a>
                <a
                  href="https://github.com/rgwdbandara"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/wbandara"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 text-white bg-transparent border border-green-400 rounded-lg outline-none placeholder:text-gray-500 focus:border-green-300"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 text-white bg-transparent border border-green-400 rounded-lg outline-none placeholder:text-gray-500 focus:border-green-300"
            />

            <textarea
              rows="7"
              placeholder="Message"
              className="w-full px-5 py-4 text-white bg-transparent border border-green-400 rounded-lg outline-none placeholder:text-gray-500 focus:border-green-300"
            ></textarea>

            <button
              type="button"
              className="px-8 py-3 font-semibold text-black transition bg-green-500 rounded-lg hover:bg-green-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;