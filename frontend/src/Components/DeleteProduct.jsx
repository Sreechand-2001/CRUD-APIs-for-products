import axios from "axios";
import { useParams } from "react-router-dom";
const DeleteProduct = () => {
  const { id } = useParams();
  console.log(id);
  axios.get(`http://localhost:5000/products/delete/${id}`);
  return (
    <div>
      <h1>Delete Data</h1>
    </div>
  );
};

export default DeleteProduct;
