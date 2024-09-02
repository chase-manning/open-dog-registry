const data = require("../data/v1.json");
const fs = require("fs");

const IMAGE_TYPES = ["indoors", "outdoors", "studio"];
const IMAGE_SIZES = ["small", "large"];

test("has some data", () => {
  expect(data.length).toBeGreaterThan(0);
});

test("there are no missing data points", () => {
  for (const item of data) {
    const {
      id,
      generalInformation,
      physicalCharacteristics,
      behavioralTraits,
      careRequirements,
      images,
    } = item;

    // Test ID
    expect(id).toBeDefined();
    expect(typeof id).toBe("string");

    // Test General Information
    expect(generalInformation.name).toBeDefined();
    expect(typeof generalInformation.name).toBe("string");
    expect(generalInformation.group).toBeDefined();
    expect(typeof generalInformation.group).toBe("string");
    expect(generalInformation.personalityTraits).toBeDefined();
    expect(Array.isArray(generalInformation.personalityTraits)).toBe(true);
    expect(generalInformation.personalityTraits.length).toBe(3);
    expect(generalInformation.shortDescription).toBeDefined();
    expect(typeof generalInformation.shortDescription).toBe("string");
    expect(generalInformation.longDescription).toBeDefined();
    expect(typeof generalInformation.longDescription).toBe("string");
    expect(generalInformation.popularity).toBeDefined();
    expect(typeof generalInformation.popularity).toBe("number");
    expect(generalInformation.height).toBeDefined();
    expect(typeof generalInformation.height).toBe("number");
    expect(generalInformation.weight).toBeDefined();
    expect(typeof generalInformation.weight).toBe("number");
    expect(generalInformation.lifeExpectancy).toBeDefined();
    expect(typeof generalInformation.lifeExpectancy).toBe("number");

    // Test Physical Characteristics
    expect(physicalCharacteristics.size).toBeDefined();
    expect(typeof physicalCharacteristics.size).toBe("number");
    expect(physicalCharacteristics.lifespan).toBeDefined();
    expect(typeof physicalCharacteristics.lifespan).toBe("number");
    expect(physicalCharacteristics.salivationTendency).toBeDefined();
    expect(typeof physicalCharacteristics.salivationTendency).toBe("number");
    expect(physicalCharacteristics.coatStyle).toBeDefined();
    expect(typeof physicalCharacteristics.coatStyle).toBe("string");
    expect(physicalCharacteristics.coatTexture).toBeDefined();
    expect(typeof physicalCharacteristics.coatTexture).toBe("string");
    expect(physicalCharacteristics.coatLength).toBeDefined();
    expect(typeof physicalCharacteristics.coatLength).toBe("number");
    expect(physicalCharacteristics.doubleCoat).toBeDefined();
    expect(typeof physicalCharacteristics.doubleCoat).toBe("boolean");

    // Test Behavioral Traits
    expect(behavioralTraits.familyAffectionLevel).toBeDefined();
    expect(typeof behavioralTraits.familyAffectionLevel).toBe("number");
    expect(behavioralTraits.childFriendly).toBeDefined();
    expect(typeof behavioralTraits.childFriendly).toBe("number");
    expect(behavioralTraits.dogSociability).toBeDefined();
    expect(typeof behavioralTraits.dogSociability).toBe("number");
    expect(behavioralTraits.friendlinessToStrangers).toBeDefined();
    expect(typeof behavioralTraits.friendlinessToStrangers).toBe("number");
    expect(behavioralTraits.playfulnessLevel).toBeDefined();
    expect(typeof behavioralTraits.playfulnessLevel).toBe("number");
    expect(behavioralTraits.protectiveInstincts).toBeDefined();
    expect(typeof behavioralTraits.protectiveInstincts).toBe("number");
    expect(behavioralTraits.adaptabilityRating).toBeDefined();
    expect(typeof behavioralTraits.adaptabilityRating).toBe("number");
    expect(behavioralTraits.vocalizationFrequency).toBeDefined();
    expect(typeof behavioralTraits.vocalizationFrequency).toBe("number");

    // Test Care Requirements
    expect(careRequirements.coatSheddingLevel).toBeDefined();
    expect(typeof careRequirements.coatSheddingLevel).toBe("number");
    expect(careRequirements.coatGroomingFrequency).toBeDefined();
    expect(typeof careRequirements.coatGroomingFrequency).toBe("number");
    expect(careRequirements.activityLevel).toBeDefined();
    expect(typeof careRequirements.activityLevel).toBe("number");
    expect(careRequirements.mentalStimulationRequirements).toBeDefined();
    expect(typeof careRequirements.mentalStimulationRequirements).toBe(
      "number"
    );
    expect(careRequirements.trainingEase).toBeDefined();
    expect(typeof careRequirements.trainingEase).toBe("number");

    // Test Images
    expect(images.indoors).toBeDefined();
    expect(typeof images.indoors).toBe("string");
    expect(images.outdoors).toBeDefined();
    expect(typeof images.outdoors).toBe("string");
    expect(images.studio).toBeDefined();
    expect(typeof images.studio).toBe("string");
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
