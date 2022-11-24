import userDataMock from "./mocks/userData.json"
import userActivityMock from "./mocks/userActivity.json"
import userSessionsMock from "./mocks/userSessions.json"
import userPerformanceMock from "./mocks/userPerformance.json"
import user18DataMock from "./mocks/user18Data.json"
import user18ActivityMock from "./mocks/user18Activity.json"
import user18SessionsMock from "./mocks/user18Sessions.json"
import user18PerformanceMock from "./mocks/user18Performance.json"

console.log("activity mock",userActivityMock)

const BASE_URL = "http://localhost:3000/user";


/**
 * Function to get the user info
 * @param {string} id 
 * @returns {object} user information
 */
export async function getData(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    
    return data.data;
  } catch (error) {
    console.log(error);
    
    switch (id) {
      case "12": 
        return userDataMock
      case "18":
        return user18DataMock

      default:
        break;
    }
  }
}

/**
 * Function to get user performance data
 * @param {string} id 
 * @returns  {object} User performance
 */
export async function getPerformance(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}/performance`);
    const data = await response.json();

    const performance = data.data.data.map(item => {
      return {
        value: item.value,
        kind: data.data.kind[item.kind]
      }
    })


    return performance;
  } catch (error) {
    console.log(error);
    switch (id) {
      case "12": 
        return userPerformanceMock
      case "18":
        return user18PerformanceMock

      default:
        break;
    }
  }
}

/**
 * Function to get user activity data
 * @param {string} id 
 * @returns {array} User activity
 */
export async function getActivity(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}/activity`);
    const data = await response.json();

    const activity = data.data.sessions
    activity.forEach((item) => (item.day = parseInt(item.day.slice(-2))));
    return activity;
  } catch (error) {
    console.log(error);
    switch (id) {
      case "12": 
        return userActivityMock
      case "18":
        return user18ActivityMock

      default:
        break;
    }
  }
}

/**
 * Function to get user average sessions data
 * @param {string} id 
 * @returns  {array} Average sessions
 */
export async function getAverageSessions(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}/average-sessions`);
    const data = await response.json();

    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const sessions = data.data.sessions.map((element, index) => {
      return { day: days[index], sessionLength: element.sessionLength };
    });

    console.log("Average Sessions", sessions);
    return sessions;
  } catch (error) {
    console.log(error);
    switch (id) {
      case "12": 
        return userSessionsMock
      case "18":
        return user18SessionsMock

      default:
        break;
    }
  }
}
