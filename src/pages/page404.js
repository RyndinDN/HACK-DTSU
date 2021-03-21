import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Ошибка
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			display="flex"
			width="100vw"
			height="100vh"
			flex-direction="column"
			justify-content="center"
			align-items="center"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1562662906-dcd1a6198f28?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
		>
			<Text
				color="white"
				font="600 30px --fontFamily-googleMontserratAlternates"
				margin="50px 30px 0 50px"
				display="flex"
				justify-content="center"
			>
				Ошибка 404
			</Text>
			<Text
				color="white"
				font="600 30px --fontFamily-googleMontserratAlternates"
				margin="20px 30px 50px 50px"
				display="flex"
				justify-content="center"
			>
				К сожалению, такая страница не существует
			</Text>
			<Link href="/" color="inherit" text-decoration="none" cursor="pointer">
				<Button
					width="300px"
					font-weight="bold"
					margin="0px 0px 30px 0px"
					background="#2C94FF"
					border-radius="10px"
				>
					ПЕРЕЙТИ НА ГЛАВНУЮ
				</Button>
			</Link>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script src={"https://cdn.jsdelivr.net/npm/peerjs@1.3.2/dist/peerjs.js"} place={"endOfHead"} rawKey={"60572be8a9d8f33018a08721"} />
		</RawHtml>
	</Theme>;
});