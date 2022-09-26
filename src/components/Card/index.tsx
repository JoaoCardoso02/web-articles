import React from 'react'
import Author from 'components/Author'
import Image from 'next/image'
import { Container, Title, TitleContent, CardContent, ImageCardWrap } from 'components/Card/styles'

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
				<Image
					src={props.image}
					alt={`${props.title}
					image`}
					objectFit='cover'
					width='100%'
					height='100%'
				/>
			</ImageCardWrap>
			<CardContent>
				<TitleContent>
					<Title>
						{props.title}
					</Title>
				</TitleContent>
				<Author {...props.author} style={{ marginTop: 16 }} />
			</CardContent>
		</Container>
	)
}
