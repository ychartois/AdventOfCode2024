function day1() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("day1")
  const listA = sheet.getRange("A:A").getValues();
  const listB = sheet.getRange("B:B").getValues();
  const difference = listA.sort().map((num, idx) => num - listB.sort()[idx]);
  const distance = difference.reduce((a,b) => Math.abs(a) + Math.abs(b), 0);
  console.log(distance);
}
