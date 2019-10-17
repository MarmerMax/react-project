export const setItem = (key, value) => {
  const serializedValue = JSON.stringify(value);
  if(!serializedValue){
    return;
  }
  localStorage.setItem(key, serializedValue);
};

export const getItem = (key) => {
  const deserializedValue = localStorage.getItem(key);
  if(!deserializedValue){
    return;
  }
  return JSON.parse(deserializedValue);
};