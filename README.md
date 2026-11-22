![Open Dog Registry: A free and open-source API for dog breeds. Banner with a smiling dog badge and a copyable URL.](https://github.com/user-attachments/assets/108c0fe4-c6cb-4cf1-96c8-75da476f2e17)

# Open Dog Registry

A free, open-source JSON API with dog breed data and photos.

## Contributing

The breed data lives in `data/v1.json`, and the API serves whatever is merged into the main branch. If you'd like to contribute, start with the [Contribution Guide](https://github.com/chase-manning/open-dog-registry/blob/main/.github/CONTRIBUTING.md).

## License

Open Dog Registry is released under the [MIT License](https://github.com/chase-manning/open-dog-registry/blob/main/LICENSE), so you can use it however you like. The requests below aren't part of the licence, but if you use the API, please:

- Cache the response where you can, because every request returns the whole dataset and the data only changes when this repository changes.
- Mention Open Dog Registry in your project and link to this repository.
- [Consider donating](https://buymeacoffee.com/chase8) if you found this API helpful.

## Projects built with Open Dog Registry

<a href="https://dogmatch.me/" target="_blank">
  <img src="https://github.com/user-attachments/assets/a56312e7-8f10-4b01-b213-36127114f3ff" width="400px" alt="dogmatch app: logo, quiz question cards and a Pointer result card with a photo, rating bars and trait tags." />
</a>

Open a pull request to add your own project.

## API Docs

Send a GET request to `https://v1-3k26ucvzka-uc.a.run.app` with no API key needed and CORS open for browser requests. It returns a single JSON response in this format:

```
{
  "status": "success" | "error" ,
  "data": [
    {
      id: string;
      general: {
          name: string;
          group: string;
          personalityTraits: string[];
          shortDescription: string;
          longDescription: string;
          popularity: number;
          height: number;
          weight: number;
          lifespan: number;
      };
      physical: {
          size: number;
          lifespan: number;
          droolingFrequency: number;
          coatStyle: string;
          coatTexture: string;
          coatLength: number;
          doubleCoat: boolean;
      };
      behavior: {
          familyAffection: number;
          childFriendly: number;
          dogSociability: number;
          friendlinessToStrangers: number;
          playfulness: number;
          protectiveInstincts: number;
          adaptability: number;
          barkingFrequency: number;
      };
      care: {
          sheddingAmount: number;
          groomingFrequency: number;
          exerciseNeeds: number;
          mentalStimulationNeeds: number;
          trainingDifficulty: number;
      };
      images: {
          indoors: string;
          outdoors: string;
          studio: string;
      };
    }
  ]
}
```

### Id

#### `id`

A unique string identifying the breed, such as "chihuahua". It stays the same between versions, so it's safe to store.

### General Information

#### `name`

The breed's name as a string, such as "Labrador Retriever", "German Shepherd" or "Beagle".

#### `group`

A string grouping the breed by the work or role it was bred for. It's one of "Companion", "Working", "Herding", "Sporting", "Hound", "Guardian" or "Terrier".

#### `personalityTraits`

An array of exactly 3 single-word strings describing the breed's personality, such as "Faithful", "Sociable" and "Playful".

#### `shortDescription`

A one-sentence string of roughly 11 to 21 words summarising the breed.

#### `longDescription`

A string of roughly 90 to 250 words covering the breed's background, temperament and care. Paragraphs are separated by a single newline character.

#### `popularity`

The breed's popularity, reflecting how well-known it is, how common it is as a pet and how easy it is to find. This is an integer from 1 to 5, where 1 is the least popular and 5 is the most popular.

#### `height`

The breed's average height in inches, as a number.

#### `weight`

The breed's average weight in pounds, as a number.

#### `lifespan`

The breed's average lifespan in years, as a number.

#### `rare`

A boolean that is `true` if the breed is very rare to own or only popular in particular regions of the world, and `false` otherwise.

### Physical Characteristics

#### `size`

The breed's size compared to other breeds. Integer from 1 to 5 inclusive (1 = Small, 5 = Big).

#### `lifespan`

How long the breed is likely to live compared to other breeds (use `general.lifespan` for the number of years). Integer from 1 to 5 inclusive (1 = Short, 5 = Long).

#### `droolingFrequency`

How likely the breed is to drool. Breeds near the top of the scale may leave drool on clothes and furniture. Integer from 1 to 5 inclusive (1 = Not a drooler, 5 = Heavy drooler).

#### `coatStyle`

The style and appearance of the breed's coat. String, one of "Straight", "Wavy", "Curly", "Wire", "Hairless" or "Corded".

#### `coatTexture`

The texture of the breed's coat. String, one of "Smooth", "Rough" or "Silky".

#### `coatLength`

Length of the breed's fur from skin to tip, which can influence grooming needs and seasonal care. Integer from 1 to 5 inclusive (1 = Short, 5 = Long).

#### `doubleCoat`

Double-coated dogs have two layers of fur: a harsh topcoat and a soft undercoat. The soft undercoat is shorter, grows faster and sheds twice a year, while the topcoat is longer and more protective. Boolean: `true` if the breed is double-coated, `false` if not.

### Behavioral Traits

#### `familyAffection`

How affectionate a breed is with family members and other familiar people. Some breeds show affection mainly to their owner, while others are warm with everyone they know well. Integer from 1 to 5 inclusive (1 = Reserved, 5 = Very affectionate).

#### `childFriendly`

How tolerant and patient a breed is with young children, and how well suited it is to family life. Integer from 1 to 5 inclusive (1 = Not child-friendly, 5 = Very child-friendly).

#### `dogSociability`

How friendly and social a breed is with other dogs. Integer from 1 to 5 inclusive (1 = Not sociable, 5 = Very sociable).

#### `friendlinessToStrangers`

How welcoming a breed is towards strangers. Some breeds are reserved or cautious around new people, while others are happy to meet someone new. Integer from 1 to 5 inclusive (1 = Reserved or cautious, 5 = Very friendly).

#### `playfulness`

How enthusiastic a breed is about playing. Some breeds are eager to play tug-of-war or fetch well beyond puppyhood, while others prefer to relax. Integer from 1 to 5 inclusive (1 = Relaxed, 5 = Very playful).

#### `protectiveInstincts`

How likely a breed is to warn you of strangers or potential threats. Strongly protective breeds are more likely to react to unfamiliar people or animals, though they are usually friendlier towards strangers welcomed by their family. Integer from 1 to 5 inclusive (1 = Less alert, 5 = Highly vigilant).

#### `adaptability`

How easily a breed adjusts to changes in its environment, such as living conditions, noise levels, weather and daily schedules. Integer from 1 to 5 inclusive (1 = Not very adaptable, 5 = Very adaptable).

#### `barkingFrequency`

How often a breed barks or howls. Some breeds bark at almost anything, while others only do so in specific situations (and even barkless breeds make other sounds). Integer from 1 to 5 inclusive (1 = Quiet, 5 = Noisy).

### Care Requirements

#### `sheddingAmount`

How much fur and hair the breed sheds. Higher scores mean more brushing, more vacuuming and a higher chance of triggering allergies. Integer from 1 to 5 inclusive (1 = Low shedding, 5 = High shedding).

#### `groomingFrequency`

How often the breed needs bathing, brushing, trimming or other coat maintenance. All breeds need regular nail trimming regardless of this score. Integer from 1 to 5 inclusive (1 = Rarely, 5 = Very often).

#### `exerciseNeeds`

How much physical exercise the breed needs. Low scores are for laid-back dogs happy with minimal activity, and high scores are for lively dogs that need plenty of playtime. Integer from 1 to 5 inclusive (1 = Couch potato, 5 = Energetic explorer).

#### `mentalStimulationNeeds`

How much mental stimulation the breed needs to stay happy and healthy. High-scoring breeds may need activities involving decision-making, problem-solving and concentration, or they might make up less welcome ones of their own. Integer from 1 to 5 inclusive (1 = Low, 5 = High).

#### `trainingDifficulty`

How difficult the breed is to train, including its willingness to learn new commands and behaviours. Breeds that are eager to please and quick to learn score lower, while more independent and stubborn breeds score higher. Integer from 1 to 5 inclusive (1 = Easy to train, 5 = Challenging to train).

### Images

#### Small

The `images.small` object holds three JPG photo URLs at 512x512 pixels:

##### `indoors`

URL string for a photo of the breed indoors, usually in a home.

##### `outdoors`

URL string for a photo of the breed outdoors, usually on a walk in nature.

##### `studio`

URL string for a studio photo of the breed against a white backdrop.

#### Large

The `images.large` object holds URLs for the same three photos as PNGs at 1024x1024 pixels:

##### `indoors`

URL string for a photo of the breed indoors, usually in a home.

##### `outdoors`

URL string for a photo of the breed outdoors, usually on a walk in nature.

##### `studio`

URL string for a studio photo of the breed against a white backdrop.
