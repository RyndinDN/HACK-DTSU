import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Text, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			position="relative"
			background="#000000 url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/FONNN.png?v=2021-03-20T19:01:01.464Z) 0% 0% /auto no-repeat fixed"
			background-position="right"
			max-widht="1000px"
			display="flex"
			widht="1000px"
			height="100vh"
			min-height="100vh"
			padding="0 0 0 0"
		>
			<Box
				z-index="2"
				display="flex"
				justify-content="space-between"
				flex-direction="row"
				md-flex-direction="column"
				min-height="fit-content"
				padding-top="3%"
			>
				<Box
					display="flex"
					justify-content="space-between"
					width="100%"
					padding-left="50px"
					padding-right="50px"
				>
					<Box
						height="50px"
						background="url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/logo.png?v=2021-03-20T15:17:40.537Z) 0% 0% /contain no-repeat"
						border="none"
						color="rgba(0, 0, 0, 0)"
						align-self="flex-start"
						align-items="center"
						width="300px"
					/>
					<Button
						align-self="flex-end"
						border="4px solid #2C94FF"
						border-radius="10px"
						font="normal 300 16px/1.5 --fontFamily-googleMontserratAlternates"
						background="rgba(0, 119, 204, 0)"
						width="200px"
						height="fit-content"
					>
						Вход
					</Button>
				</Box>
			</Box>
			<Box
				z-index="2"
				display="flex"
				flex-derection="row"
				height="100%"
				align-items="center"
				background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
				justify-content="center"
			>
				<Box
					padding="50px 50px 50px 50px"
					background="rgba(202, 229, 255, 0.89)"
					color="--dark"
					display="flex"
					flex-direction="column"
					align-items="center"
					max-width="300px"
					margin="0px 50px 0px 0px"
					border-radius="20px"
				>
					<Text
						font="600 30px/120% --fontFamily-googleMontserratAlternates"
						margin="0 0px 16px 0px"
						display="flex"
						justify-content="center"
						align-items="center"
						text-align="center"
					>
						Присоединяйся{" "}
						<br />
						к сообществу подкастеров{" "}
						<br />
						со всего мира
					</Text>
					<Input
						max-width="100%"
						min-width="100%"
						border-bottom="5px solid white"
						background-color="transparent"
						placeholder="Имя"
						padding-left="0"
						placeholder-font="normal normal 500 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						font="normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						placeholder-color="grey"
						border-width="0px"
					/>
					<Input
						max-width="100%"
						min-width="100%"
						border-bottom="5px solid white"
						background-color="transparent"
						placeholder="E-mail"
						padding-left="0"
						placeholder-font="normal normal 500 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						font="normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						placeholder-color="grey"
						border-width="0px"
					/>
					<Input
						max-width="100%"
						min-width="100%"
						border-bottom="5px solid white"
						background-color="transparent"
						placeholder="Пароль"
						padding-left="0"
						placeholder-font="normal normal 500 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						font="normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						placeholder-color="grey"
						margin="10px 0px 0px 0px"
						border-width="0px"
					/>
					<Button margin="30px 0px 0px 0px" width="fit-contant" font="normal 300 16px/1.5 --fontFamily-googleMontserratAlternates">
						Зарегистрироваться
					</Button>
				</Box>
			</Box>
		</Section>
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
	</Theme>;
});