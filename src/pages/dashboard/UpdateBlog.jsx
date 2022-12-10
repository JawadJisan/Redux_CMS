import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import addContentData from '../../redux/thunk/addContentData';

const UpdateBlog = () => {

  const { register, handleSubmit, reset } = useForm();
  // const dispatch = useDispatch();
  const { id } = useParams();
  const [content, setContent] = useState({});
  useEffect(() => {
    const url = `https://redux-assignment-server.onrender.com/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])


  const submit = (data) => {
    const content = {
      title: data.title,
      imageUrl: data.imageUrl,
      tags: data.tags,
      description: data.description,
    };
    console.log(content);
    // dispatch(addContentData(content))
    fetch(`https://redux-assignment-server.onrender.com/product/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(content)
    }).then(res => res.json())
      .then(data => console.log(data))
    reset();
  };



  return (
    <div className='flex mt-10 justify-center items-center w-full h-full '>
      <form
        className='shadow-lg w-full p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-slate-300'
        onSubmit={handleSubmit(submit)}
      >
        <p className='flex flex-col w-full p-2 m-2 text-center text-xl font-semibold bg-green-200 rounded-xl' >Update Content</p>

        <div className='flex flex-col justify-center w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input
            contenteditable={true}
            placeholder={content?.title}
            required className="h-10" type='text' id='title' {...register("title")}

          />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='imageUrl'>
            Image Url
          </label>
          <input required className="h-10" type='text' name='imageUrl' id='imageUrl' {...register("imageUrl")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='tags'>
            Tags
          </label>
          <select required className="h-10" name='tags' id='tags' {...register("tags")}>
            <option value='react'>react</option>
            <option value='vue'>vue</option>
            <option value='next.js'>next.js</option>
          </select>
        </div>

        <div className='flex flex-col w-full '>
          <label className='mb-2' htmlFor='description'>
            Description
          </label>
          <input
            required
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

export default UpdateBlog;