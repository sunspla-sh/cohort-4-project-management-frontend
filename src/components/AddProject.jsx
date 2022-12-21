import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const updateTitle = e => setTitle(e.target.value)
  const updateDescription = e => setDescription(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/projects`, {
      title,
      description
    }, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        navigate('/projects')
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <h3>Add Projects</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input value={title} onChange={updateTitle} />
        <label>Description</label>
        <input value={description} onChange={updateDescription} />
        <button>Create Project</button>
      </form>
    </div>
  );
};

export default AddProject;