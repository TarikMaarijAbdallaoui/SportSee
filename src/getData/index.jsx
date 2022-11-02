const BASE_URL = "http://localhost:3000/user";

export async function getData(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPerformance(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}/performance`);
    const data = await response.json();

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getActivity(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}/activity`);
    const data = await response.json();

    console.log("get Activity", data.data.sessions);
    return data.data.sessions;
  } catch (error) {
    console.log(error);
  }
}

export async function getAverageSessions(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}/average-sessions`);
    const data = await response.json();

    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const sessions = data.data.sessions.map((element, index) => {
      return { day: days[index], sessionLength: element.sessionLength };
    });

    console.log(sessions);
    return sessions;
  } catch (error) {
    console.log(error);
  }
}
