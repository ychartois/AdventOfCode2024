function day2() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("day2");
  const data = sheet.getDataRange().getValues();
  const results = data.map(row => isSafe(row.slice(1).map((value, index) => value? value - row[index]: "")));
  const onlySafe = results.filter(value => value);
  console.log(onlySafe.length);
}

function isSafe(line) {
  const noEmpty = line.filter( value => value !== "");
  const isSameDirection = noEmpty.every(val => val > 0) || noEmpty.every(val => val < 0);
  const isLevel3Max = noEmpty.every(val => Math.abs(val) < 4);
  return isSameDirection && isLevel3Max;
}

