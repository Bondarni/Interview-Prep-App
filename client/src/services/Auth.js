import Client from './api'
export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    console.log('denied')
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth', data)
    return res.data
  } catch (error) {
    console.log('denied')
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    console.log('denied')
    throw error
  }
}
