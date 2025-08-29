1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById(id)

Returns a single element with the matching id.

Example: document.getElementById("myDiv").

getElementsByClassName(className)

Returns a live HTMLCollection of all elements with the given class.

Example: document.getElementsByClassName("myClass").

Note: Not an array; can loop with for or for...of.

querySelector(selector)

Returns the first element matching a CSS selector.

Example: document.querySelector(".myClass").

querySelectorAll(selector)

Returns a static NodeList of all elements matching a CSS selector.

Example: document.querySelectorAll("div.myClass").

NodeList can be looped using forEach.

2. How do you create and insert a new element into the DOM?
// 1. Create element
let newDiv = document.createElement("div");

// 2. Add content or attributes
newDiv.textContent = "Hello World";
newDiv.classList.add("myDivClass");

// 3. Insert into DOM
let parent = document.getElementById("container");
parent.appendChild(newDiv); // adds at the end
// OR
parent.insertBefore(newDiv, parent.firstChild); // adds at the beginning

3. What is Event Bubbling and how does it work?

Event Bubbling is the default way events propagate in the DOM.

When an event occurs on an element, it first triggers on that element, then bubbles up to its parent, grandparent, and so on until it reaches document.

Example:

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});


Clicking the button logs:

Child clicked
Parent clicked

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements.

The parent checks which child triggered the event using event.target.

Why useful:

Less memory usage

Works for dynamically added elements

Example:

document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target && e.target.matches("button.childBtn")) {
    console.log("Child button clicked:", e.target.textContent);
  }
});

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()

Stops the default browser action for an event.

Example: Prevent form submission:

form.addEventListener("submit", e => e.preventDefault());


stopPropagation()

Stops the event from bubbling (or capturing) further in the DOM.

Example: Prevent parent click handler from firing:

button.addEventListener("click", e => e.stopPropagation());