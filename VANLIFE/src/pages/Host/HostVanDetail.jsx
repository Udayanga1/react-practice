import { useParams } from "react-router-dom"

const HostVanDetail = () => {
	const params = useParams()

	console.log(params)

	return (
		<div>
			<h1>HostVanDetail</h1>
			<p>Van ID: {params.id}</p>
		</div>
	)
}
export default HostVanDetail
