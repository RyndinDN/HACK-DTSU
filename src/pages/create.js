import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Hr, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import { MdMic, MdHeadset, MdSettings } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"create"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box display="flex" width="100vw" height="100vh">
			<Box
				color="white"
				display="flex"
				width="350px"
				height="100%"
				background="black"
				flex-direction="column"
				align-items="center"
				position="sticky"
				top="top"
			>
				<Link href="/" color="inherit" text-decoration="none" cursor="pointer">
					<Box
						height="30px"
						background="url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/logo.png?v=2021-03-20T15:17:40.537Z) 0% 0% /contain no-repeat"
						border="none"
						width="150px"
						margin="50px 30px 40px"
					/>
				</Link>
				<Box
					padding="0 25px"
					flex-direction="column"
					align-items="center"
					display="flex"
					font="16px --fontFamily-googleMontserratAlternates"
				>
					<Text align-self="flex-start" margin="16px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
						<Link href="/channels" color="inherit" text-decoration="none" cursor="pointer">
							КАНАЛЫ
						</Link>
					</Text>
					<Text align-self="flex-start" margin="16px 0px 30px 0px">
						Вы не присоединились{" "}
						<br />
						ни к одному каналу{" "}
					</Text>
					<Text align-self="flex-start" margin="0 0px 16px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
						ПОДПИСКИ
					</Text>
					<Box position="relative" display="flex" align-items="center" width="100%">
						<Box
							border-radius="20px"
							margin-right="10px"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/1_3.png?v=2021-03-20T20:47:13.861Z) 0% 0% /cover no-repeat padding-box"
							width="30px"
							height="30px"
						/>
						<Text margin="10px 0px 10px 0px">
							Максим Демьян
						</Text>
						<Box
							position="absolute"
							paddind-left="10px"
							width="5px"
							height="5px"
							border="2px solid #4bb34b"
							border-radius="50%"
							background="#4bb34b"
							min-width="5px"
							min-height="5px"
							left="200px"
						/>
					</Box>
					<Box position="relative" display="flex" align-items="center" width="100%">
						<Box
							width="30px"
							height="30px"
							border-radius="50%"
							margin-right="10px"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/1_2.png?v=2021-03-20T20:49:52.691Z) 0% 0% /cover no-repeat padding-box"
						/>
						<Text margin="10px 0px 10px 0px">
							Рина Ли
						</Text>
						<Box
							position="absolute"
							paddind-left="10px"
							width="5px"
							height="5px"
							border="2px solid #4bb34b"
							border-radius="50%"
							background="#4bb34b"
							min-width="5px"
							min-height="5px"
							left="200px"
						/>
					</Box>
					<Box position="relative" display="flex" align-items="center" width="100%">
						<Box
							width="30px"
							height="30px"
							border-radius="50%"
							margin-right="10px"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/1_4.png?v=2021-03-20T20:53:12.418Z) 0% 0% /cover no-repeat padding-box"
						/>
						<Text margin="10px 0px 10px 0px">
							Илья Павленко
						</Text>
						<Box
							position="absolute"
							paddind-left="10px"
							width="5px"
							height="5px"
							border="2px solid #4bb34b"
							border-radius="50%"
							background="#4bb34b"
							min-width="5px"
							min-height="5px"
							left="200px"
						/>
					</Box>
					<Box position="absolute" bottom="50px">
						<Box display="flex" justify-content="center" align-items="center">
							<Box
								width="50px"
								height="50px"
								border-radius="50%"
								margin-right="10px"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/1_1.png?v=2021-03-20T20:55:09.833Z) 0% 0% /cover no-repeat padding-box"
							/>
							<Text margin="10px 0px 10px 0px">
								Денис Рыбкин
							</Text>
						</Box>
						<Hr background="1px solid rgba(255, 255, 255, 0.5)" />
						<Box display="flex" justify-content="center" align-items="center">
							<Box
								margin="0px 10px 0px 10px"
								background="rgba(255, 255, 255, 0.15)"
								border-radius="5px"
								width="30px"
								height="30px"
								display="flex"
								justify-content="center"
								align-items="center"
							>
								<Icon category="md" icon={MdMic} />
							</Box>
							<Box
								margin="0px 10px 0px 10px"
								background="rgba(255, 255, 255, 0.15)"
								border-radius="5px"
								width="30px"
								height="30px"
								display="flex"
								justify-content="center"
								align-items="center"
							>
								<Icon category="md" icon={MdHeadset} />
							</Box>
							<Box
								margin="0px 10px 0px 10px"
								background="rgba(255, 255, 255, 0.15)"
								border-radius="5px"
								width="30px"
								height="30px"
								display="flex"
								justify-content="center"
								align-items="center"
							>
								<Icon category="md" icon={MdSettings} />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				width="100%"
				height="100%"
				display="flex"
				flex-direction="column"
				box-shadow="--l"
			>
				<Text color="#2C94FF" font="600 30px --fontFamily-googleMontserratAlternates" margin="50px 30px 15px 50px">
					СОЗДАТЬ ПОДКАСТ
				</Text>
				<Box flex-direction="column" margin="15px 30px 15px 50px" display="flex" justify-content="flex-start">
					<Text font="600 30px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						НАЗВАНИЕ ПОДКАСТА
					</Text>
					<Input
						width="400px"
						border-bottom="3px solid #2C94FF"
						background-color="transparent"
						placeholder="Введите название"
						padding-left="0"
						placeholder-font="normal normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						font="normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						border-width="0px"
					/>
				</Box>
				<Box flex-direction="column" margin="10px 30px 30px 50px" display="flex" justify-content="flex-start">
					<Text font="600 30px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						ОПИСАНИЕ
					</Text>
					<Box
						margin="20px 0 30px"
						background="#ececec"
						width="725px"
						height="209px"
						border="1px solid rgba(0, 0, 0, 0.2)"
						box-sizing="border-box"
					>
						<Input
							width="400px"
							background-color="transparent"
							placeholder="Опишите свой подкаст"
							padding-left="10px"
							placeholder-font="normal normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
							font="normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
							border-width="0px"
						/>
					</Box>
					<Link href="/podcaster" color="inherit" text-decoration="none" cursor="pointer">
						<Button
							width="300px"
							font-weight="bold"
							margin="0px 0px 30px 0px"
							background="#2C94FF"
							border-radius="10px"
						>
							СОЗДАТЬ
						</Button>
					</Link>
				</Box>
			</Box>
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