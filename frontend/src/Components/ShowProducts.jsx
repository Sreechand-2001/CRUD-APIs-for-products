import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import style from "./home.module.css";
const ShowProducts = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [option, setOption] = useState(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${option}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, [option]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  let lastPostIndex = currentPage * postsPerPage;
  let firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <nav className={style.nav}>
        <Link className={style.anchor} to={"/products/add-product"}>Add Product</Link>
        <select onChange={(e) => setOption(e.target.value)}>
          <option value="all">All</option>
          <option value="mobiles">Mobiles</option>
          <option value="electronics">Electronics</option>
          <option value="kitchen">Kitchen & Home</option>
          <option value="fashion">Fashion</option>
        </select>
        <Link className={style.anchor} to={`/products/delete`}>Delete Product</Link>
      </nav>
      <main className={style.main}>
        {currentPosts.map((x) => {
          return (
            <div className={style.card}>
              <div className={style.title}>{x["product name"]}</div>
              <div className={style.description}>
                {x["product description"]}
              </div>
              <div
                className={style.image}
                style={{
                  backgroundImage: `url(${x["image url"]})`,
                  backgroundSize: `contain`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                }}
              ></div>
            </div>
          );
        })}
        <div className={style.pages}>
          <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </>
  );
};

export default ShowProducts;
