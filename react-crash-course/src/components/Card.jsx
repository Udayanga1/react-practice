import { Link } from "react-router-dom"
const Card = ({
	bgcolor = "bg-gray-100",
	cardtitle,
	description,
	btncolor = "bg-black hover:bg-gray-700",
	btn_description,
	btn_link,
}) => {
	return (
		<div className={`${bgcolor} p-6 rounded-lg shadow-md`}>
			<h2 className='text-2xl font-bold'>{cardtitle}</h2>
			<p className='mt-2 mb-4'>{description}</p>
			<Link
				to={btn_link}
				className={`inline-block  text-white rounded-lg px-4 py-2 ${btncolor}`}
			>
				{btn_description}
			</Link>
		</div>
	)
}
export default Card
