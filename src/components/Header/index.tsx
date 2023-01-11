import React from 'react'
import Icon from "assets/svg/icon.svg";
import { Header as Hd } from './styles'
import SearchInput from '../Inputs/SearchInput'

export default function Header() {
	return (
		<Hd data-testid="header">
			<div className="header--left">
				<Icon />
				<SearchInput />
			</div>
		</Hd>
	)
}
