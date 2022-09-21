import React from 'react'
import Author from 'components/Author'
import { Container, Title, CardContent, ImageCardWrap } from 'components/Card/styles'
import Image from 'next/image'

interface ICardProps {
	title: string
	image: string
	author: {
		name: string
		date: string
		image: string
	}
}

export default function Card(props: ICardProps) {
	return (
		<Container>
			<ImageCardWrap>
				<Image src={props.image} alt={`${props.title} image`} objectFit='cover' width='100%' height='100%' />
			</ImageCardWrap>
			<CardContent>
				<Title>
					{props.title}
				</Title>
				<Author {...props.author} />
			</CardContent>
		</Container>
	)
}
