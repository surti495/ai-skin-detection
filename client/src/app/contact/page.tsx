export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        If you have any questions, feedback, or would like to learn more about our services, please don't hesitate to contact us. We are here to help you on your journey to healthier skin.
      </p>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" rows={5}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
    </div>
  );
}