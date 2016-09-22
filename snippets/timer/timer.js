new tabris.Button({
  layoutData: {centerX: 0, centerY: 0},
  text: "Press me!"
}).on("select", function(widget) {
  widget.set("text", "Please wait...");
  setTimeout(sayThanks, 2000, widget);
}).appendTo(tabris.ui.contentView);

function sayThanks(widget) {
  widget.set("text", "Thank you!");
}
