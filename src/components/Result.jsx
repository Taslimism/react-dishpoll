import axios from 'axios';
import { useEffect, useState } from 'react';
import useResultState from '../store/result.store';

const Result = () => {
  const [winner, setWinner] = useState({});
  const [otherContenders, setOtherContenders] = useState([]);
  const results = useResultState(state => state.results);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json',
        );
        data.forEach(item => {
          if (results[1] === item.id) {
            setWinner(prev => ({ ...prev, 1: item }));
          } else if (results[2] === item.id) {
            setWinner(prev => ({ ...prev, 2: item }));
          } else if (results[3] === item.id) {
            setWinner(prev => ({ ...prev, 3: item }));
          } else {
            setOtherContenders(prev => [...prev, item]);
          }
        });
      } catch (err) {
        // TODO: Handle error here
      }
    })();
  }, []);

  return (
    <div className="pl-5 pr-7 mt-4">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Winners</p>
        {Object.keys(winner).map(item => (
          <div
            key={winner[item]?.id}
            className="flex flex-col gap-2 border-1 border-slate-400 shadow"
          >
            <p>
              {winner[item].dishName} with{' '}
              {item === '1' ? '30 points' : item === '2' ? '20 points' : '10 points'}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 border border-t-purple-500 mt-8">
        <p className="text-xl font-bold">Other Strong Contenders</p>
        {otherContenders.map(item => (
          <p key={item.id}>{item.dishName}</p>
        ))}
      </div>
    </div>
  );
};

export default Result;
