var startTime, endTime;
const birthday = "11 Apr 2021"

function start() {
  startTime = new Date(birthday);
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  var minutes = Math.round(seconds / 60)
  var hours = Math.round(minutes / 60)
  var days = Math.round(hours / 24 - 1)
  var weeks = Math.round(days / 7)

  console.log(hours)
}

start()
end()