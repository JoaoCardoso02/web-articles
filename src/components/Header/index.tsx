import React from 'react'
import { AiOutlineBell, AiOutlineCompass, AiOutlineFire } from 'react-icons/ai'
import { Header as Hd, Nav, Ul, Li } from './styles'

export default function Header() {
	return (
		<Hd data-testid="header">
			<Nav>
				<Ul data-testid="header__listing">
					<Li>
						<AiOutlineFire />
					</Li>
					<Li>
						<AiOutlineCompass />
					</Li>
					<Li>
						<AiOutlineBell />
					</Li>
				</Ul>
			</Nav>
		</Hd>
	)
}
