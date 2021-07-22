const getServerData = fetch(
  "https://23.javascript.pages.academy/keksobooking/data"
)
  .then((response) => {
    if (response.ok) {
      response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  });
console.log(getServerData);
export { getServerData };
