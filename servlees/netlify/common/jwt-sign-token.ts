import jwt from 'jsonwebtoken'

export const signToken = (id: any) => {
	return jwt.sign(
		{
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': ['admin'],
				'x-hasura-default-role': 'admin',
				'x-hasura-user-id': id
			}
		}, '5Cc7wGCNq8VJd1Fp5TYeeRKKIeYO8VD7'
	)
}
