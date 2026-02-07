export default function Upload() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Upload Your Skin Image</h1>
      <p className="text-lg mb-8">Get personalized skin analysis and product recommendations.</p>
      <form className="max-w-md mx-auto">
        <input type="file" accept="image/*" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600">Upload</button>
      </form>
    </div>
  );
}