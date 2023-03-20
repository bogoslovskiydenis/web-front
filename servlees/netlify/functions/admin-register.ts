import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { hashPassword } from '../common/passwords'
import { api } from '../common/api-sdk'
import { AdminRegisterInput } from '../common/sdk'
import jwt from 'jsonwebtoken'


const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
	const { body, headers } = event
	if (!headers['x-myweb-secret-key'] || headers['x-myweb-secret-key'] !== 'mysecretkey') {
		return {
			statusCode: 403,
			body: JSON.stringify({ message: "'x-myweb-secret-key' is missing or valid" })
		}
	}
	const input: AdminRegisterInput = JSON.parse(body!).input.adminRegister
	console.log('input', input)


	const password = hashPassword(input.password)
	const data = await api.InsertAdmin({
		username: input.username,
		password
	},
		 { 'x-hasura-admin-secret': "myadminsecretkey", }
	)
	console.log('data sdk' + data)


	const accessToken = jwt.sign(
		{
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': ['admin'],
				'x-hasura-default-role': 'admin',
				'x-hasura-user-id': data.insert_admin
			}
		}, 'wDzQPgtK7EIpxo8rULJr20jozYmBYPOK'
	)

	return {
		statusCode: 200,
		body: JSON.stringify({ accessToken: accessToken })
	}
}

export { handler }
