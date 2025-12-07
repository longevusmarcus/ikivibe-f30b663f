export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:space-x-12 lg:space-x-24">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Let's Connect</h2>
            <p className="text-studio-lightgray max-w-lg mb-6">
              Interested in collaborating or learning more about our approach to building enduring ideas, optimizing
              human potential, or creating sustainable wealth?
            </p>
            <div className="flex items-center">
              <span className="text-sm uppercase tracking-wider mr-4">Follow us</span>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/limitlessmarcoo"
                  className="hover:text-studio-lightgray transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @limitlessmarcoo
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-studio-gray/10 p-8 rounded-2xl">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-studio-gray/40 focus:border-studio-white py-2 outline-none"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-studio-gray/40 focus:border-studio-white py-2 outline-none"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-studio-gray/40 focus:border-studio-white py-2 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="border border-studio-white px-8 py-3 hover:bg-studio-white hover:text-studio-black transition-colors rounded-2xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
