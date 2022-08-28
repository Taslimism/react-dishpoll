import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

// TODO : Add pagination
const GridView = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json',
      );
      setMenu(data);
    })();
  }, []);

  return (
    <>
      <p className="text-xl py-4 font-bold pl-5">Click on 3 dishes to rank them</p>
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 mx-5 gap-y-8 mb-10 pt-4 ">
        {menu.map(each => (
          <Card key={each.id} data={each} />
        ))}
      </div>
    </>
  );
};

export default GridView;
