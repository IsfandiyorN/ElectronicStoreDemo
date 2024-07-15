import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-5 p-4">
      {loading && <div class="lds-hourglass"></div>}
      <div className="max-w-6xl text-center">
        <img
          className="mx-auto mb-5"
          src={product.image_url}
          alt={product.name}
        />
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="mb-3">{product.description}</p>
        <p className="text-xl font-semibold">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
