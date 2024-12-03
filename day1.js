function day1_part1() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("day1")
  const listA = sheet.getRange("A:A").getValues();
  const listB = sheet.getRange("B:B").getValues();
  const difference = listA.sort().map((num, idx) => num - listB.sort()[idx]);
  const distance = difference.reduce((a,b) => Math.abs(a) + Math.abs(b), 0);
  console.log(distance);
}

function day1_part2() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("day1")
  const lastRow = sheet.getLastRow();
  const listA = sheet.getRange(1,1,lastRow).getValues().map(row => row[0]);
  const listB = sheet.getRange(1,2,lastRow).getValues().map(row => row[0]);

  let sim = 0;
  listA.forEach( valA => sim += listB.filter(valB => valA == valB).length * valA)

  console.log(sim);
}
