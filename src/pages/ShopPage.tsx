import useProducts from "../hooks/useProducts";

function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <h1>Shop Page</h1>
        <div className="shop-container">
          {products.map((product) => product.price)}
        </div>
      </div>
    </>
  );
}
export default ShopPage;
