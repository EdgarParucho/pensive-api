import { issuerBaseURL, auth0ManageApiGrant, auth0ManageApiClientID, auth0ManageApiClientSecret } from "../config";

class Auth0Service {

  public getManagementApiAccesToken() {
    return fetch(`${issuerBaseURL}oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audience: `${issuerBaseURL}api/v2/`,
        grant_type: auth0ManageApiGrant,
        client_id: auth0ManageApiClientID,
        client_secret: auth0ManageApiClientSecret,
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
}
export default Auth0Service;