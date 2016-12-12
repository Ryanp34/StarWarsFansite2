title = $("#title");
var isBlurred = true;
var index = 0;
var titles = [
  "Star Wars",
  "Episode",
  "VIII",
  "The Legacy Continues",

];
var titlesLength = titles.length;

var swapTitle = function() {
  if (isBlurred) {
    $(title).text(titles[index]);
    $(title).addClass("unblur");
    isBlurred = !isBlurred;
  }
  else {
    $(title).removeClass("unblur");
    isBlurred = !isBlurred;
  }
  index++;
  if (index > titlesLength) {
    index = 0;
  }
  render();
};

function render() {
  setTimeout(swapTitle, 2000);
}

$(document).ready(function(){ 
  render();
});