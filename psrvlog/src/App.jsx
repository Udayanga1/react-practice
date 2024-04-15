import { useNavigate } from "react-router-dom"

function App() {
	const navigate = useNavigate()
	return (
		<>
			<div className='flex flex-col h-screen justify-center bg-gray-900'>
				<div className='flex flex-col items-center'>
					<h1 className='text-4xl text-gray-100'>Welcome to PSR Vlog</h1>
					<button
						className='bg-gray-100 text-gray-900 mt-4 px-4 py-2 rounded-lg'
						onClick={() => navigate("users")}
					>
						Users
					</button>
				</div>
			</div>
		</>
	)
}

export default App
