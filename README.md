# React Native coding exercise

_Please read this document carefully before beginning the exercise._

## Instructions

Please spend a **maximum of two hours** on the following exercise, and submit your solution within a week of receiving the challenge.

- Fork this repository
- Submit your solution by creating a PR with your implementation and the URL to your code.

## Criteria

We have deliberately asked you to complete this task in a short period of time, and therefore do not necessarily expect a complete solution.

To make the most of your time, we suggest focusing on setting up the structure that you want for your code as priority.

Please add a section to this README file to discuss your approach and what you chose to focus on and why. We may schedule a follow-up conversation to discuss any further changes that you would have made to the codebase given more time.

We are looking for the following in your codebase:

- Good quality code; readable, maintainable and structured
- Appropriate tests for the code
- Code that runs and achieves the stated task

## Before you start

1. Install `expo-cli` from https://docs.expo.dev/get-started/installation/#1-expo-cli
2. Run `yarn install` to retrieve the necessary packages
3. Start the server by running `yarn start`
4. There are multiple methods you can use to view your app; on a android/ios simulator, web browser or via the expo mobile app. Pick whichever you are most comfortable with.
5. You can run the test suite using`yarn test`.

## Task

You have been given the start of a React Native application.
This app consists of two screens:

- `User calendar screen` - This is the first screen that shows in the app. It contains a list of all upcoming concerts for the user.
- `Concert detail screen` - When a user clicks on a concert, they are taken to this screen. It contains the details of an concert.

We would like you to make the following improvements:

### 1. Add the ability to 'like' a concert

- On the `Concert detail screen`, add a 'like' button that allows the user to toggle if they are interested in the event. Please use the provided `thumbs-up` icons for the like button.
- On the `User calendar screen`, add an indicator which shows if the user has 'liked' the concert.

### 2. Update the app so that it populates the user calendar screen using data from the Songkick API.

- Here are the docs that explain how to use our public API: https://www.songkick.com/developer/upcoming-events-for-user
- Use the following values in the endpoint:
  - API key: **1NJP9XKo6HZrYczZ**
  - Username: **super.user**
  - Reason: **tracked_artist**

## Finally...

A perfect looking screen is much less important than making sure you are pleased with your code quality and have something that works end-to-end at least minimally.

_Good luck, and have fun!_

## Approach for discussion

### Step 1 - like button

- I started with the like button and aimed at making the state exposed across the app. I began this by using async-storage to manage the ids in an array. I created a helper file to manage the logic for get/set of the async-storage library and make this reuasable if needed.
- Once I got the above working, I then cleaned up my approach and abstracted it to use the context api. This allowed me to clean up my code further and reduce duplicate code.
- I Then looked at where the like buttons could sit within the app, choosing to place the like button on the header of the event details page as it seemed to feel good to have easy access to this interaction. I then displayed the response for this interaction on the User Calendar by placing it at the end of each row item to avoid cluttering up the main space of each row.
- I used 'useEffect' as we use it to update the state and in turn the like state when the screen renders.
- I did check first to see if the API supported POST requests, as I imagined this behaviour would be better suited on the backend where it can be used across different platforms and decouple this logic from the client so that it can continue to be data driven.

### Step 2 - fetch data

- I simply setup a fetch block within a 'useEffect' to run before load so that we can fetch the data and then populate the screen. Using the credentials provided to complete the request.
- I then noted there was an issue being caught and upon debugging found that the API Key provided was disabled.
- I added a conditional and loading state to prevent the app from crashing at this point when data wasn't returned. Where I then re-added the mock data when the error is received just for testing purposes. But the loading screen or an error boundary might be more useful with a retry button as this would give the user better feedback to the issue and allow them to recover the session.

### Testing

- I updated the tests to pass by creating a mock context wrapper and then split the logic for each screen to use a connected pattern so that it would make testing easier in the future by being able to pass the data and handlers to the child components. This means that you can simply pass mock data through to this dumb component and test the expectations easily.
