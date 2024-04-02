import { Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<>
			<h1>Hello from Dashboard</h1>
			<Outlet />
		</>
	)
}
export default Dashboard
