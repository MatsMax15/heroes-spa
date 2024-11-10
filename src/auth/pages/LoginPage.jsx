import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui'

export const LoginPage = () => {
	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/', { replace: true })
	}

	return (
		<>
			<Button onClick={handleLogin}>Login</Button>
		</>
	)
}
