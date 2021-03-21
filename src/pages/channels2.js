import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Button, Hr, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { MdMic, MdHeadset, MdSettings, MdPeople } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"channels2"} />
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
				<Box
					height="30px"
					background="url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/logo.png?v=2021-03-20T15:17:40.537Z) 0% 0% /contain no-repeat"
					border="none"
					width="150px"
					margin="50px 30px 40px"
				/>
				<Box
					padding="0 25px"
					flex-direction="column"
					align-items="center"
					display="flex"
					font="16px --fontFamily-googleMontserratAlternates"
				>
					<Text align-self="flex-start" margin="16px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
						КАНАЛЫ
					</Text>
					<Text align-self="flex-start">
						Вы не присоединились{" "}
						<br />
						ни к одному каналу{" "}
					</Text>
					<Text margin="16px 0px 30px 0px">
						Хотите создать канал?
					</Text>
					<Button font-weight="bold" margin="0px 0px 30px 0px" background="#2C94FF" border-radius="10px">
						СОЗДАТЬ
					</Button>
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
				<Box margin="50px 30px 15px 50px" display="flex" justify-content="flex-start" align-items="center">
					<Text color="#2C94FF" font="600 30px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						ПОДКАСТ
					</Text>
				</Box>
				<Box
					max-width="1000px"
					margin="15px 30px 10px 50px"
					display="flex"
					justify-content="flex-start"
					align-items="center"
				>
					<Text font="600 30px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						С Вами снова РАДИО БУМ и в эфире подкаст #4
					</Text>
				</Box>
				<Box
					margin="10px 30px 30px 50px"
					display="flex"
					justify-content="flex-start"
					align-items="center"
					max-width="1000px"
				>
					<Text font="600 18px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						На этот раз поговорим о том, как вообще победить лень и стать частью счастливого и успешного общества.
					</Text>
				</Box>
				{" "}
				<Box margin="10px 30px 30px 50px" position="relative" display="flex" align-items="center">
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/SHL-2985-X-WHITE-6-9.jpg?v=2021-03-20T22:06:45.830Z) 0% 0% /cover no-repeat padding-box"
						width="100px"
						height="100px"
						display="flex"
					/>
					<Box>
						<Text color="#2C94FF" margin="10px 0px 5px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
							Введущий:
						</Text>
						<Text margin="5px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
							Артем Лебедев
						</Text>
					</Box>
				</Box>
				<Box display="flex">
					<Text margin="0px 15px 30px 50px" font="500 20px &quot;Montserrat Alternates&quot;, sans-serif" display="flex">
						Слушают:
					</Text>
					{" "}
					<Text color="#2C94FF" margin="0 5px 0 5px" font="500 20px &quot;Montserrat Alternates&quot;, sans-serif" display="flex">
						125{" "}
						<Icon category="md" icon={MdPeople} margin="0px 5px 0px 5px" />
					</Text>
					{" "}
				</Box>
				{" "}
				<Box
					max-width="1000px"
					margin="10px 30px 30px 50px"
					background="#ececec"
					width="830px"
					height="209px"
					border="1px solid rgba(0, 0, 0, 0.2)"
					box-sizing="border-box"
					display="flex"
					flex-direction="row"
					justify-content="flex-start"
					flex-wrap="wrap"
					padding="10px"
					border-radius="20px"
				>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
					<Box
						border-radius="50%"
						margin-right="10px"
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover no-repeat padding-box"
						width="70px"
						height="70px"
						display="flex"
						background-position="center"
					/>
				</Box>
				<Button
					width="300px"
					font-weight="bold"
					margin="0px 30px 30px 50px"
					background="#2C94FF"
					border-radius="10px"
				>
					ПРИСОЕДИНИТЬСЯ
				</Button>
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
	</Theme>;
});