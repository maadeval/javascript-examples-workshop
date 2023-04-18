function getEl(list, index) {
  if (list) {
    if (index !== undefined && index !== null) {
      if (index > 0 && index < list.length) {
        return list[index];
      }
    }
    return null;
  }
}
const lista = [1, 2, 3];
