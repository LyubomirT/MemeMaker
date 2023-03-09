copyButton = document.getElementById("copyButton");
undoButton = document.getElementById("undoButton");
redoButton = document.getElementById("redoButton");
saveButton = document.getElementById("saveButton");
loadButton = document.getElementById("loadButton");
exportButton = document.getElementById("exportButton");
addTextButton = document.getElementById("addTextButton");
addImageButton = document.getElementById("addImageButton");
addShapeButton = document.getElementById("addShapeButton");

// initialize the canvas and elements
function init() {
    canvas = document.getElementById("canvas");
    elements = [];
  }
  
// add a new text element to the canvas
function addTextElement() {
  console.log("Button clicked (Add Text)");
  // create a new div element with contentEditable set to true
  var textElement = document.createElement("div");
  textElement.contentEditable = true;
  textElement.classList.add("draggable");

  var textElementContent = document.createElement("p");
  textElementContent.style.resize = "both";
  textElementContent.style.overflow = "auto";
  textElementContent.innerText = "";
  textElement.appendChild(textElementContent);
  elements.push(textElement);

  // set the position and size of the element
  textElement.style.position = "absolute";
  textElement.style.left = "100px";
  textElement.style.top = "100px";
  textElement.style.minWidth = "80px";
  textElement.style.minHeight = "30px";
  textElement.style.width = "auto";
  textElement.style.height = "auto";

  // add the element to the canvas and the elements array
  canvas.appendChild(textElement);

  // add drag and drop event listeners to the element
  textElement.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", null);
    event.dataTransfer.setDragImage(this, 0, 0);
    this.classList.add("dragging");
  });

  textElement.addEventListener("dragend", function(event) {
    this.classList.remove("dragging");
  });

  // add mouse event listeners to the canvas
  canvas.addEventListener("mousedown", function(event) {
    // find the element that was clicked on
    var clickedElement = null;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].contains(event.target)) {
        clickedElement = elements[i];
        break;
      }
    }
    if (clickedElement) {
      // start dragging the element
      clickedElement.classList.add("dragging");
      var startX = event.clientX;
      var startY = event.clientY;
      var origX = parseInt(clickedElement.style.left);
      var origY = parseInt(clickedElement.style.top);

      function mousemove(event) {
        // calculate the new position of the element
        var newX = origX + event.clientX - startX;
        var newY = origY + event.clientY - startY;

        // update the position of the element
        clickedElement.style.left = newX + "px";
        clickedElement.style.top = newY + "px";
      }

      function mouseup(event) {
        // stop dragging the element
        clickedElement.classList.remove("dragging");
        canvas.removeEventListener("mousemove", mousemove);
        canvas.removeEventListener("mouseup", mouseup);
      }

      canvas.addEventListener("mousemove", mousemove);
      canvas.addEventListener("mouseup", mouseup);
    }
  });

  textElement.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  textElement.addEventListener("drop", function(event) {
    event.preventDefault();
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    this.style.left = x + "px";
    this.style.top = y + "px";
  });
}


// add a new image element to the canvas
function addImageElement() {
  // create a temporary file input element to select the image file
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  // add an event listener to the file input to handle the selected image file
  fileInput.addEventListener("change", function(event) {
    var file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      // create a new image element with the selected image as the source
      var imageElement = document.createElement("img");
      imageElement.src = URL.createObjectURL(file);
      imageElement.classList.add("draggable");

      // add the image element to the canvas and the elements array
      canvas.appendChild(imageElement);
      elements.push(imageElement);

      // set the position and size of the element
      imageElement.style.position = "absolute";
      imageElement.style.left = "100px";
      imageElement.style.top = "100px";
      imageElement.style.width = "200px";
      imageElement.style.height = "auto";

      // add drag and drop event listeners to the element
      imageElement.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", null);
        event.dataTransfer.setDragImage(this, 0, 0);
        this.classList.add("dragging");
      });

      imageElement.addEventListener("dragend", function(event) {
        this.classList.remove("dragging");
      });

      // add mouse event listeners to the canvas
      canvas.addEventListener("mousedown", function(event) {
        // find the element that was clicked on
        var clickedElement = null;
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].contains(event.target)) {
            clickedElement = elements[i];
            break;
          }
        }
        if (clickedElement) {
          // start dragging the element
          clickedElement.classList.add("dragging");
          var startX = event.clientX;
          var startY = event.clientY;
          var origX = parseInt(clickedElement.style.left);
          var origY = parseInt(clickedElement.style.top);

          function mousemove(event) {
            // calculate the new position of the element
            var newX = origX + event.clientX - startX;
            var newY = origY + event.clientY - startY;

            // update the position of the element
            clickedElement.style.left = newX + "px";
            clickedElement.style.top = newY + "px";
          }

          function mouseup(event) {
            // stop dragging the element
            clickedElement.classList.remove("dragging");
            canvas.removeEventListener("mousemove", mousemove);
            canvas.removeEventListener("mouseup", mouseup);
          }

          canvas.addEventListener("mousemove", mousemove);
          canvas.addEventListener("mouseup", mouseup);
        }
      });

      imageElement.addEventListener("dragover", function(event) {
        event.preventDefault();
      });

      imageElement.addEventListener("drop", function(event) {
        event.preventDefault();
        var x = event.clientX - canvas.offsetLeft;
        var y = event.clientY - canvas.offsetTop;
        this.style.left = x + "px";
        this.style.top = y + "px";
      });

      // select the new element
      selectElement(imageElement);
    }
  });

  // simulate a click on the file input to open the file selection dialog
  fileInput.click();
}

// show the menu for the selected element
function showMenu() {
  // TODO: implement function
}

// hide the menu for the selected element
function hideMenu() {
  // TODO: implement function
}

// add a "selected" state to the element and show the menu
function SelectElement(element) {
  // remove the "selected" state from all elements
  elements.forEach(function(el) {
    el.classList.remove("selected");
  });
  
  // add the "selected" state to the clicked element
  element.classList.add("selected");
  element.style.borderColor = "#7096e6";
  
  // show the menu
  showMenu();
}

// remove the "selected" state from the element and hide the menu
function DeselectElement(element) {
  // remove the "selected" state from the element
  element.classList.remove("selected");
  element.style.borderColor = "#dfdfdf";
  
  // hide the menu
  hideMenu();
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
function cropSelectedImage(x, y, w, h) {
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

addTextButton.addEventListener("click", addTextElement);
addImageButton.addEventListener("click", addImageElement);

canvas.addEventListener("mousedown", function(event) {
  // find the element that was clicked on
  var clickedElement = null;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].contains(event.target)) {
      clickedElement = elements[i];
      break;
    }
  }
  if (clickedElement) {
    // select the element
    SelectElement(clickedElement);

    // start dragging the element
    clickedElement.classList.add("dragging");
    var startX = event.clientX;
    var startY = event.clientY;
    var origX = parseInt(clickedElement.style.left);
    var origY = parseInt(clickedElement.style.top);

    function mousemove(event) {
      // calculate the new position of the element
      var newX = origX + event.clientX - startX;
      var newY = origY + event.clientY - startY;

      // update the position of the element
      clickedElement.style.left = newX + "px";
      clickedElement.style.top = newY + "px";
    }

    function mouseup(event) {
      // stop dragging the element
      clickedElement.classList.remove("dragging");
      canvas.removeEventListener("mousemove", mousemove);
      canvas.removeEventListener("mouseup", mouseup);
    }

    canvas.addEventListener("mousemove", mousemove);
    canvas.addEventListener("mouseup", mouseup);
  } else {
    // deselect the current element if the user clicked outside of it
    DeselectElement(document.querySelector(".selected"));
  }
});
