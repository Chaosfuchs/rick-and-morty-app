import create from 'zustand';

const useStore = create(set => {
  return {
    fetchedCharacters: [null],
    fetchSomething: url => {
      if (url) {
        setLoading(true);
        setError(null);
        const characters = response.json();
        fetch(url)
          .then(json => {
            setTimeout(() => {
              setData(json);
              setLoading(false);
            }, 1500);
            set({ fetchedCharacters: json });
          })
          .catch(error_ => {
            setError(error_);
            setLoading(false);
          });
      }
    },
  };
});

export default useStore;
