import React, { CSSProperties } from 'react'
import Author from 'components/Author'
import Image from 'next/image'
import { Container, Title, TitleContent, CardContent, ImageCardWrap } from 'src/components/Card/styles'
import Chip from '../Chip'

interface ICardProps {
	title: string
	image: string
	author: {
		name: string
		date: string
		image: string
	}
	style?: CSSProperties | undefined
}

export default function Card(props: ICardProps) {
	return (
		<Container style={props.style}>
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
				<Chip style={{ marginTop: 12 }}>Video maker</Chip>
			</CardContent>
		</Container>
	)
}
