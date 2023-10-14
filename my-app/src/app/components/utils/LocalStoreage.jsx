// localStorageUtil.js

export const getSavedPeople = () => {
  const savedData = localStorage.getItem('savedPerson');
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
};
