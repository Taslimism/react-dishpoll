import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Users from '../data/user.json';

const initialValues = {
  username: '',
  password: '',
};

const Form = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    initialValues,
  });

  const submitHandler = data => {
    let userFound = false;
    Users.forEach(user => {
      if (user.username === data.username && user.password === data.password) {
        navigate('/poll');
        userFound = true;
      }
    });
    if (!userFound) {
      setError('usernotfound', { type: 'custom', message: 'Username and password do not match' });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="mt-12 pt-9 border-t-2 mx-12">
      <input
        {...register('username')}
        className="mb-9 w-full border py-2 px-2 rounded-md focus:outline-none"
        type="text"
        name="username"
        defaultValue={initialValues.username}
        placeholder="Username"
      />

      <input
        {...register('password')}
        className="mb-7 w-full py-2 px-2 border rounded-md focus:outline-none"
        defaultValue={initialValues.password}
        type="password"
        name="password"
        placeholder="Password"
      />
      <p className="text-red-500 mt-1 mb-2 text-center">
        {errors.password?.message || errors.username?.message || errors.usernotfound?.message}{' '}
      </p>
      <button type="submit" className="w-full mb-4 p-2 rounded-md  bg-purple-700 text-white">
        Login
      </button>
    </form>
  );
};

export default Form;
