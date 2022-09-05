import React from 'react'
import Author from 'components/Author'
import { Container, Title, ImagePrincipalCardWrap } from 'components/PrincipalCard/styles'
import Image from 'next/image'

interface IPrincipalCardProps {
	title: string
	image: string
	author: {
		name: string
		date: string
		image: string
	}
}

export default function PrincipalCard(props: IPrincipalCardProps) {
	return (
		<Container>
			<Title>
				{props.title}
			</Title>
			<Author {...props.author} />
			<ImagePrincipalCardWrap>
				<Image src={props.image} alt={`${props.title} image`} objectFit='cover' width='100%' height='100%' />
			</ImagePrincipalCardWrap>
		</Container>
	)
}
