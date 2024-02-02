import environment from "@/config/environment"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const addContentTypeHeader = (options) => {
  if(!options.headers){
    options.headers = {
      'Content-Type': 'application/json'
    }
  }else if (options.headers && !options.headers['Content-Type']){
    options.headers['Content-Type'] = 'application/json'
  }
}

export const fetchWithRetry = async (url, options, attempt = 1) => {
  try {
    addContentTypeHeader(options)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw response
    }

    return response

  } catch (error) {

    if(error.status === 500 && attempt <= environment.maxAttemps){
      const retryDelay = environment.retryDelay * attempt

      await wait(retryDelay)
      return fetchWithRetry(url, options, attempt + 1)
    }

    throw error
  }
}