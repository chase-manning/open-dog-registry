![image](https://github.com/user-attachments/assets/108c0fe4-c6cb-4cf1-96c8-75da476f2e17)

# Open Dog Registry

A free and open-source API for dog breeds! 🐶

## Contributing

If you are interested in contributing please check out our [Contribution Guide](https://github.com/chase-manning/open-dog-registry/blob/main/.github/CONTRIBUTING.md) :tada:

## License

Open Dog Registry is under a [MIT License](https://github.com/chase-manning/open-dog-registry/blob/main/LICENSE).  
Feel free to use this API however you like.  
We do ask though that if you use the API, to please:

- Cache things where you can to minimise requets
- Mention in your project that you used our API and link to this repository.
- [Consider donating](https://buymeacoffee.com/chase8) if you found this API helpful

## Projects built using Open Dog Registry API

<a href="https://dogmatch.me/" target="_blank">
  <img src="https://github.com/user-attachments/assets/a56312e7-8f10-4b01-b213-36127114f3ff" width="400px" />
</a>

(Raise a PR to add your own project)

## API Docs

The endpoint of the API is `https://registry.dog/api/v1`.

The response is in the following format:

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

The unique identifier of the dog breed. Can be considered immutable between versions.

### General Information

#### `name`

Breed of the dog, which refers to the specific genetic lineage or type of dog (e.g. Labrador Retriever, German Shepherd, Beagle, etc).

#### `group`

Category of dog based on its purpose or characteristics (e.g. Terrier, Working, Companion, etc).

#### `personalityTraits`

Three key words that highlight the core personality traits of the dog, such as "Faithful," "Sociable," or "Playful." These traits help to give an overview of the dog's temperament and behavior.

#### `shortDescription`

This section provides a general overview about the dog.

#### `longDescription`

This section provides general information about the dog, including its background, personality traits, and any other relevant details.

#### `popularity`

Popularity of the breed, reflecting how well-known it is, how common it is as a pet, and how easy it is to find.

#### `height`

Average height of the dog in inches.

#### `weight`

Average weight of the dog in pounds. Also indicates size and build, giving an idea of how heavy this breed is.

#### `lifespan`

Average number of years a dog will live.

#### `rare`

A 'rare' dog is one that is considered exceedingly rare to own.
Or a dog that is only popular in particular regions of the world.
Is a boolean value, true for rare and false for not.

### Physical Characteristics

#### `size`

A dog's relative size compared to other breeds.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Small and 5 is Big.

#### `lifespan`

How long a dog is likely to live compared to other dogs.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Short and 5 is Long.

#### `droolingFrequency`

How likely a breed is to drool. Breeds with high salivation may leave drool on clothes and furniture.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Not a drooler and 5 is Heavy drooler.

#### `coatStyle`

Texture and appearance of a dog's coat (wavy, wiry, curly, hairless or straight).

#### `coatTexture`

Texture of a dog's coat (rough, silky or smooth).

#### `coatLength`

Length of a dog's fur from skin to tip. It affects the dog's overall appearance and can influence grooming needs and seasonal care.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Short and 5 is Long.

#### `doubleCoat`

Double-coated dogs have two layers of fur: a harsh topcoat and a soft undercoat. The soft undercoat is shorter, grows faster, and sheds twice a year. The topcoat is longer and more protective.
Is a boolean value, true for double coated and false for not.

### Behavioral Traits

#### `familyAffection`

How affectionate a breed is with family members or other familiar people. Some breeds may show affection primarily to their owner, while others are friendly and affectionate with everyone they know well.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Reserved and 5 is Very Affectionate.

#### `childFriendly`

How tolerant and patient a dog is with young children and its overall family-friendly nature.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Not child-friendly and 5 is Very child-friendly.

#### `dogSociability`

How friendly and social a breed is with other dogs. Some breeds naturally tend to get along well with other dogs.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Not Sociable and 5 is Very Sociable.

#### `friendlinessToStrangers`

How welcoming a breed is towards strangers. Some breeds may be reserved or cautious around new people, while others will be eager and happy to meet someone new.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Reserved or cautious and 5 is Very friendly.

#### `playfulness`

How enthusiastic a breed is about playing. Some breeds are eager to play tug-of-war or fetch well beyond puppyhood, while others prefer to relax more often.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Relaxed and 5 is Very playful.

#### `protectiveInstincts`

How likely a breed is to warn you of strangers or potential threats. Strongly protective breeds are more likely to react to unfamiliar people or animals. They are usually more friendly towards strangers who are welcomed by their family.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Less alert and 5 is Highly vigilant.

#### `adaptability`

How easily a breed adapts to changes in their environment (e.g. living conditions, noise levels, weather, daily schedules, etc).
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Not very adaptable and 5 is Very adaptable.

#### `barkingFrequency`

How frequently a breed may bark or howl. While some breeds bark at almost anything, others might only bark in specific situations (but even barkless breeds may use other sounds to express themselves.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Quiet and 5 is Noisy.

### Care Requirements

#### `sheddingAmount`

Indicates how much fur and hair the breed sheds. Higher shedding means more brushing is needed, higher chances of triggering allergies, and more frequent vacuuming.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Low shedding and 5 is High shedding.

#### `groomingFrequency`

How often a breed needs bathing, brushing, trimming or other coat maintenance, depending on your time, patience, and budget for grooming. (Note that all breeds need regular nail trimming.)
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Rarely and 5 is Very often.

#### `exerciseNeeds`

How much physical exercise a dog needs. Very active dogs are lively, always ready for their next adventure, and need plenty of playtime. Inactive dogs are more laid-back and happy with minimal activity.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is a Couch potato and 5 is an Energetic explorer.

#### `mentalStimulationNeeds`

How much mental stimulation a breed needs to stay happy and healthy. Breeds with high mental stimulation needs may need activities that involve decision-making, problem-solving and concentration. (Otherwise, these dogs might create their own less desirable activities!)
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Low and 5 is High.

#### `trainingDifficulty`

How easy it is to train your dog and their willingness to learn new commands and behaviors. Some breeds are eager to please and quick to learn, while others may be more independent and stubborn.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is Easy to train and 5 is Challenging to train.

### Images

#### Small

Small jpg photos of the dog breed (512px by 512px):

##### `indoors`

A link to a photo of the dog indoors, usually in a home environment.

##### `outdoors`

A link to a photo of the dog outdoors, usually out on a walk in nature.

##### `studio`

A link to a photo of the dog in a professional studio with a white backdrop.

#### Large

Large png photos of the dog breed (1024px by 1024px):

##### `indoors`

A link to a photo of the dog indoors, usually in a home environment.

##### `outdoors`

A link to a photo of the dog outdoors, usually out on a walk in nature.

##### `studio`

A link to a photo of the dog in a professional studio with a white backdrop.
