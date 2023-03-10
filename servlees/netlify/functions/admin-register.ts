import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import jwt from 'jsonwebtoken'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../common/sdk'
import * as crypto from "crypto"

interface AdminRegisterInput {
	username: string,
	password: string
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
	const { body , headers} = event
	if(!headers['x-myweb-secret-key']||headers['x-myweb-secret-key'] !==  'mysecretkey'){
		return {
			statusCode: 403,
			body: JSON.stringify({ message: "'x-myweb-secret-key' is missing or valid" })
		}
	}
	const input: AdminRegisterInput = JSON.parse(body!).input.admin
	console.log("input" , input)

	const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'))
	// console.log('data sdk' + data)

	const password = crypto.pbkdf2Sync(input.password , 'mysaltsecret' ,1000, 64,'sha512').toString()
	const data = await sdk.InsertAdminOne({
		username: input.username,
		password
	})


	const accessToken = jwt.sign(
		{
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': ['admin'],
				'x-hasura-default-role': 'admin',
				'x-hasura-user-id': data.insert_admin_one.id
			}
		}, 'myJWTSecret'
	)

	return {
		statusCode: 200,
		body: JSON.stringify({ accessToken: accessToken })
	}
}

export { handler }
