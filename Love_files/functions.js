/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 60);
		});
		return this;
	};
})(jQuery);


function love() {
  var a_idx = 0;
  $("#btn1").click(function(){
    location.href = "Letter.html"
  });

  $("#btn2").click(function(){
  var a =  Array("苍井空","波多野结衣");
  if(a_idx <= a.length){
    $("ul").prepend(text(a[a_idx]));
    a_idx = a_idx+1;
    }
    if(a_idx > a.length) alert("我是一个消息框！");
  });
};

