export default function Products() {
  return (
    <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg mb-8">Explore our range of skincare products designed for all skin types.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Product 1</h3>
                <p>High-quality skincare product for all skin types.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Product 2</h3>
                <p>Effective solution for acne-prone skin.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Product 3</h3>
                <p>Hydrating moisturizer for dry skin.</p>
            </div>
        </div>
    </div>
  );
}