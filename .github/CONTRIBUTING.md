# Contribution Guide

Thanks for wanting to help with Open Dog Registry. This guide covers how to report a bug, suggest a change or open a pull request.

## Found a Bug

If you find a bug, [open an issue](https://github.com/chase-manning/open-dog-registry/issues/new) so it can be tracked and fixed. Add the `bug` label, and add `good first issue` if it's suitable. If you want to fix it yourself, assign the issue to yourself and follow the Development Workflow section below.

## Got a Suggestion

Ideas for improving Open Dog Registry are welcome. Start by [opening an issue](https://github.com/chase-manning/open-dog-registry/issues/new) with your suggestion, and add the `enhancement` label (plus `good first issue` if suitable). If you want to work on it yourself, assign the issue to yourself and check the Development Workflow section below.

## Development Workflow

Fork the repository and make your changes on your fork or a branch of it, then open a pull request into `main`. Link the issue the pull request relates to, and include a screenshot if relevant.

On each pull request, CI builds the website and runs the data tests. The tests check that each breed has every field with the right type, 3 personality traits and all 6 image files, and that its 3 photos are different from each other. All tests must pass before a pull request can be merged. When a pull request is merged, the website and API deploy automatically and the API serves the updated data from `main`.

All breed data is in `/data/v1.json`. Images are in `/images/[breed-id]/small/[type].jpg` (512x512) and `/images/[breed-id]/large/[type].png` (1024x1024), where `type` is `indoors`, `outdoors` or `studio`. To add a new breed, add its entry to `/data/v1.json` and include all 6 images.
