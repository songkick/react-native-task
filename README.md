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

## My Additions

My first task was to convert the project to use TypeScript, ESLint and Prettier. I consider these standard
requirements for any project I work on these days, and the time savings lost by implementing them up front
I gained later by not having to mentally keep track of APIs as TypeScript can handle these for me.

Next, I installed React Native Test Library and updated the existing test for the EventDetails screen.

Next I removed the snapshot test as I find these utterly pointless and raise too many false
positives during development, as half the time when updating project code it breaks snapshots for no actual
reason other than they don't match - even if the functionality is identical. For this reason I prefer to
test how the screens and components would be actually used by an end user, as the only time I want to know
a test has failed is when it functionally breaks. For testing how a component actually looks there are better
tools such as visual regression testing.

Following this, I added a failing test that checked if a like button existed on the screen and was set to
the default 'not-liked' setting. If I'm 100% honest, this was my intent but I still hadn't fully formed the
actual code in my head yet so did the opposite of this state. Either way, I had a failing test I could then
build my code against.

My next step was to create the code to pass the test. I chose to create a context provider that would allow
passing an array of 'liked' event IDs, and subsequently created a custom hook that passed this value and a
toggle function. I could then use the values from this hook in the event details screen to check whether
the screen's event id was included in this list and display the appropriate like/unlike button accordingly -
with a press handler than took care of this functionality.

After a small refactor to encapsulate this feature within its own component, I was able to update the failing
unit test to make sure when pressing the like/unlike button the component updated accordingly.

Next I imported this same hook into the calendar screen and was able to check each event for whether it was
liked as it was being rendered. If so, I added the like-enabled image to the end of the calendar item.

It might be worth noting that I turned the renderItem/renderSectionHeader functions back into inline functions
in the SectionList component. This was primarily done to simplify typing these functions, but it also served
a practical purpose for the renderItem function as I was unable to include my custom hook when this function
was extracted and, due to the time pressure, I figured it wasn't worth refactoring it to allow it.

Finally, I began to work on the calendar API call but ran out of time on this feature. I began by installing
the react-query package and adding its context provider, and I began to add its query hook into the calendar
screen (this code is still there, but commented out so you can see the approach I was going for).

I then created an external API file that included the fetch call to the API response, which would then return
the normalised response back to the component in order to be rendered. I was able to call the API successfully
using the provided API string and credentials, however I didn't think it'd be very smart to commit secret
data to a public github repository so planned to use a `.env` file to include those values securely. However,
I wasn't able to get this feature of Expo to work properly and by then I'd run out of time, so decided to call
it a day.

As the code to make the API call was correct and returning data back to the Calendar screen, the only main
piece of code required to complete was to normalise the API response into a properly typed and SectionList-ready
format.
