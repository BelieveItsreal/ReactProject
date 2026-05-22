import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 5000,
    image:
      "https://image01-in.oneplus.net/media/202511/06/84bee93e851c33f9ea027b2ddd51c2b9.png?x-amz-process=image/format,webp/quality,Q_80",
  },
  {
    id: 2,
    name: "Laptop",
    price: 50000,
    image: "https://techterms.com/img/xl/laptop_586.png",
  },
  {
    id: 3,
    name: "Tv",
    price: 35000,
    image:
      "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/products/pictures/item/free/original/SBSKeqRUgk-bpl-32-hd-television-492166140-i-2-1200wx1200h.jpeg",
  },
  {
    id: 4,
    name: "Ipad",
    price: 80000,
    image:
      "https://www.designinfo.in/wp-content/uploads/2024/03/Apple-12.9-Inch-iPad-Pro-Latest-Model-with-Wi-Fi-512GB-Space-Gray-1.webp",
  },
];

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}

export default ProductList
