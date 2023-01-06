import React from 'react'
import { AiFillBell, AiFillFire, AiFillCompass } from 'react-icons/ai'
import { Header as Hd, Nav, Ul, Li } from './styles'
import SearchInput from '../Inputs/SearchInput'

export default function Header() {
	return (
		<Hd data-testid="header">
			<div className="header--left">
				<AiFillCompass />
				<SearchInput />
			</div>
			<div className="header--right">
				<Nav>
					<Ul data-testid="header__listing">
						<Li>
							<AiFillFire />
						</Li>
						<Li>
							<AiFillCompass />
						</Li>
						<Li>
							<AiFillBell />
						</Li>
					</Ul>
				</Nav>
			</div>
		</Hd>
	)
}
