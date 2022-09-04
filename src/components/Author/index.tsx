import React from 'react'
import { Container, Content, Date, ImageAuthorWrap, Name } from './styles'

import Image from 'next/image'

interface IAuthorProps {
	name: string
	date: string
	image: string
}

export default function Author(props: IAuthorProps) {
	return (
		<Container>
			<ImageAuthorWrap>
				<Image src={props.image} alt={`${props.name} image`} width='100%' height='100%' />
			</ImageAuthorWrap>
			<Content>
				<Name>{props.name}</Name>
				<Date>{props.date}</Date>
			</Content>
		</Container>
	)
}
