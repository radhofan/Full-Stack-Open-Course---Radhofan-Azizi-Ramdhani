import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const addBlog = event => {
    event.preventDefault();
    createBlog(newBlog);
    setNewBlog({ title: '', author: '', url: '' });
  };

  return (
    <form onSubmit={addBlog}>
      <div>
        Title: <input id='title' name='title' value={newBlog.title} onChange={handleInputChange} />
      </div>
      <div>
        Author: <input id='author' name='author' value={newBlog.author} onChange={handleInputChange} />
      </div>
      <div>
        Url: <input id='url' name='url' value={newBlog.url} onChange={handleInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired
};

export default BlogForm;
