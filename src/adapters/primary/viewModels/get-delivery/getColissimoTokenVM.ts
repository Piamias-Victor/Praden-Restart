import axios from 'axios'

export async function getColissimoTokenVM() {
  const url = 'https://ws.colissimo.fr/widget-colissimo/rest/authenticate.rest'
  const payload = {
    login: '651037',
    password: 'Mk12rncRd7%JlKk83'
  }

  const response = await axios.post(url, payload, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data.token
}
