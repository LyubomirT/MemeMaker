copyButton = document.getElementById("copyButton");
undoButton = document.getElementById("undoButton");
redoButton = document.getElementById("redoButton");
saveButton = document.getElementById("saveButton");
loadButton = document.getElementById("loadButton");
exportButton = document.getElementById("exportButton");

// initialize the canvas and elements
function init() {
    canvas = document.getElementById("canvas");
    elements = [];
  }
  
  // add a new text element to the canvas
  function addTextElement() {
    // TODO: implement function
  }
  
  // add a new image element to the canvas
  function addImageElement() {
    // TODO: implement function
  }
  
  // select an element on the canvas
  function selectElement(element) {
    // TODO: implement function
  }
  
  // deselect the currently selected element
  function deselectElement() {
    // TODO: implement function
  }
  
  // move the selected element by a given amount
  function moveSelectedElement(dx, dy) {
    // TODO: implement function
  }
  
  // rotate the selected element by a given angle
  function rotateSelectedElement(angle) {
    // TODO: implement function
  }
  
  // resize the selected element by a given amount
  function resizeSelectedElement(dw, dh) {
    // TODO: implement function
  }
  
  // crop the selected image element to a given size
  function cropSelectedElement(x, y, w, h) {
    // TODO: implement function
  }
  
  // show the menu for the selected element
  function showMenu() {
    // TODO: implement function
  }
  
  // hide the menu for the selected element
  function hideMenu() {
    // TODO: implement function
  }
  
  // handle mouse events on the canvas
  function handleMouseEvent(event) {
    // TODO: implement function
  }
  
  // initialize the app when the page is loaded
  window.addEventListener("load", function() {
    init();
  });