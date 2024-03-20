const Card = ({
	bgcolor = "bg-gray-100",
	cardtitle,
	description,
	btncolor = "bg-black hover:bg-gray-700",
}) => {
	return (
		<div className={`${bgcolor} p-6 rounded-lg shadow-md`}>
			<h2 className='text-2xl font-bold'>{cardtitle}</h2>
			<p className='mt-2 mb-4'>{description}</p>
			<a
				href='/jobs.html'
				className={`inline-block  text-white rounded-lg px-4 py-2 ${btncolor}`}
			>
				Browse Jobs
			</a>
		</div>
	)
}
export default Card
