const data = require("../data/v1.json");
const fs = require("fs");

const IMAGE_TYPES = ["indoors", "outdoors", "studio"];
const IMAGE_SIZES = ["small", "large"];

test("has some data", () => {
  expect(data.length).toBeGreaterThan(0);
});

test("there are no missing data points", () => {
  for (const item of data) {
    const { id, general, physical, behavior, care, images } = item;

    // Test ID
    expect(id).toBeDefined();
    expect(typeof id).toBe("string");

    // Test General Information
    expect(general.name).toBeDefined();
    expect(typeof general.name).toBe("string");
    expect(general.group).toBeDefined();
    expect(typeof general.group).toBe("string");
    expect(general.personalityTraits).toBeDefined();
    expect(Array.isArray(general.personalityTraits)).toBe(true);
    expect(general.personalityTraits.length).toBe(3);
    expect(general.shortDescription).toBeDefined();
    expect(typeof general.shortDescription).toBe("string");
    expect(general.longDescription).toBeDefined();
    expect(typeof general.longDescription).toBe("string");
    expect(general.popularity).toBeDefined();
    expect(typeof general.popularity).toBe("number");
    expect(general.height).toBeDefined();
    expect(typeof general.height).toBe("number");
    expect(general.weight).toBeDefined();
    expect(typeof general.weight).toBe("number");
    expect(general.lifespan).toBeDefined();
    expect(typeof general.lifespan).toBe("number");

    // Test Physical Characteristics
    expect(physical.size).toBeDefined();
    expect(typeof physical.size).toBe("number");
    expect(physical.lifespan).toBeDefined();
    expect(typeof physical.lifespan).toBe("number");
    expect(physical.droolingFrequency).toBeDefined();
    expect(typeof physical.droolingFrequency).toBe("number");
    expect(physical.coatStyle).toBeDefined();
    expect(typeof physical.coatStyle).toBe("string");
    expect(physical.coatTexture).toBeDefined();
    expect(typeof physical.coatTexture).toBe("string");
    expect(physical.coatLength).toBeDefined();
    expect(typeof physical.coatLength).toBe("number");
    expect(physical.doubleCoat).toBeDefined();
    expect(typeof physical.doubleCoat).toBe("boolean");

    // Test Behavioral Traits
    expect(behavior.familyAffection).toBeDefined();
    expect(typeof behavior.familyAffection).toBe("number");
    expect(behavior.childFriendly).toBeDefined();
    expect(typeof behavior.childFriendly).toBe("number");
    expect(behavior.dogSociability).toBeDefined();
    expect(typeof behavior.dogSociability).toBe("number");
    expect(behavior.friendlinessToStrangers).toBeDefined();
    expect(typeof behavior.friendlinessToStrangers).toBe("number");
    expect(behavior.playfulness).toBeDefined();
    expect(typeof behavior.playfulness).toBe("number");
    expect(behavior.protectiveInstincts).toBeDefined();
    expect(typeof behavior.protectiveInstincts).toBe("number");
    expect(behavior.adaptability).toBeDefined();
    expect(typeof behavior.adaptability).toBe("number");
    expect(behavior.barkingFrequency).toBeDefined();
    expect(typeof behavior.barkingFrequency).toBe("number");

    // Test Care Requirements
    expect(care.sheddingAmount).toBeDefined();
    expect(typeof care.sheddingAmount).toBe("number");
    expect(care.groomingFrequency).toBeDefined();
    expect(typeof care.groomingFrequency).toBe("number");
    expect(care.exerciseNeeds).toBeDefined();
    expect(typeof care.exerciseNeeds).toBe("number");
    expect(care.mentalStimulationNeeds).toBeDefined();
    expect(typeof care.mentalStimulationNeeds).toBe("number");
    expect(care.trainingDifficulty).toBeDefined();
    expect(typeof care.trainingDifficulty).toBe("number");

    // Test Large Images
    expect(images.large.indoors).toBeDefined();
    expect(typeof images.large.indoors).toBe("string");
    expect(images.large.outdoors).toBeDefined();
    expect(typeof images.large.outdoors).toBe("string");
    expect(images.large.studio).toBeDefined();
    expect(typeof images.large.studio).toBe("string");

    // Test Small Images
    expect(images.small.indoors).toBeDefined();
    expect(typeof images.small.indoors).toBe("string");
    expect(images.small.outdoors).toBeDefined();
    expect(typeof images.small.outdoors).toBe("string");
    expect(images.small.studio).toBeDefined();
    expect(typeof images.small.studio).toBe("string");
  }
});

test("all the images exist", () => {
  const ids = data.map((item) => item.id);

  for (const id of ids) {
    for (const type of IMAGE_TYPES) {
      for (const size of IMAGE_SIZES) {
        const extension = size === "small" ? "jpg" : "png";
        const path = `../images/${id}/${size}/${type}.${extension}`;
        expect(fs.existsSync(path)).toBe(true);
      }
    }
  }
});

test("there are no duplicate images", () => {
  const ids = data.map((item) => item.id);

  for (const id of ids) {
    for (let i = 0; i < IMAGE_TYPES.length; i++) {
      for (let j = i + 1; j < IMAGE_TYPES.length; j++) {
        for (const size of IMAGE_SIZES) {
          const extension = size === "small" ? "jpg" : "png";
          const path1 = `../images/${id}/${size}/${IMAGE_TYPES[i]}.${extension}`;
          const path2 = `../images/${id}/${size}/${IMAGE_TYPES[j]}.${extension}`;
          expect(fs.readFileSync(path1)).not.toEqual(fs.readFileSync(path2));
        }
      }
    }
  }
});
