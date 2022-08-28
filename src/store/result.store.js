import { combine } from 'zustand/middleware';
import create from 'zustand';

const useResultState = create(
  combine(
    {
      results: { 1: '', 2: '', 3: '' },
    },
    set => ({
      setResults: (rank, id) =>
        set(state => {
          const newResult = { ...state.results };

          for (const key in newResult) {
            if (newResult[key] === id) {
              newResult[key] = '';
            }
          }
          newResult[rank] = id;
          return { results: newResult };
        }),
    }),
  ),
);

export default useResultState;
