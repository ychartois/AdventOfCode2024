function day3() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("day3");
  const data = sheet.getRange("A1:A1").getValue();

  const results1 = extract_part1(data);
  const sum1 = results1.reduce((a,b) => a + b, 0)
  console.log(sum1);

  const results2 = extract_part2(data);
  const sum2 = results2.reduce((a,b) => a + b, 0)
  console.log(sum2);
}

function extract_part1(data) {
  const regex = /mul\((\d+),(\d+)\)/g;
  let match;
  const results = [];

  while ((match = regex.exec(data)) !== null) {
    results.push(parseInt(match[1], 10) * parseInt(match[2], 10));
  }

  return results
}

function extract_part2(data) {
  const regex = /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g;
  let match;
  let isEnable = true;
  const results = [];

  while ((match = regex.exec(data)) !== null) {
    if (match[0] === 'do()') {isEnable = true; continue;}
    if (match[0] === 'don\'t()') {isEnable = false; continue;}  
    if (isEnable) {
      results.push(parseInt(match[1], 10) * parseInt(match[2], 10));
    }
  }
  return results

}

