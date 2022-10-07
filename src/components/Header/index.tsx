import React from 'react'
import { Header as Hd, Nav, Ul, Li, Span } from './styles'

export default function Header() {
	return (
		<Hd data-testid="header">
			<Nav>
				<Ul data-testid="header__listing">
					<Li>
						<Span>Home</Span>
					</Li>
					<Li>
						<Span>Last Articles</Span>
					</Li>
					<Li>
						<Span>Discover</Span>
					</Li>
				</Ul>
			</Nav>
		</Hd>
	)
}
