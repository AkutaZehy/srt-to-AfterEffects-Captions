const fs = require('fs');

function srtToJson(srtContent) {
  const lines = srtContent.trim().split('\n');
  const result = [];
  let currentEntry = [];

  for (const line of lines) {
    if (line.trim() === '') {
      if (currentEntry.length === 3) {
        const [index, timeRange, text] = currentEntry;
        const [startTime, endTime] = timeRange.split(' --> ');

        const formattedStartTime = startTime.replace(',', '.');
        const formattedEndTime = endTime.replace(',', '.');

        result.push([text, formattedStartTime, formattedEndTime]);
      }
      currentEntry = [];
    } else {
      currentEntry.push(line.trim());
    }
  }

  if (currentEntry.length === 3) {
    const [index, timeRange, text] = currentEntry;
    const [startTime, endTime] = timeRange.split(' --> ');

    const formattedStartTime = startTime.replace(',', '.');
    const formattedEndTime = endTime.replace(',', '.');

    result.push([text, formattedStartTime, formattedEndTime]);
  }

  return JSON.stringify(result, null, 2);
}

const srtExample = `
1
00:00:00,000 --> 00:00:02,000
caption

2
00:00:03,000 --> 00:00:05,000
caption

3
00:00:06,000 --> 00:00:08,000
caption

`;

const convertedJson = srtToJson(srtExample);

const outputFile = 'output.txt';

fs.writeFileSync(outputFile, convertedJson, 'utf-8');

console.log(`conversion completed: ${outputFile}`);