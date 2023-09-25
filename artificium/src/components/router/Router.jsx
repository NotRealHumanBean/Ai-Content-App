import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import Chat from '../screens/Chat/Chat'
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>  
				<Route element={<Login />} path='/' />
				<Route element={<SignUp />} path='/signup' />
				<Route element={<Chat/>} path='/chat'/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
