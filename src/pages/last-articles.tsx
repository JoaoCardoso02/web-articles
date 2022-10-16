import Head from 'next/head'
import React from 'react'
import SvgBackground from 'src/components/SvgBackground'

export default function LastArticles() {
	return (
		<div>
			<Head>
        <title>Last Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<SvgBackground />
		</div>
	)
}
