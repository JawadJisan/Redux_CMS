import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import { toggleTags } from "../redux/actions/tagsFilterAction";
import loadContentData from "../redux/thunk/fetchContent";

const Blogs = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content.contents)
  const filters = useSelector((state) => state.filter.filters);
  const { tags } = filters;
  console.log("filterss", tags)

  // using Redux-thunk
  useEffect(() => {
    dispatch(loadContentData());
  }, []);

  let content;
  if (contents.length) {
    content = contents.map((content) => (
      <BlogCard key={content.model} content={content} />
    ))
  }

  if (contents.length && (tags.length)) {
    {
      content = contents
        .filter((content) => {
          if (tags.length) {
            return tags.includes(content.tags)
          }
          return content;
        })
        .map((content) => (
          <BlogCard key={content.model} content={content} />
        ))
    }

  }

  const activeClass = "text-white bg-yellow-300 rounded-md uppercase";

  return (
    <div>
      <div className="blog-container container mx-auto">
        <div className="blogs-content grid grid-cols-8 items-start gap-5 font-noto">
          {/* blog sidebar */}
          <div className="blog-sidebar p-5 bg-white col-span-2 sticky top-10">
            <div className="my-3">
              <h3 className=" text-2xl mb-2 font-bold">
                <span className="text-yellow-500">Blogs</span> Page
              </h3>
              <div className="w-20 border-2 border-yellow-500 "></div>
            </div>

            <div className="blog-sidebar-content my-5">
              <h1 className="text-lg  mb-0 text-gray-800">Search by name</h1>
              <input
                type="text"
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4"
                placeholder="Search"
              />
            </div>
            <div className="blog-sidebar-content mb-5">
              <h1 className="text-lg  mb-0 text-gray-800">Sort by</h1>
              <select
                name=""
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4 cursor-pointer"
                id=""
              >
                <option value="">Recent Upload</option>
                <option value="">Last upload</option>
              </select>
            </div>
      {/*       <div className="blog-sidebar-content">
              <h1 className="text-lg  mb-0 text-gray-800">Categories</h1>
              <select
                name=""
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4 cursor-pointer"
                id=""
              >
                <option value="">All</option>
                <option value="">All</option>
                <option value="">All</option>
              </select>
            </div> */}
            <div className="blog-sidebar-content mt-5">
              <h1 className="text-lg  mb-0 text-gray-800">Tags</h1>
              <div className="my-4 flex flex-wrap gap-2 text-sm">
                <button onClick={() => dispatch(toggleTags('react'))}
                  className={`px-3 ${tags.includes('react') ? activeClass : null} text-gray-900 text-lg bg-gray-100 rounded-sm uppercase p-2 font-semibold cursor-pointer`}
                >
                  React.JS
                </button>
                <button onClick={() => dispatch(toggleTags('vue'))}
                  className={`px-3 ${tags.includes('vue') ? activeClass : null} text-gray-900 text-lg bg-gray-100 rounded-sm uppercase p-2 font-semibold cursor-pointer`}>
                  Vue.JS
                </button>
                <button onClick={() => dispatch(toggleTags('next.js'))}
                  className={`px-3 ${tags.includes('next.js') ? activeClass : null} text-gray-900 text-lg bg-gray-100 rounded-sm uppercase p-2 font-semibold cursor-pointer`}>
                  Next.JS
                </button>
                <button onClick={() => dispatch(toggleTags('angular.js'))}
                  className={`px-3 ${tags.includes('angular') ? activeClass : null} text-gray-900 text-lg bg-gray-100 rounded-sm uppercase p-2 font-semibold cursor-pointer`}>
                  Angular.JS
                </button>
              </div>
            </div>
          </div>
          {/* blog sidebar end */}


          <div className="blog-main col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-36">


            {/* <BlogCard /> */}
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
