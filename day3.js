function day3() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("day3");
  const data = sheet.getRange("A1:A1").getValue();

  const results = extract(data);
  const sum = results.reduce((a,b) => a + b, 0);

  console.log(sum);
 
}

function extract(data) {
  const regex = /mul\((\d+),(\d+)\)/g;
  let match;
  const results = [];

  while ((match = regex.exec(data)) !== null) {
    results.push(parseInt(match[1], 10) * parseInt(match[2], 10));
  }

  return results
}

