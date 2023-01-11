import React from 'react'
import Card from '../Card'
import { TrendsContainer } from './styles'

export default function Trends() {
	return (
		<TrendsContainer>
			<section style={{
				gap: 12,
			}}>
				<Card
					author={{
						name: 'Michael Scott',
						date: '03 sep 2022',
						image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
					}}
					title='Using Photoshop to improve photos'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat justo quis ligula rhoncus, sit amet bibendum urna dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras congue placerat ante eu venenatis. Mauris bibendum risus purus, vel aliquet metus cursus in. Aenean quis vulputate...'
					image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
					style={{ marginBottom: 12 }}
				/>
				<Card
					author={{
						name: 'Michael Scott',
						date: '03 sep 2022',
						image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
					}}
					title='How to improve your photos using your cellphone'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat justo quis ligula rhoncus, sit amet bibendum urna dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras congue placerat ante eu venenatis. Mauris bibendum risus purus, vel aliquet metus cursus in. Aenean quis vulputate...'
					image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
					style={{ marginBottom: 12 }}
				/>
				<Card
					author={{
						name: 'Michael Scott',
						date: '03 sep 2022',
						image: 'https://images.unsplash.com/photo-1662225329467-09ab9ce0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80'
					}}
					title='Learn how to use camera lens'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat justo quis ligula rhoncus, sit amet bibendum urna dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras congue placerat ante eu venenatis. Mauris bibendum risus purus, vel aliquet metus cursus in. Aenean quis vulputate...'
					image='https://images.unsplash.com/photo-1662228733856-9d74f97804a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
				/>
			</section>
		</TrendsContainer>
	)
}
