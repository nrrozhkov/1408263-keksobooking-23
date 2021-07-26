const getArticles = (onSuccess, onError) => fetch('https://23.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((json) => {
    onSuccess(json);
  })
  .catch((err) => {
    onError(err);
  });
 
export {getArticles};
