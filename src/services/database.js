export const get = (url, callback) => {
  return fetch(url)
    .then(response => checkServerResponse(response))
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => {
      console.error(error)
    })
}

export const post = async (data, url) => {
  try {
    checkServerResponse(
      await fetch(url, {
        body: JSON.stringify(data),
        method: 'POST'
      })
    )
    return 'Thank you, we will get back to you soon :)'
  } catch (error) {
    throw error
  }
}

const checkServerResponse = response => {
  if (response.ok) {
    console.log('no errors with the server response :)')
    return response
  }
  let error = new Error(response.statusText)
  error.response = response
  throw error
}
