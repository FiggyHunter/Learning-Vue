export default function nextElementInList(list, value) {
  return list[list.indexOf(value) + 1] || list[0];
}
