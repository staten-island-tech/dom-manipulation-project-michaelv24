//The Document Object Model, or DOM, is essentially the elements you write into your HTML. DOMSelectors allow you to easily access your HTML in JS.

// DOMSelectors are objects that hold access to the DOM that you can call upon easily at any point in your code.
const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  nameInput: document.getElementById("name"),
  ratingInput: document.getElementById("rating"),
  imageInput: document.getElementById("imagelink"),
  list: document.getElementById("list"),
  remove: document.getElementsByClassName("remove"),
};

function removeDiv(e) {
  e.parentElement.remove();
}

function addPoster(name, rating, image) {
  const box = document.createElement("div");
  box.insertAdjacentHTML("afterbegin", `<p>Movie Rating: ${rating}</p>`);
  box.insertAdjacentHTML("afterbegin", `<p>Movie Name: ${name}</p>`);
  box.insertAdjacentHTML(
    "beforeend",
    `<img src=${image} class="movieimg"></img>`
  );
  box.className = "movieBox";
  box.insertAdjacentHTML("beforeend", `<button class="remove">Remove</button>`);
  DOMSelectors.list.insertAdjacentElement("afterbegin", box);
}

DOMSelectors.form.addEventListener("submit", function () {
  addPoster(
    DOMSelectors.nameInput.value,
    DOMSelectors.ratingInput.value,
    DOMSelectors.imageInput.value
  );
  DOMSelectors.form.reset();
  for (let btn of DOMSelectors.remove) {
    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});
