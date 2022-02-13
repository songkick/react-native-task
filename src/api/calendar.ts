export async function fetchCalendarEvents() {
  try {
    const response = await fetch(
      'https://api.songkick.com/api/3.0/users/{process.env.API_USER}/calendar.json?reason={process.env.REASON}&apikey={process.env.API_KEY}',
    );

    if (!response.ok) {
      throw new Error('Failed to recieve API response');
    }

    const results: unknown = await response.json();

    // TODO: normalise API results and return in section format
    // e.g. return normaliseEventsResponse(results)

    return results;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
