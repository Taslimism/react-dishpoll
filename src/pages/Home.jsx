import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import useSideBarState from '../store/sidebar.store';
import Main from '../components/Main';

const Home = () => {
  const setColor = useSideBarState(state => state.setColor);

  useEffect(() => {
    setColor(0);
  }, []);

  return (
    <div className="absolute top-0">
      <Header title="Poll" />
      <div className="grid grid-cols-12">
        <Sidebar />
        <div className="col-span-12 md:col-span-12 lg:col-span-10 h-[calc(100vh-80px)] border-l border-gray-450 overflow-y-auto">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
