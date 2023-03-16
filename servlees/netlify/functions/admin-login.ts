import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { api } from '../common/api-sdk'
import { AdminLoginInput } from '../common/sdk'
import { signToken } from '../common/jwt-sign-token'
import { hashPassword } from '../common/passwords'

const invalidUserPassword = {
	statusCode: 404,
	body: JSON.stringify({ message: 'User not found or password invalid' })
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
	const { body } = event

	const input: AdminLoginInput = JSON.parse(body!).input.admin
	console.log('input', input)


	const data = await api.GetAdminByUserName({ username: input.username },
		{
			'x-hasura-admin-secret': 'myadminsecretkey'
		})
	if (data.admin.length === 0) {
		return invalidUserPassword
	}

	const password = hashPassword(input.password)
	if (password !== data.admin[0].password) {
		return invalidUserPassword
	}
	const accessToken = signToken(data.admin[0].id)

	return {
		statusCode: 200,
		body: JSON.stringify({ accessToken: accessToken })
	}
}

export { handler }
