export default function CategoryBar() {
  const categories = [
    "Mobiles",
    "Fashion",
    "Electronics",
    "Gaming",
    "Laptops",
    "Headphones"
  ];

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button key={cat} className="category-btn">
          {cat}
        </button>
      ))}
    </div>
  );
}
