import { Link, useSearchParams } from "react-router-dom"

import { useEffect, useState } from "react"

const Vans = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const [vans, setVans] = useState([])

	const typeFilter = searchParams.get("type")

	// fetch vans from API
	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => setVans(data.vans))
	}, [])

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans

	return (
		<div className='van-list-container'>
			<h1>Explore our van options</h1>
			<div className='van-list-filter-buttons'>
				<button
					className='van-type simple'
					onClick={() => setSearchParams({ type: "simple" })}
				>
					simple
				</button>
				<button
					className='van-type rugged'
					onClick={() => setSearchParams({ type: "rugged" })}
				>
					rugged
				</button>
				<button
					className='van-type luxury'
					onClick={() => setSearchParams({ type: "luxury" })}
				>
					luxury
				</button>
				<button
					className='van-type clear-filters'
					onClick={() => setSearchParams({})}
				>
					clear
				</button>
			</div>
			<div className='van-list'>
				{displayedVans.map((van) => (
					<div key={van.id} className='van-tile'>
						<Link
							to={`/vans/${van.id}`}
							aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
						>
							<img src={van.imageUrl} alt={`View details for ${van.name}`} />
							<div className='van-info'>
								<p style={{ "font-weight": "500", "font-size": "1.4rem" }}>
									{van.name}
								</p>
								<p>
									${van.price}
									<span>/day</span>
								</p>
							</div>
							<i className={`van-type ${van.type} selected`}>{van.type}</i>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
export default Vans
