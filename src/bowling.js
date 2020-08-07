const parseBall = value => value === "-" ? 0 : +value;
const calculateSpare = (i, arr) => 10 + parseBall(arr[i+1].split("")[0])
const sumPair = (value, i, arr) => {
  if(i === 10) return 0;

  const values = value.split("")

  if (values[1] === "/") return calculateSpare(i, arr);

  return values
    .reduce((acc, symbol) => acc + parseBall(symbol), 0)
}

const calculateScore = (frames) => frames
  .split("|")
  .filter(value => value)
  .map(sumPair)
  .reduce((acc, n) => acc + n)

export default calculateScore;