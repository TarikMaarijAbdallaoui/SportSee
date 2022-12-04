import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mockedData.js'



const BASE_URL = 'http://localhost:3000/user'

const isMocked = () => {
  const search = window.location.href.split('/')
  const mocked = search[search.length - 1] == 'mocked'

  return mocked
}


/**
 * Function to get the user info
 * @param {string} id
 * @returns {object} user information
 */
export async function getData(id) {

  const mocked = isMocked()

  if (mocked) {
    console.log('Data from mock')
    const data = USER_MAIN_DATA.find((user) => user.id == id)
    return data
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}`)
      const data = await response.json()
      console.log("Data from API");

      return data.data
    } catch (error) {
      console.error('Error:', error)

    }
  }
}

/**
 * Function to get user performance data
 * @param {string} id
 * @returns  {object} User performance
 */
export async function getPerformance(id) {

  const mocked = isMocked()
  
  if (mocked) {
    console.log('Performance from mock')
    const data = USER_PERFORMANCE.find((user) => user.userId == id)
    const performance = data.data.map((item) => {
      return {
        value: item.value,
        kind: data.kind[item.kind],
      }
    })

    return performance
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}/performance`)
      const data = await response.json()

      const performance = data.data.data.map((item) => {
        return {
          value: item.value,
          kind: data.data.kind[item.kind],
        }
      })

      console.log("Performance from API");
      return performance
    } catch (error) {
      console.error('Error:', error)

    }
  }
}

/**
 * Function to get user activity data
 * @param {string} id
 * @returns {array} User activity
 */
export async function getActivity(id) {
  const mocked = isMocked()

  if (mocked) {
    console.log('Activity from mock')
    const data = USER_ACTIVITY.find((user) => user.userId == id)

    const activity = data.sessions
    activity.forEach((item) => (item.day = parseInt(item.day.slice(-2))))
    return activity
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}/activity`)
      const data = await response.json()

      const activity = data.data.sessions
      activity.forEach((item) => (item.day = parseInt(item.day.slice(-2)))) // 2022-12-02

      console.log("Activity from API");
      return activity
    } catch (error) {
      console.error('Error:', error)
    }
  }
}

/**
 * Function to get user average sessions data
 * @param {string} id
 * @returns  {array} Average sessions
 */
export async function getAverageSessions(id) {

  const mocked = isMocked()

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  if (mocked) {
    console.log('Average sessions from mock')
    const data = USER_AVERAGE_SESSIONS.find((user) => user.userId == id)
    const sessions = data.sessions.map((element, i) => {
      return { day: days[i], sessionLength: element.sessionLength }
    })
    return sessions
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}/average-sessions`)
      const data = await response.json()

      const sessions = data.data.sessions.map((element, index) => {
        return { day: days[index], sessionLength: element.sessionLength }
      })

      console.log("Average sessions from API");
      return sessions
    } catch (error) {
      console.error('Error:', error)
    }
  }
}
