
## What does HTML5 provide for semantic forms?

* fieldset - group related elements in a form
* label -  defines a label for an `<input>` element.

## How do you show if form data is invalid with HTML5?

[source] (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation)


## What event can update a page after a user enters text in an input, then tabs to the next field?

* blur vs change
  * blur - sent when an element loses focus. [source](https://api.jquery.com/blur/)
  * change - sent when an elements value changes.  [source](https://api.jquery.com/change/)


* other events
  * keyup - sent when the user releases a key on the keyboard. [source](https://api.jquery.com/keyup/)
  * click - sent when the mouse pointer is over the element, and the mouse button is pressed and released. [source](https://api.jquery.com/click/)

## What is the relationship between Markdown and HTML?

Markdown is a lightweight markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name.

## What’s the relationship between JSON and JavaScript objects?

[source] (http://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)

* JSON is a textual format
  * quotes are mandatory in JSON

* Javascript is a language format

Example:

```
// JSON:
{ "foo": "bar" }

// Object literal:
var o = { foo: "bar" };
```

## How can a JS object be transformed into JSON?

```
var jsonstring = JSON.stringify(obj);
```

## How can JSON be transformed into a JS object.

```
var obj = JSON.parse(jsonstring);
```

## How do you keep a form submission from reloading the page?

```
$("#form_id").submit(function(e) {
    e.preventDefault();
});
```



## vw and vh

[source](https://css-tricks.com/viewport-sized-typography/)

One unit on any of the three values is 1% of the viewport axis. "Viewport" == browser window size == window object. If the viewport is 40cm wide, 1vw == 0.4cm.

For use with `font-size`, I guess it's one "letter" that takes on that size, but as we know, in non-mono-spaced fonts the width of a letter is rather arbitrary.

```
1vw = 1% of viewport width
1vh = 1% of viewport height
1vmin = 1vw or 1vh, whichever is smaller
1vmax = 1vw or 1vh, whichever is larger
```

[caniuse](http://caniuse.com/#feat=viewport-units)
