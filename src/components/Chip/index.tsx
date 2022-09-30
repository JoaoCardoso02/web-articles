import React, { CSSProperties } from 'react'
import { Btn } from './styles'

export interface IChipProps {
	children?: React.ReactNode
	style?: CSSProperties | undefined
}

export default function Chip(props: IChipProps) {
	return (
		<Btn style={props.style}>{props.children}</Btn>
	)
}
