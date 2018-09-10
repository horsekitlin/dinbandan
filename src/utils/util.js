export const isExistInArray = (attr, array) => {
  const index = array.findIndex(a => a === attr);
  return index !== -1;
};
