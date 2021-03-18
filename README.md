# Extinction Event

We'll start at the uninteractive website that is our [starting point](http://extinction-event-starting-point.surge.sh/) and end up at this highly interactive (if not revolutionary) [web app](http://extinction-event-solution.surge.sh/).

In between, we'll be adding a fair amount of JavaScript to make that happen!

### Setup And Guidelines

- You should get familiar with the `index.html` file, as the tags in there are what you will need to hook into in order to query the elements we'll be adding interactivity to. You are ABSOLUTELY WELCOME to add IDs and classes to make your querying easier or just more in your own personal style, but you also do not need to.

- Similarly, you should get accustomed to what's in `style.css`. There's some Flexbox in there, which isn't the main focus of this page, but is an example of a simply-applied basic layout. You shouldn't change ANYTHING in there!

- But you could and should notice that there are two `transition` rules being applied. These make it so that when those rules are changed--`width` on an `img` or `opacity` on the `li`s in the `ul`--those changes happen over 2 seconds, producing a neat effect. Might `width` and `opacity` be the properties you want to change with JavaScript? They might!

- But all of your actual work should be in your `main.js` file. This is where you're going to work, and this is where you're going to play.

### How To Achieve Extinction - A Walkthrough

1. The first step is our `ol`. The `li`s in there should all have an event listener on them that give them a `line-through` effect on them when they are clicked. The solution here is following the same pattern we did before--query the element, make a function that affects that target, then tie them together with an event listener--but with two additional tricks:
   - We'll need to query ALL of the elements with `querySelectorAll`, which will return an array (or array-like collection) that we can loop through, putting the same event listener on EACH individual item in the collection. (Side note: you can solve this problem by putting an event listener on the `ul` or `li` or `div` parent element, and the event will be passed from the `li`/`img` up to its parent in a process called `bubbling`. This way, you don't have to loop. But then you have to do a bit more work to tell which element it happened to, and clicking the parent will ALSO trigger the event, which means more work as well. We'll say that KISS stands for Keep It Simple in Software in this case.)
   - We'll need to use `event` and its property `target` to figure out which element was actually clicked. Fortunately, the browser will be kind enough to pass the `event` object into our event listener functions, where we can take it in as a parameter if we need it. We haven't needed to do that before, and so while the browser has been passing it in with every call to an event listener, we've been ignoring it. The thing to keep in mind here is that `event.target` is ALWAYS going to be the item that was clicked.
2. Now that we've used those tools to get the first list to apply `line-through` when its items are clicked, we can do the same for the second list and `opacity`.
3. The third one is a little different, but basically the same. We're just using images instead of `li`s, and you can find them by their surrounding `div` instead of `ol`/`ul`.
4. But this last step, the Meteor Me button mass extinction, is hugely different. How do we affect ALL the items we've covered so far on one single button press? It's not actually _that_ different. We'll just have to have a function that, when run, loops through all three sets of elements, applying the correct effect to each set. You don't need the `event` object here, because you don't care WHICH element was interacted with; you're gonna affect them all. Then simply attach that function as an event listener on the button, and you're done!

And you're DONE.

### Stretch Goals

- Use `forEach` instead of a loop. [This is a pretty good in-depth article on `forEach`](https://appdividend.com/2018/09/12/javascript-foreach-example/), but you don't need to read the entire thing to use it!
- Make helper functions for your CSS changes. Right now, you may find yourself doing the `style` changes twice; once in the event listener on each item, and once in your "Meteor Me" button code. But you could write a helper function that takes in a node element and runs the `opacity` change (and one each for the other two!), and then call that on the element you want to change. It's not a huge win (Write Everything Twice, and that's exactly what we're doing), but it's a good exercise for when we DO need this kind of helper function.
