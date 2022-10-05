import React from 'react'
import { Header as Hd, Nav, Ul, Li, Span } from './styles'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	return (
		<Hd>
			<Nav>
				<Ul>
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
