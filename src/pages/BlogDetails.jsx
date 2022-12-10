import React, { useEffect, useState } from "react";
import { BiCategory, BiCloud, BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import singleContentData from "../redux/thunk/singleContent";

const BlogDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id, "ContentId")

  const history = useSelector((state) => state)
  // console.log("Hissssssssssss",history);


  const [content, setContent] = useState({});
  useEffect(() => {
    const url = `https://redux-assignment-server.onrender.com/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])

  // console.log('Read More: ', content)

  // useEffect(() => {
  //   dispatch(singleContentData(id))
  // })


  return (
    <div>
      <div className="container mx-auto bg-gray-50 p-12">
        <div className="blog-title flex items-center gap-5">
          <span className="back cursor-pointer" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
          {/* <h1 className="text-4xl font-bold">Blog Title</h1> */}
          <h1 className="text-4xl font-bold">{content?.title}</h1>
        </div>

        <div className="blog-image my-6 border rounded-md overflow-hidden bg-gray-100 p-3">
          <img
            src={content?.imageUrl}
            alt="blog"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="meta bg-gray-100 p-4">
          <div className="meta flex items-center gap-8 text-sm text-gray-500 ">
            <span className="date flex items-center gap-1 capitalize text-xl">
              <BiEdit /> Jhonson
            </span>
            {/* <span className="date flex items-center gap-1 capitalize text-xl">
              <BiCategory /> Freelancing
            </span>
            <span className="author flex items-center gap-1">
              <BiCloud /> 150
            </span> */}
          </div>
        </div>
        <div className="blog-content mt-5 bg-gray-100 p-5">
          <p className="text-gray-600 leading-7">
            {content?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
