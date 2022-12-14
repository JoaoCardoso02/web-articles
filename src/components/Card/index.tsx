import React, { CSSProperties } from 'react'
import Author from 'components/Author'
import Image from 'next/image'
import { Container, Title, TitleContent, CardContent, ImageCardWrap, DescriptionContent, Description, CardFooter } from 'src/components/Card/styles'
import Chip from '../Chip'

interface ICardProps {
	title: string
	description: string
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
					alt={`${props.title} image`}
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
				<DescriptionContent>
					<Description>
						{props.description}
					</Description>
				</DescriptionContent>
				<CardFooter>
					<Author {...props.author} style={{ marginRight: 48 }} />
					<Chip style={{ marginRight: 4 }}>Video maker</Chip>
					<Chip style={{ marginRight: 4 }}>Video maker</Chip>
				</CardFooter>
			</CardContent>
		</Container>
	)
}
