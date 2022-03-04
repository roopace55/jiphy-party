console.log("Let's get this party started!");

const search = document.querySelector("#search");
const searchItem = document.getElementById("searchItem").value;
const $gifArea = $("#gif-area");

async function searchGif(searchItem) {
  let res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${searchItem}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  console.log(res);
}

search.addEventListener("click", function (e) {
  e.preventDefault();
  searchGif();
});

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
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
