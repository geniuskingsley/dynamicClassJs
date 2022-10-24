/**
 *
 * @Genius
 */

"use strict";

function makeClass(phrase) {
  return class {
    greet() {
      console.log(phrase);
    }
  };
}

let User = makeClass("Hello, Genius");
new User().greet(); //Hello, Genius
