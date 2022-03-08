export const loadImage = async (url) => {
  const image = new Image();
  return new Promise((resolve, reject) => {
    image.addEventListener("load", () => {
      resolve(image);
    });

    image.addEventListener("error", () => {
      reject();
    });
    image.src = url;
  });
};

export const loadLevel = async (name) => {
  const response = await fetch(`levels/${name}.json`);
  return await response.json();
};
