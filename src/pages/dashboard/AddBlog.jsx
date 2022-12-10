import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addContentData from "../../redux/thunk/addContentData";


const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const content = {
      title: data.title,
      imageUrl: data.imageUrl,
      // status: data.status === "true" ? true : false,
      tags: data.tags,
      description: data.description,
    };
    console.log(content);
    dispatch(addContentData(content))
    reset();
  };

  return (
    <div className='flex justify-center items-center w-full h-full '>
      <form
        className='shadow-lg w-full p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-slate-300'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col justify-center w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input className="h-10" type='text' id='title' {...register("title")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='imageUrl'>
            Image Url
          </label>
          <input className="h-10" type='text' name='imageUrl' id='imageUrl' {...register("imageUrl")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='tags'>
            Tags
          </label>
          <select className="h-10" name='tags' id='tags' {...register("tags")}>
            <option value='react'>react</option>
            <option value='vue'>vue</option>
            <option value='next.js'>next.js</option>
          </select>
        </div>

        <div className='flex flex-col w-full '></div>
        <div className='flex flex-col w-full '>
          <label className='mb-2' htmlFor='description'>
            Description
          </label>
          <input
            className="h-36 w-full rounded-lg "
            type='text'
            name='description'
            id='description'
            {...register("description")}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
