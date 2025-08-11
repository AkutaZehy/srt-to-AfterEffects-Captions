function timeToSeconds (timeString) {
  const [hours, minutes, seconds] = timeString.split(':');
  const [sec, millisec] = seconds.split('.');
  return (
    parseInt(hours, 10) * 3600 +
    parseInt(minutes, 10) * 60 +
    parseInt(sec, 10) +
    parseFloat(`0.${millisec}`)
  );
}

function srtToTxt (srtContent) {
  const lines = srtContent.split('\n').map(line => line.trim());
  const subtitles = [];
  let currentSubtitle = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!isNaN(line) && line !== '') {
      currentSubtitle = {};
    } else if (line.includes('-->')) {
      const [startTime, endTime] = line.split('-->').map(time => time.trim());
      currentSubtitle.start = timeToSeconds(startTime.replace(',', '.'));
      currentSubtitle.end = timeToSeconds(endTime.replace(',', '.'));
    } else if (line === '') {
      if (currentSubtitle.text) {
        subtitles.push(currentSubtitle);
      }
    } else {
      currentSubtitle.text = currentSubtitle.text
        ? `${currentSubtitle.text}\n${line}`
        : line;
    }
  }

  if (currentSubtitle.text) {
    subtitles.push(currentSubtitle);
  }

  return subtitles
    .map(sub => `${sub.start}||${sub.end}||${sub.text}`)
    .join('~~');
}