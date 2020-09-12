var clock = (function () {
  var createClock = function () {
    var appEl = (document.getElementById("app").innerHTML = "Hello World!"); // test

    clockFn();
  };

  var clockFn = function () {
    console.log("clock fn called!");
    var sec = 0;
    var min = 0;

    var countSec = function () {
      sec = (sec % 60) + 1;
      console.log("sec: " + sec);
    };

    var countMin = function () {
      min = (min % 60) + 1;
      console.log("min: " + min);
    };

    var initSec = setInterval(countSec, 1000);
    var initMin = setInterval(countMin, 60000);
    initSec();
    initMin();
  };

  return {
    createClock: createClock
  };
})();
