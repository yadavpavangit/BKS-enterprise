import React from "react";
import { featureProducts } from "../constans";

function Products() {
  //   const [price, setPrice] = useState(null);
  return (
    <section className="max-w-8xl min-h-screen">
      {/* <div className="w-full flex gap-10 py-10 px-6 md:px-10"> */}
      <div className="w-full py-10 px-6 md:px-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 place-items-center">
          {featureProducts.map((product) => (
            <div
              className="w-full max-w-80 h-80 bg-white relative text-black rounded-sm"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-60 mx-auto"
              />
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h3 className="text-xl font-bold line-clamp-1">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Products;
