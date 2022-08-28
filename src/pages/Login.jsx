import Form from '../components/Form';
import hero from '../assets/login.svg';

const Login = () => (
  <div className="flex items-center w-screen h-screen sm:flex-col md:flex-row">
    <div className="mx-auto">
      <img src={hero} alt="decorative icon" />
    </div>
    <div className="mx-auto w-[36%] h-[76%] pt-14 px-14 border-2 border-gray-300 rounded-[65px]">
      <div className="font-medium text-2xl">
        <button
          type="button"
          className={`mr-4 after:content-[''] after:block 'after:bg-[#1A3B58]'
          after:w-4 after:h-1 after:rounded-3xl`}
        >
          Log In
        </button>
      </div>
      <Form />
    </div>
  </div>
);

export default Login;
