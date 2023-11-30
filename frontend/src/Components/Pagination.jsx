import style from "./home.module.css";
const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <>
      {pages.map((page, index) => {
        return (
          <button
            className={style.btn}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
