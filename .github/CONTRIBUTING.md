# Contribution Guide

Hi and welcome to the Open Dog Registry contribution guide!  
Thanks for considering to contribute! :tada:

## Found a Bug

If you have found a bug, great job!  
Please don't hesitate to [create an Issue](https://github.com/chase-manning/open-dog-registry/issues/new) for it so it can be fixed.  
Please make sure to add the `bug` Label, and if appropriate, the `good first issue` Label.  
If you want to fix the bug yourself, then also assign the Issue to yourself and view the `Development Workflow`!

## Got a Suggestion

Suggestions to improve the Open Dog Registry are very welcomed!  
Please first [create an Issue](https://github.com/chase-manning/open-dog-registry/issues/new) with the idea.
Please make sure to add the `enhancement` Label, and if appropriate, the `good first issue` Label.
If you want to fix the bug yourself, then also assign the Issue to yourself and view the `Development Workflow`!

## Development Workflow

If you are contributing, please first fork the repo.  
Make your changes in this forked repository or a branch off it until you are happy.  
And then create a PR back into `main`.  
Please also link the Issue that the PR relates to, and include a screenshot of your changes if relevant

Before any PR can be merged, all tests must be passing.
These are all visible within the PR view so you can easily see if there are any issues.  
Each PR will deploy the website and update the API automatically once merged.

If some of the information about a dog breed needs updating, you can find all of this in `/data/v1.json` to update.
If an image needs updating, you can find this in `/images/[dog-breed-id]/[image-type].png`.
To add a new dog breed, you will need to add both the images, and data for this.
