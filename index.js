(function() {
  "use strict";
  window.addEventListener("load", initialize);
  const tabs = ["landing", "about", "photos", "rip", "noelderado", "remeowkers"];
  //initializes all button presses
  function initialize() {
    $("aboutbtn").addEventListener("click", aboutPg);
    $("photobtn").addEventListener("click", photoPg);
    $("ripbtn").addEventListener("click", ripPg);
    $("caddy").addEventListener("click", caddy);
    $("cats").addEventListener("click", cats);
    $("remaker").addEventListener("click", backHome);
  }

  function backHome() {
    setPage("landing");
  }

  function setPage(desiredLocation) {
    for (let i = 0; i < tabs.length; i++) {
      if(tabs[i] === desiredLocation){
          $(tabs[i]).classList.remove("hidden");
      } else {
        $(tabs[i]).classList.add("hidden");
      }
    }
    if(desiredLocation === "landing") {
      qs("header").classList.remove("page");
    } else {
        qs("header").classList.add("page");
    }
    }

  function aboutPg() {
    setPage("about");
  }

  function photoPg() {
    setPage("photos");
  }

  function ripPg(){
    setPage("rip");
  }

  function caddy(){
    setPage("noelderado");
  }

  function cats() {
    setPage("remeowkers");
  }

  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id.
   */
  function $(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
