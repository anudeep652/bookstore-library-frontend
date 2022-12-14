import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpArrow from "../components/UpArrow";
import CreateIcon from "@mui/icons-material/Create";

const MyBooks = () => {
  const { boughtBooks, rentedBooks } = useSelector(
    (state: RootState) => state.user
  );
  const { books } = useSelector(
    (state: RootState) => state.persistedReducer.book
  );

  const userBoughtBooks = books.filter((b) => boughtBooks?.includes(b.name));
  const userRentedBooks = books.filter((b) => rentedBooks?.includes(b.name));
  return (
    <>
      <Navbar name="My Library" />
      <h1 className="text-2xl text-black text-start  mt-10 p-5 md:text-3xl md:ml-15 mystyle">
        You have bought {userBoughtBooks.length}{" "}
        {userBoughtBooks.length === 1 ? "book" : "books"}
      </h1>
      <div className="container my-5 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap md:-mx-1 lg:-mx-4">
          {userBoughtBooks.map((b) => (
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              className="shadow-md mb-10"
              key={b.name}
            >
              <div
                className="container px-5 py-12 mx-auto"
                style={{ cursor: "auto" }}
              >
                <div className="lg:w-4/5 md:mx-12 flex flex-wrap ">
                  <img
                    alt={b.name}
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
                    src={b.imageUrl}
                    style={{ cursor: "auto" }}
                  />
                  <div
                    className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                    style={{ cursor: "auto" }}
                  >
                    <p
                      className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize"
                      style={{ cursor: "auto" }}
                    >
                      {b.name}
                    </p>
                    <Link
                      to={`#`}
                      className="text-lg title-font text-gray-500 tracking-widest capitalize  hover:underline"
                      style={{ cursor: "pointer" }}
                    >
                      {b.author}
                    </Link>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <>
                          {/* {starsArr.map((s) => (
                            <svg
                              key={s}
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-indigo-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          ))}
                          {remStars()} */}

                          <span className="text-gray-600 ml-3">
                            {b.reviews?.length}{" "}
                            {b.reviews?.length === 1 ? "review" : "reviews"}
                          </span>
                        </>
                      </span>
                    </div>
                    <h2 className="leading-relaxed text-lg">{b.description}</h2>
                    <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

                    <>
                      <h1 className="mb-3 text-xl">You bought this book</h1>

                      <Link to={`/${b.name}/writeReview`}>
                        Write a review
                        <CreateIcon
                          fontSize="small"
                          className="ml-1 mb-2 cursor-pointer"
                        />
                      </Link>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap md:-mx-1 lg:-mx-4 mt-20">
          <h1 className="text-2xl text-black text-center mb-5 ml-10 w-90 md:text-3xl">
            You have rented {userRentedBooks.length}{" "}
            {userRentedBooks.length === 1 ? "book" : "books"}
          </h1>
          {userRentedBooks.map((b) => (
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              className="shadow-md mb-10"
              key={b.name}
            >
              <div
                className="container px-5 py-12 mx-auto"
                style={{ cursor: "auto" }}
              >
                <div className="lg:w-4/5 md:mx-12 flex flex-wrap ">
                  <img
                    alt={b.name}
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
                    src={b.imageUrl}
                    style={{ cursor: "auto" }}
                  />
                  <div
                    className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                    style={{ cursor: "auto" }}
                  >
                    <p
                      className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize"
                      style={{ cursor: "auto" }}
                    >
                      {b.name}
                    </p>
                    <Link
                      to={`#`}
                      className="text-lg title-font text-gray-500 tracking-widest capitalize  hover:underline"
                      style={{ cursor: "pointer" }}
                    >
                      {b.author}
                    </Link>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        {/* {starsArr.map((s) => (
                        <svg
                          key={s}
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      ))}
                      {remStars()} */}

                        <span className="text-gray-600 ml-3">
                          {b.reviews?.length}{" "}
                          {b.reviews?.length === 1 ? "review" : "reviews"}
                        </span>
                      </span>
                    </div>
                    <h2 className="leading-relaxed text-lg">{b.description}</h2>
                    <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

                    <>
                      <h1 className="mb-3 text-xl">You Rented this book</h1>

                      <Link to={`/${b.name}/writeReview`}>
                        Write a review{" "}
                        <CreateIcon
                          fontSize="small"
                          className="ml-1 mb-2 cursor-pointer"
                        />
                      </Link>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UpArrow />
      <Footer />
      {/* Reviews */}
    </>
  );
};

export default MyBooks;
