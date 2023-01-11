import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { InputSearchContainer, SearchInput as Input } from './styles'

interface ISearchInputProps {
	onClick?: React.ReactEventHandler<HTMLInputElement>
	onBlur?: React.ReactEventHandler<HTMLInputElement>
	onFocus?: React.ReactEventHandler<HTMLInputElement>
	onEnter?: React.ReactEventHandler<HTMLInputElement>
}

export default function SearchInput(props: ISearchInputProps) {
	const handleKeyDown = (e: React.SyntheticEvent<HTMLInputElement>) => {
		if ((e as any).key === 'Enter' && props.onEnter)
			return props.onEnter(e);
	}

	return (
		<InputSearchContainer
			data-testid="input-search__container"
			className="input-search__container"
		>
			<AiOutlineSearch />
			<Input
				type="text"
				data-testid="input-search__input"
				onClick={props.onClick}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				onKeyDown={handleKeyDown}
				placeholder="Search..."
			/>
		</InputSearchContainer>
	)
}
