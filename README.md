# React Native coding exercise

*Please read this document carefully before beginning the exercise.*

## Instructions

Please spend a **maximum of two hours** on the following exercise, and submit your solution within a week of receiving the challenge.

* Fork this repository
* Submit your solution by creating a PR with your implementation and the URL to your code.

## Criteria
We have deliberately asked you to complete this task in a short period of time, and therefore do not necessarily expect a complete solution.

To make the most of your time, we suggest focusing on setting up the structure that you want for your code as priority.

Please add a section to this README file to discuss your approach and what you chose to focus on and why. We may schedule a follow-up conversation to discuss any further changes that you would have made to the codebase given more time.

We are looking for the following in your codebase:
* Good quality code; readable, maintainable and structured
* Appropriate tests for the code
* Code that runs and achieves the stated task

## Before you start
1. Install `expo-cli` from https://docs.expo.dev/get-started/installation/#1-expo-cli
2. Run `yarn install` to retrieve the necessary packages
3. Start the server by running `yarn start`
4. There are multiple methods you can use to view your app; on a android/ios simulator, web browser or via the expo mobile app. Pick whichever you are most comfortable with.
5. You can run the test suite using`yarn test`.

## Task

You have been given the start of a React Native application.
This app consists of two screens:
* `User calendar screen` - This is the first screen that shows in the app. It contains a list of all upcoming concerts for the user.
* `Concert detail screen` - When a user clicks on a concert, they are taken to this screen. It contains the details of an concert.

We would like you to make the following improvements:
### 1. Add the ability to 'like' a concert
* On the `Concert detail screen`, add a 'like' button that allows the user to toggle if they are interested in the event. Please use the provided `thumbs-up` icons for the like button.
* On the `User calendar screen`, add an indicator which shows if the user has 'liked' the concert.

### 2. Update the app so that it populates the user calendar screen using data from the Songkick API.
* Here are the docs that explain how to use our public API: https://www.songkick.com/developer/upcoming-events-for-user
* Use the following values in the endpoint:
    * API key: **1NJP9XKo6HZrYczZ**
    * Username: **super.user**
    * Reason: **tracked_artist**


## Finally...
A perfect looking screen is much less important than making sure you are pleased with your code quality and have something that works end-to-end at least minimally.

*Good luck, and have fun!*
