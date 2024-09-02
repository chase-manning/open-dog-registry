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

## API Docs

The endpoint of the API is `https://registry.dog/api/v1`.

The response is in the following format:

```
{
  "status": "success" | "error" ,
  "data": [
    {
      id: string;
      generalInformation: {
          name: string;
          group: string;
          personalityTraits: string[];
          shortDescription: string;
          longDescription: string;
          popularity: number;
          height: number;
          weight: number;
          lifeExpectancy: number;
      };
      physicalCharacteristics: {
          size: number;
          lifespan: number;
          salivationTendency: number;
          coatStyle: string;
          coatTexture: string;
          coatLength: number;
          doubleCoat: boolean;
      };
      behavioralTraits: {
          familyAffectionLevel: number;
          childFriendly: number;
          dogSociability: number;
          friendlinessToStrangers: number;
          playfulnessLevel: number;
          protectiveInstincts: number;
          adaptabilityRating: number;
          vocalizationFrequency: number;
      };
      careRequirements: {
          coatSheddingLevel: number;
          coatGroomingFrequency: number;
          activityLevel: number;
          mentalStimulationRequirements: number;
          trainingEase: number;
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

The breed of the dog, which refers to the specific genetic lineage or type of dog, such as Labrador Retriever, German Shepherd, or Beagle.

#### `group`

The category or classification of a dog based on its purpose or characteristics, such as Terrier, Working, or Companion.

#### `personalityTraits`

Three key words that highlight the core personality traits of the dog, such as "Faithful," "Sociable," or "Playful." These traits help to give an overview of the dog's temperament and behavior.

#### `shortDescription`

This section provides general information about the dog, including its background, personality traits, and any other relevant details that give an overview of the dog. Short in length, around one sentence.

#### `longDescription`

This section provides general information about the dog, including its background, personality traits, and any other relevant details that give an overview of the dog. Long in length, several paragraphs.

#### `popularity`

Indicates the popularity of the breed, reflecting how well-known the breed is, how common it is as a pet, and how easily it can be acquired.

#### `height`

This is the typical height of the dog breed measured in inches, representing how tall a dog of this breed usually stands.

#### `weight`

The weight of the dog breed in pounds. This value helps indicate the general size and build of the breed, providing an idea of how heavy an average dog of this breed might be.

#### `lifeExpectancy`

The typical number of years a dog is expected to live, on average.

### Physical Characteristics

#### `size`

The relative size of a dog breed compared to other breeds. It helps users understand whether a breed is generally small, medium, or large.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is small and 5 is large.

#### `lifespan`

The average length of life for the breed compared to other dogs.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is short and 5 is long.

#### `salivationTendency`

This indicates how likely a breed is to drool. For those who prefer a tidier environment, breeds with high salivation tendencies may not be ideal as they can leave drool on your clothes and furniture.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is low drooling tendency and 5 is High drooling tendency.

#### `coatStyle`

The typical texture and appearance of a dog's coat, such as wavy, wiry, curly, hairless, or straight.

#### `coatTexture`

Describes the typical texture of a dog's coat, such as rough, silky, or smooth.

#### `coatLength`

This label describes the length of a dog's fur from the skin to the tip. It affects the dog's overall appearance and can influence grooming needs and seasonal care.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is short fur and 5 is long fur.

#### `doubleCoat`

Double-coated dogs have two layers of fur: a harsh topcoat and a soft undercoat. The soft undercoat is shorter, grows faster, and sheds twice a year, while the topcoat is longer and more protective.  
Is a boolean value, true for double coated and false for not.

### Behavioral Traits

#### `familyAffectionLevel`

Indicates how affectionate a breed is likely to be with family members or other familiar people. Some breeds may show affection primarily to their owner, while others are friendly and affectionate with everyone they know well.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is reserved and 5 is very affectionate.

#### `childFriendly`

This rating indicates a breed's tolerance and patience with young children's behavior and its overall family-friendly nature. Always supervise interactions between dogs and young children, or any children who are not familiar with dogs.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is reserved and 5 is very child-friendly.

#### `dogSociability`

Indicates how friendly and social a breed typically is with other dogs. While supervision is always recommended during interactions and introductions, some breeds naturally tend to get along well with other dogs, whether at home or in public settings.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is reserved and 5 is very sociable.

#### `friendlinessToStrangers`

This metric indicates how welcoming a breed is likely to be towards strangers. Some breeds may be reserved or cautious around new people, while others will be eager and happy to meet someone new, regardless of the location.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is reserved and 5 is very friendly.

#### `playfulnessLevel`

Indicates how enthusiastic a breed is about play, even beyond puppyhood. Some breeds remain eager to engage in activities like tug-of-war or fetch well into their adult years, while others may prefer to relax more often.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is relaxed and 5 is very playful.

#### `protectiveInstincts`

This measures a breed's tendency to alert you to the presence of strangers or potential threats. Breeds with strong protective instincts are more likely to react to unfamiliar people or animals, whether it's the mailman or a squirrel outside. They typically become friendly towards strangers who are welcomed by their family.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is less alert and 5 is highly vigilant.

#### `adaptabilityRating`

This rating indicates how easily a breed adapts to changes in their environment, including living conditions, noise levels, weather, daily schedules, and other day-to-day variations.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is poorly adaptable and 5 is highly adaptable.

#### `vocalizationFrequency`

This measures how frequently a breed vocalizes, including barking and howling. While some breeds are highly vocal and bark at almost anything, others are more reserved and only bark in specific situations. Note that even barkless breeds may use other sounds to express themselves.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is rarely vocalizes and 5 is very vocal.

### Care Requirements

#### `coatSheddingLevel`

Indicates the amount of fur and hair the breed typically sheds. Higher shedding levels mean more frequent brushing is needed, higher chances of triggering allergies, and more frequent cleaning tasks like vacuuming and lint-rolling.
Is a positive integeter between 1 and 5 (inclusive). Where 1 is low shedding and 5 is high shedding.

#### `coatGroomingFrequency`

This indicates how often a breed needs bathing, brushing, trimming, or other types of coat maintenance. Consider your available time, patience, and budget for grooming when evaluating this aspect. Note that all breeds need regular nail trimming.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is low maintenance and 5 is high maintenance.

#### `activityLevel`

Indicates the required amount of physical exercise and mental stimulation for a dog breed. High activity level dogs are lively, always ready for their next adventure, and need plenty of playtime. Low activity level dogs are more laid-back and content with minimal activity.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is a couch potato and 5 is an energetic explorer.

#### `mentalStimulationRequirements`

Indicates how much mental stimulation a breed needs to stay happy and healthy. Breeds with high mental stimulation needs may require activities that involve decision-making, problem-solving, and concentration. Without sufficient mental engagement, these dogs might create their own activities, which may be undesirable.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is low needs and 5 is high needs.

#### `trainingEase`

Indicates how easy it is to train your dog and their willingness to learn new commands and behaviors. Some breeds are eager to please and quick to learn, while others may be more independent and stubborn.  
Is a positive integeter between 1 and 5 (inclusive). Where 1 is difficult to train and 5 is highly trainable.

### Images

#### `indoors`

A link to a photo of the dog indoors, usually in a home environment.

#### `outdoors`

A link to a photo of the dog outdoors, usually out on a walk in nature.

#### `studio`

A link to a photo of the dog in a professional studio with a white backdrop.
