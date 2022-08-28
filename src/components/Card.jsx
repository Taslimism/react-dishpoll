import classNames from 'classnames';
import useResultState from '../store/result.store';

const Card = ({ data: { image, dishName, description, id } }) => {
  const { results, setResults } = useResultState(state => ({
    results: state.results,
    setResults: state.setResults,
  }));

  return (
    <div className="flex flex-col drop-shadow-md bg-white w-52 cursor-pointer">
      <div className="flex-1">
        <img className="w-52" src={image} alt="card" />
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4">
        <p className="font-bold text-purple-700">{`${dishName}`}</p>
        <p className="font-italic text-sm">{description}</p>
      </div>
      <div className="p-4">
        <button
          onClick={() => {
            setResults(1, id);
          }}
          type="button"
          className={classNames(
            `px-1 border border-black ${results[1] === id ? 'bg-purple-700' : ''} `,
          )}
        >
          1
        </button>
        <button
          onClick={() => {
            setResults(2, id);
          }}
          type="button"
          className={classNames(
            `mx-1 px-1 border border-black ${results[2] === id ? 'bg-purple-700' : ''} `,
          )}
        >
          2
        </button>

        <button
          onClick={() => {
            setResults(3, id);
          }}
          type="button"
          className={classNames(
            `px-1 border border-black ${results[3] === id ? 'bg-purple-700' : ''} `,
          )}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default Card;
