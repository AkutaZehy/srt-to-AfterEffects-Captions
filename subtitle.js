var enableEndTime = true;

var subtitles = [
  [
    "caption",
    "00:00:00",
    "00:00:02.00"
  ],
  [
    "caption",
    "00:00:03",
    "00:00:05.00"
  ],
  [
    "caption",
    "00:00:06",
    "00:00:08.00"
  ]
];
var currentTime = time;
var currentSubtitle = "";

for (var i = 0; i < subtitles.length; i++) {
  var subtitleText = subtitles[i][0];
  var startTimeString = subtitles[i][1];
  var endTimeString = subtitles[i][2];

  var startTimeParts = startTimeString.split(":");
  var startTimeInSeconds = parseFloat(startTimeParts[0]) * 3600 + parseFloat(startTimeParts[1]) * 60 + parseFloat(startTimeParts[2]);

  var endTimeParts = endTimeString.split(":");
  var endTimeInSeconds = parseFloat(endTimeParts[0]) * 3600 + parseFloat(endTimeParts[1]) * 60 + parseFloat(endTimeParts[2]);

  if (currentTime >= startTimeInSeconds) {
    if (enableEndTime && currentTime < endTimeInSeconds) {
      currentSubtitle = subtitleText;
    } else if (!enableEndTime) {
      currentSubtitle = subtitleText;
    }
  }
}

currentSubtitle;