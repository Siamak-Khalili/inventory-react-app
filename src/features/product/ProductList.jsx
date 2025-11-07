import { BiTrashAlt } from "react-icons/bi";

function ProductList({ products, onDelete, productNumber }) {
  return (
    <div>
      <div className="section">
        <div className="flex items-center justify-between gap-3">
          <h2 className="section-title">Product List</h2>
          <span className="text-sm font-semibold mb-5">
            {productNumber} items
          </span>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700  rounded-md  p-5 mb-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">
                    {product.title}
                  </h3>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                      {product.categoryTitle}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                      Qty: {product.quantity}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400">
                    Added: {new Date(product.createAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => onDelete(product.id)}
                  className="group p-2 rounded-lg transition-all duration-200 
             hover:bg-red-50 hover:shadow-sm 
             dark:hover:bg-red-900/20
             focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
                >
                  <BiTrashAlt
                    className="w-5 h-5 text-neutral-400 
                         group-hover:text-red-600 
                         dark:text-neutral-500 dark:group-hover:text-red-400 
                         transition-colors duration-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
