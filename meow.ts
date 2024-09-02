import { Jimp } from "jimp";
import fs from "fs";

const IMAGE_DIR = "./images/";
const IMAGE_TYPES = ["indoors", "outdoors", "studio"];

const allFolders = fs.readdirSync(IMAGE_DIR);

const run = async () => {
  for (const folder of allFolders) {
    if (folder === ".DS_Store") {
      continue;
    }
    for (const type of IMAGE_TYPES) {
      const path = `${IMAGE_DIR}${folder}/${type}.png`;
      const image = await Jimp.read(path);
      image.resize({ w: 512, h: 512 });
      fs.mkdirSync(`${IMAGE_DIR}${folder}/small`, { recursive: true });
      const newPath = `${IMAGE_DIR}${folder}/small/${type}.jpg`;
      await image.write(newPath as any);
    }
  }
};

// run();

const moveLargeImages = async () => {
  for (const folder of allFolders) {
    if (folder === ".DS_Store") {
      continue;
    }
    for (const type of IMAGE_TYPES) {
      const currentPath = `${IMAGE_DIR}${folder}/${type}.png`;
      const newPath = `${IMAGE_DIR}${folder}/large/${type}.png`;

      fs.mkdirSync(`${IMAGE_DIR}${folder}/large`, { recursive: true });
      fs.renameSync(currentPath, newPath);
    }
  }
};

// moveLargeImages();

const updateDataWithNewImages = async () => {
  let data = JSON.parse(fs.readFileSync("./data/v1.json", "utf-8"));

  for (let i = 0; i < data.length; i++) {
    data[i].images = {
      small: {
        indoors: `https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/${data[i].id}/small/indoors.jpg`,
        outdoors: `https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/${data[i].id}/small/outdoors.jpg`,
        studio: `https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/${data[i].id}/small/studio.jpg`,
      },
      large: {
        indoors: `https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/${data[i].id}/large/indoors.png`,
        outdoors: `https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/${data[i].id}/large/outdoors.png`,
        studio: `https://raw.githubusercontent.com/chase-manning/open-dog-registry/main/images/${data[i].id}/large/studio.png`,
      },
    };
  }

  fs.writeFileSync("./data/v1.json", JSON.stringify(data, null, 2));
};

updateDataWithNewImages();
