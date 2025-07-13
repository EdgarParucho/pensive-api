import authConfig from "../config/auth";
import Note from "../database/models";

const { issuerBaseURL, authGrantType, authClientID, authClientSecret } = authConfig;

class Auth0Service {

  public getManagementApiAccesToken() {
    return fetch(`${issuerBaseURL}oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audience: `${issuerBaseURL}api/v2/`,
        grant_type: authGrantType,
        client_id: authClientID,
        client_secret: authClientSecret,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) throw new Error(data.error_description)
        else return data.access_token
      })
      .catch((error) => {
        throw error
      })
  }

  public UpdateAccount = ({ author, password }: { author: string, password: object }) => new Promise(async (resolve, reject) => {
    try {
      const accessToken = await this.getManagementApiAccesToken();
      const response = await fetch(`${issuerBaseURL}api/v2/users/${author}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(password)
      })
      if (response.status >= 400) reject(response)
      else resolve(response)
    } catch (error) {
      reject(error)
    }
  })

  public DeleteAccount = ({ author }: { author: string }) => new Promise(async (resolve, reject) => {
    try {
      const accessToken = await this.getManagementApiAccesToken();
      const response = await fetch(`${issuerBaseURL}api/v2/users/${author}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.status >= 400) throw new Error(response.statusText)
      await Note.destroy({ where: { author } })
      resolve(response);
    } catch (error) {
      reject(error)
    }
  })
}
export default Auth0Service;