export default function Home() {
  return (
    <>
    {/* hero section */}
    <section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Application</h1>
        <p className="text-lg mb-8">This is a sample application built with Next.js and Tailwind CSS.</p>
        <a href="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go to Dashboard</a>
      </div>
    </section>
    </>
  );
}
