import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";

function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <h1>Shop Page</h1>
        <div className="shop-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ShopPage;
