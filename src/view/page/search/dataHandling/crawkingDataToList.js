const tierNumMapping = new Map([
  ["Iron", 0],
  ["Bronze", 1],
  ["Silver", 2],
  ["Gold", 3],
  ["Platinum", 4],
  ["Emerald", 5],
  ["Diamond", 6],
  ["Master", 7],
  ["Grandmaster", 8],
  ["Challenger", 9],
]);

export function FilterCrawlingData(str) {
  const res = str.replace('S1 ', '').split('\n');
  res.map((data, index) => {
    const string = data.split(' ');
    res[index] = string;
  })
  return res;
}
export function ChartCrawlingData(list) {
  const result = [];
  list.map((data, index) => {
    result[index] = { name: data[0], tier: data[1], tierNum: tierNumMapping.get(data[1]) };
  })

  return result.reverse();
}