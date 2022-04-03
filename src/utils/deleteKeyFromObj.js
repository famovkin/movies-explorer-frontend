export const deleteKeyFromObj = (object, array) => {
  const result = Object.assign({}, object);
  for (let i = 0; i < array.length; i++) {
    delete result[array[i]];
  }
  return result;
};
