var data = value;

var subtitles = [];
try {
  var entries = data.split("~~");
  for (var i = 0; i < entries.length; i++) {
    var parts = entries[i].split("||");
    if (parts.length !== 3) {
      throw new Error("Invalid subtitle format");
    }
    subtitles.push({
      start: parseFloat(parts[0]),
      end: parseFloat(parts[1]),
      text: parts[2]
    });
  }
} catch (e) {
  value;
}

var currentTime = time;

var currentSubtitle = "";

for (var i = 0; i < subtitles.length; i++) {
  var subtitle = subtitles[i];
  if (currentTime >= subtitle.start && currentTime < subtitle.end) {
    currentSubtitle = subtitle.text;
    break;
  }
}

currentSubtitle || value;