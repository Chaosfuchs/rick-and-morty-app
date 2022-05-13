import create from 'zustand';

const useStore = create(set => {
  return {
    fetchedCharacters: null,
    error: null,
    loading: true,
    fetchSomething: url => {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            set({ fetchedCharacters: json, loading: false });
          }, 1500);
        })
        .catch(error_ => {});
    },
  };
});

export default useStore;
