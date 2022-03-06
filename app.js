console.log("Let's get this party started!");

const search = document.querySelector("#search");
const searchItem = document.getElementById("searchItem");
const $gifArea = $("#gif-area");

async function searchGif(searchItem) {
  let res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${searchItem}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  console.log(res);
  return res;
}

search.addEventListener("click", async function (e) {
  e.preventDefault();
  const res = await searchGif(searchItem.value);
  addGif(res);
});

function addGif(res) {
  console.log(res.data.data);
  let numResults = res.data.data.length;
  console.log(numResults);

  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
  //   var list = document.querySelector("#ul");
  //   var li = document.createElement("li");
  //   list.appendChild(li);
}

function removeGif() {
  const remove = document.querySelector("#remove");
  remove.addEventListener("click", function (e) {
    e.preventDefault();
    while (list.hasChildNodes()) {
      list.removeChild("li");
    }
  });
}
