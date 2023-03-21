import client from '../axios/client'

export async function checkHealth() {
  return client
    .get('health', { 'Content-Type': 'application/json' })
    .then((response) => ({ response }))
    .catch(() => {
      return { response: false }
    })
}
