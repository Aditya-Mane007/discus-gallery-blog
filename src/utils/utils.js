export const modifyTitle = (text) => {
  const words = text.split("-");

  let modifiedText = "";
  words.forEach((word) => {
    modifiedText += word.slice(0, 1).toUpperCase() + word.slice(1) + " ";
  });

  return modifiedText;
};
