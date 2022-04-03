export const deleteKeyFromObj = (object, keyName) => {
  const result = Object.assign({}, object);
  delete result[keyName];

  return result;
};
