// 1. The first step is our `ol`. The `li`s in there should all have an event listener on them that
// give them a `line-through` effect on them when they are clicked.

// We'll need to query ALL of the elements with `querySelectorAll`
// which will return an array (or array-like collection) that we can loop through, putting the same
// event listener on EACH individual item in the collection.
const firstList = document.querySelectorAll("ol li");

function lineThrough(event) {
  // We'll need to use `event` and its property `target` to figure out which element was actually clicked.
  event.target.style.textDecoration = "line-through";
}

for (const item of firstList) {
  item.addEventListener("click", lineThrough);
}

// Fortunately, the browser will be kind enough to pass the `event` object into our event listener
// functions, where we can take it in as a parameter if we need it. We haven't needed to do that before,
// and so while the browser has been passing it in with every call to an event listener, we've been
// ignoring it. The thing to keep in mind here is that `event.target` is ALWAYS going to be the item
// that was clicked.

// 2. Now that we've used those tools to get the first list to apply `line-through` when its items
// are clicked, we can do the same for the second list and `opacity`.

const secondList = document.querySelectorAll("ul li");

function transparent(event) {
  event.target.style.opacity = 0;
}

for (const item of secondList) {
  item.addEventListener("click", transparent);
}

// 3. The third one is a little different, but basically the same. We're just using images instead
// of `li`s, and you can find them by their surrounding `div` instead of `ol`/`ul`.

const pics = document.querySelectorAll("#row img");

function poofGone(event) {
  event.target.style.width = "0px";
}

for (const picture of pics) {
  picture.addEventListener("click", poofGone);
}

// 4. But this last step, the Meteor Me button mass extinction, is hugely different. How do we
// affect ALL the items we've covered so far on one single button press? It's not actually _that_
// different. We'll just have to have a function that, when run, loops through all three sets of
// elements, applying the correct effect to each set. You don't need the `event` object here,
// because you don't care WHICH element was interacted with; you're gonna affect them all. Then
// simply attach that function as an event listener on the button, and you're done!

// <button id="destroy-all">METEOR ME</button>
const meteorMe = document.querySelector("#destroy-all");

function massExtinction() {
  for (const item of firstList) {
    item.style.textDecoration = "line-through";
  }

  for (const item of secondList) {
    item.style.opacity = 0;
  }

  for (const picture of pics) {
    picture.style.width = "0px";
  }
}

meteorMe.addEventListener("click", massExtinction);
