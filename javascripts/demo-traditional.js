$(document).ready(function() {

  var clip = new ZeroClipboard($("#d_clip_button"));

  clip.on("load", function (client) {
    debugstr("Flash movie loaded and ready. Version: " + ZeroClipboard.version);
		var inIframe = !$("iframe")[0];
    client.on("complete", function (client, args) {
			if (inIframe) {
				window.parent.postMessage(args.text, "*");
			}
			debugstr("Copied text to clipboard: " + args.text);
    });
  });

  clip.on("noFlash", function (client) {
    $(".demo-area").hide();
    debugstr("Your browser has no Flash.");
  });

  clip.on("wrongFlash", function (client, args) {
    $(".demo-area").hide();
    debugstr("Flash 10.0.0+ is required but you are running Flash " + args.flashVersion.replace(/,/g, "."));
  });


  // jquery stuff (optional)
  function debugstr(text) {
    $("#d_debug").append($("<p>").text(text));
  }

  $("#clear-test").on("click", function () {
    $("#fe_text").val("Copy me!");
    $("#testarea").val("");
  });
	
	window.addEventListener("message", receiveMessage, false);
	function receiveMessage(event)
	{
			debugstr("Message received here from: " + event.source);
			debugstr("Message was: " + event.data);
	};
});