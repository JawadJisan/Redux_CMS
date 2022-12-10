import React from "react";
import { BiChevronsRight, BiCloud, BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addBlogAsHistory } from "../redux/actions/contentAction";
import { toggleTags } from "../redux/actions/tagsFilterAction";


const BlogCard = ({ content }) => {
  const { _id } = content;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goInventory = id => {
    // navigate(`/inventories/${id}`)
    navigate(`/blog-details/${id}`);

  }
  const handleAddBlogHistory = () => {
    dispatch(addBlogAsHistory(content));
  };

  return (
    <div className="card bg-gray-50 p-3 group shadow-sm rounded-sm">
      <div className="card-body">
        <div className="image h-60 overflow-hidden border relative">
          <img
            src={content?.imageUrl}
            alt="ImagE"
            className="h-full w-full object-cover group-hover:scale-150 transition-all duration-500 group-hover:rotate-12"
          />
          <div className="date-overlay absolute left-0 top-0 z-10 w-full h-full grid place-items-center bg-[#7e7e7e67] opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="date text-white font-bold text-lg border-2 border-white p-2 py-1 uppercase font-noto">
              12 <br /> Dec
            </span>
          </div>
        </div>
        <div className="details  m-3 font-noto">
          <div className="details-inner my-2 p-3 -mt-12 z-30 bg-gray-50 relative">
            <h5 className="card-title uppercase font-bold group-hover:text-yellow-500 transition-all">
              {content.model}
            </h5>
            <div className="meta flex justify-between gap-3 text-sm text-gray-500 my-1">
              <span className="date flex items-center gap-1 capitalize">
                <BiEdit className="text-orange-600" /> Jhonson
              </span>
              <span
                onClick={() => dispatch(toggleTags(`${content?.tags}`))}
                className="author cursor-pointer bg-green-600 p-1 rounded-md text-white flex items-center gap-1">
                <BiCloud className="text-white" /> {content?.tags}
              </span>
            </div>
            <p className="card-text text-center overflow-hidden text-xl my-2 text-gray-800">
              {content?.title}
            </p>
            <div className="relative whitespace-pre-wrap">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quisquam aut ratione at, fugit optio!
            </div>

            {/* <button
              // onClick={() => { goInventory(_id) }},
              to={`/blog-details/${blog?._id}`}
              onClick={handleAddBlogHistory}
            >Read More</button> */}

            <Link
              to={`/blog-details/${_id}`}
              // onClick={handleAddBlogHistory}
              onClick={() => dispatch(addBlogAsHistory(content))}
              className="card-link flex items-center gap-2 p-3 bg-gray-100  uppercase text-sm font-bold text-gray-600 hover:bg-yellow-500 hover:text-yellow-100 transition-all duration-700"
            >
              <BiChevronsRight size={18} />
              Read more
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
