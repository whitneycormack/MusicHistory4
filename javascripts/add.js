"use strict";

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var listView = document.getElementById("list-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});
