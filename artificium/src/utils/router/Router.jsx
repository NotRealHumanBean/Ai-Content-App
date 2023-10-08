import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from '../../Pages/Chat/Chat'
import Login from '../../Pages/Login/Login'
import SignUp from '../../Pages/SignUp/SignUp'
import Workspace from '../../Pages/Workspace/Workspace'
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path='/' />
				<Route element={<SignUp />} path='/signup' />
				<Route element={<Chat />} path='/chat' />
				<Route element={<Workspace />} path='/work' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
