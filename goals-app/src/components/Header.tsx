import { type ReactNode } from "react"

type HeaderProps = {
	image: {
		src: string
		alt: string
	}
	children: ReactNode
}

const Header = ({ image, children }: HeaderProps) => {
	return (
		<div>
			{/* <img src={image.src} alt={image.alt} /> */}
			<img {...image} />
			{children}
		</div>
	)
}
export default Header
