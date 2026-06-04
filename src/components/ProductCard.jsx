export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold mb-2">
          {product.name}
        </h2>

        <p className="text-green-600 font-bold text-lg mb-4">
          {product.price}
        </p>

        <div className="grid grid-cols-2 gap-2">

          <a
            href={product.stores.amazon}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-orange-500 text-white py-2 rounded-xl">
              Amazon
            </button>
          </a>

          <a
            href={product.stores.flipkart}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-blue-500 text-white py-2 rounded-xl">
              Flipkart
            </button>
          </a>

          <a
            href={product.stores.myntra}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-pink-500 text-white py-2 rounded-xl">
              Myntra
            </button>
          </a>

          <a
            href={product.stores.meesho}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-purple-600 text-white py-2 rounded-xl">
              Meesho
            </button>
          </a>

        </div>
      </div>
    </div>
  );
}
