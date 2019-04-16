function loadImages (Parameter) {
  var sources = Parameter.loadArr;
  var loadingPercent = "";
  var count = 0;
  var images = {};
  var imgNum = sources.length;
  for (var src in sources) {
    var path = src;
    images[path] = new Image();
    images[path].onload = function () {
      count++;
      if (count >= imgNum) {
        if (Parameter.complete) {
          Parameter.complete(images);
        }
      }
    };
    images[path].onerror = function () {
      count++;
      if (count >= imgNum) {
        if (Parameter.complete) {
          Parameter.complete(images)
        }
      }
    };
    images[path].src = sources[path]
  }
}