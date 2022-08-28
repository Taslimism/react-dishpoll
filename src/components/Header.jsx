import logo from '../assets/logo.png';

const Header = ({ title }) => (
  <header className="grid grid-cols-12 h-20  border-b border-gray-450 relative w-screen">
    <div className="flex items-center col-span-2 pl-2 lg:pl-7 self-center">
      <img className="w-16 lg:w-24" src={logo} alt="logo" />
    </div>
    <div className="flex justify-between items-center col-span-10 border-l border-gray-450">
      <div className="pl-5">
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="mr-7">
        <button type="button">
          <p className="font-medium text-sm">Profile</p>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
