import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Login from '../screens/Login/Login'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>  
				<Route element={<Login />} path='/' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
