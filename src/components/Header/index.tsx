import React from 'react'
import { Header as Hd, Nav, Ul, Li } from './styles'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	return (
		<Hd>
			<Nav>
				<Ul>
					<Li>
						Home
					</Li>
					<Li>
						Last Articles
					</Li>
					<Li>
						Discover
					</Li>
				</Ul>
			</Nav>
		</Hd>
	)
}
