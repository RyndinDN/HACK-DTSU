import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Button, Hr, Icon, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import { MdMic, MdHeadset, MdSettings, MdSearch, MdPeople, MdMessage } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"channels"} />
		<Helmet>
			<title>
				Каналы
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
				<Box margin="50px 30px 20px 50px" display="flex" justify-content="flex-start" align-items="center">
					<Text color="#2C94FF" font="600 30px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						КАНАЛЫ
					</Text>
					<Input
						width="281px"
						border-bottom="3px solid #2C94FF"
						background-color="transparent"
						placeholder="ПОИСК"
						padding-left="0"
						placeholder-font="normal normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						font="normal 500 16px/1.5 --fontFamily-googleMontserratAlternates"
						placeholder-color="#2C94FF"
						margin="0 0 0px 20px"
						border-width="0px"
					/>
					<Icon
						category="md"
						icon={MdSearch}
						color="#2C94FF"
						margin-left="-30px"
						flex-direction="row"
					/>
				</Box>
				<Box margin="0 50px" display="flex" justify-content="flex-start" align-items="center">
					<Text font="800 18px --fontFamily-googleMontserratAlternates">
						Популярные теги:
					</Text>
					<Text font="600 16px --fontFamily-googleMontserratAlternates" color="#1A1313" margin="0 5px 0 20px">
						#ИГРЫ
					</Text>
					<Text font="600 16px --fontFamily-googleMontserratAlternates" color="#1A1313" margin="0 5px 0 5px">
						#МУЗЫКА
					</Text>
					<Text font="600 16px --fontFamily-googleMontserratAlternates" color="#1A1313" margin="0 5px 0 5px">
						#СПОРТ
					</Text>
					<Text font="600 16px --fontFamily-googleMontserratAlternates" color="#1A1313" margin="0 5px 0 5px">
						#РАЗВЛЕЧЕНИЯ
					</Text>
				</Box>
				<Box margin="0 30px 30px 50px" display="flex" justify-content="flex-start" align-items="center">
					<Text color="#2C94FF" font="600 18px --fontFamily-googleMontserratAlternates" margin="0 0px 0 0px">
						ПОПУЛЯРНЫЕ ПОДКАСТЫ
					</Text>
				</Box>
				<Box
					margin="0 30px 20px 50px"
					display="flex"
					flex-wrap="wrap"
					justify-content="flex-start"
					align-items="center"
					font="16px --fontFamily-googleMontserratAlternates"
				>
					<Link href="/channel" color="inherit" text-decoration="none" cursor="pointer">
						<Box
							margin="0 20px 20px 0"
							width="400px"
							height="115px"
							border="1px solid grey"
							border-radius="20px"
							border-color="rgba(128, 128, 128, 0.08)"
							box-shadow="--l"
							padding="15px 15px"
							background-color="grey"
							background="rgba(2, 19, 255, 0.09)"
						>
							<Text color="#2C94FF" margin="0 0px 10px 0px" font="600 18px &quot;Montserrat Alternates&quot;, sans-serif" height="50px">
								Как поставить цель и не сбиться с пути?
							</Text>
							<Box position="relative" display="flex" align-items="center">
								<Box
									border-radius="50%"
									margin-right="10px"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/1_3.png?v=2021-03-20T20:47:13.861Z) 0% 0% /cover no-repeat padding-box"
									width="60px"
									height="60px"
								/>
								<Text margin="10px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
									Максим
						Демьян
								</Text>
								<Box
									position="absolute"
									bottom="0"
									right="0"
									display="flex"
									justify-content="center"
									align-items="center"
									color="#2C94FF"
									flex-direction="row"
								>
									<Text margin="0 5px 0 0px">
										200
									</Text>
									<Icon category="md" icon={MdPeople} margin="0px 5px 0px 0px" />
									{" "}
									<Text margin="0 5px 0 0px">
										10
									</Text>
									{" "}
									<Icon category="md" icon={MdMessage} margin="0px 0 0px 0px" />
								</Box>
							</Box>
						</Box>
					</Link>
					<Link href="/channel" color="inherit" text-decoration="none" cursor="pointer">
						<Box
							margin="0 20px 20px 0"
							width="400px"
							height="115px"
							border="1px solid grey"
							border-radius="20px"
							border-color="rgba(128, 128, 128, 0.08)"
							box-shadow="--l"
							padding="15px 15px"
							background-color="grey"
							background="rgba(2, 19, 255, 0.09)"
						>
							<Text color="#2C94FF" margin="0 0px 10px 0px" font="600 18px &quot;Montserrat Alternates&quot;, sans-serif" height="50px">
								Поговорим о звездах
							</Text>
							<Box position="relative" display="flex" align-items="center">
								<Box
									border-radius="50%"
									margin-right="10px"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/R-16145634-1604210743-3442.png.jpg?v=2021-03-20T22:03:01.049Z) 0% 0% /cover no-repeat padding-box"
									width="60px"
									height="60px"
								/>
								<Text margin="10px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
									Алина Вори
								</Text>
								<Box
									position="absolute"
									bottom="0"
									right="0"
									display="flex"
									justify-content="center"
									align-items="center"
									color="#2C94FF"
									flex-direction="row"
								>
									<Text margin="0 5px 0 0px">
										150
									</Text>
									<Icon category="md" icon={MdPeople} margin="0px 5px 0px 0px" />
									{" "}
									<Text margin="0 5px 0 0px">
										25
									</Text>
									{" "}
									<Icon category="md" icon={MdMessage} margin="0px 0 0px 0px" />
								</Box>
							</Box>
						</Box>
					</Link>
					<Link href="/channel" color="inherit" text-decoration="none" cursor="pointer">
						<Box
							margin="0 20px 20px 0"
							width="400px"
							height="115px"
							border="1px solid grey"
							border-radius="20px"
							border-color="rgba(128, 128, 128, 0.08)"
							box-shadow="--l"
							padding="15px 15px"
							background-color="grey"
							background="rgba(2, 19, 255, 0.09)"
						>
							<Text color="#2C94FF" margin="0 0px 10px 0px" font="600 18px &quot;Montserrat Alternates&quot;, sans-serif" height="50px">
								С Вами снова РАДИО БУМ и в эфире подкаст #4
							</Text>
							<Box position="relative" display="flex" align-items="center">
								<Box
									border-radius="50%"
									margin-right="10px"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/SHL-2985-X-WHITE-6-9.jpg?v=2021-03-20T22:06:45.830Z) 0% 0% /cover no-repeat padding-box"
									width="60px"
									height="60px"
								/>
								<Text margin="10px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
									Артем Лебедев
								</Text>
								<Box
									position="absolute"
									bottom="0"
									right="0"
									display="flex"
									justify-content="center"
									align-items="center"
									color="#2C94FF"
									flex-direction="row"
								>
									<Text margin="0 5px 0 0px">
										125
									</Text>
									<Icon category="md" icon={MdPeople} margin="0px 5px 0px 0px" />
									{" "}
									<Text margin="0 5px 0 0px">
										20
									</Text>
									{" "}
									<Icon category="md" icon={MdMessage} margin="0px 0 0px 0px" />
								</Box>
							</Box>
						</Box>
					</Link>
					{" \n\t\t\t "}
					<Link href="/channel" color="inherit" text-decoration="none" cursor="pointer">
						<Box
							margin="0 20px 20px 0"
							width="400px"
							height="115px"
							border="1px solid grey"
							border-radius="20px"
							border-color="rgba(128, 128, 128, 0.08)"
							box-shadow="--l"
							padding="15px 15px"
							background-color="grey"
							background="rgba(2, 19, 255, 0.09)"
						>
							<Text color="#2C94FF" margin="0 0px 10px 0px" font="600 18px &quot;Montserrat Alternates&quot;, sans-serif" height="50px">
								Проблемы роста компании в геймдеве
							</Text>
							<Box position="relative" display="flex" align-items="center">
								<Box
									border-radius="50%"
									margin-right="10px"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/1_4.png?v=2021-03-20T20:53:12.418Z) 0% 0% /cover no-repeat padding-box"
									width="60px"
									height="60px"
								/>
								<Text margin="10px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
									Илья Павленко
								</Text>
								<Box
									position="absolute"
									bottom="0"
									right="0"
									display="flex"
									justify-content="center"
									align-items="center"
									color="#2C94FF"
									flex-direction="row"
								>
									<Text margin="0 5px 0 0px">
										120
									</Text>
									<Icon category="md" icon={MdPeople} margin="0px 5px 0px 0px" />
									{" "}
									<Text margin="0 5px 0 0px">
										45
									</Text>
									{" "}
									<Icon category="md" icon={MdMessage} margin="0px 0 0px 0px" />
								</Box>
							</Box>
						</Box>
					</Link>
					<Link href="/channel" color="inherit" text-decoration="none" cursor="pointer">
						<Box
							margin="0 20px 20px 0"
							width="400px"
							height="115px"
							border="1px solid grey"
							border-radius="20px"
							border-color="rgba(128, 128, 128, 0.08)"
							box-shadow="--l"
							padding="15px 15px"
							background-color="grey"
							background="rgba(2, 19, 255, 0.09)"
						>
							<Text color="#2C94FF" margin="0 0px 10px 0px" font="600 18px &quot;Montserrat Alternates&quot;, sans-serif" height="50px">
								Подкаст #23{" "}
								<br />
								Актуал лучше Классики?
							</Text>
							<Box position="relative" display="flex" align-items="center">
								<Box
									border-radius="50%"
									margin-right="10px"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/3098a9732c7aedfe50c7b017afd5915c.jpg?v=2021-03-20T22:11:56.628Z) 0% 0% /cover no-repeat padding-box"
									width="60px"
									height="60px"
								/>
								<Text margin="10px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
									ОРК ПОДКАСТЕР
								</Text>
								<Box
									position="absolute"
									bottom="0"
									right="0"
									display="flex"
									justify-content="center"
									align-items="center"
									color="#2C94FF"
									flex-direction="row"
								>
									<Text margin="0 5px 0 0px">
										120
									</Text>
									<Icon category="md" icon={MdPeople} margin="0px 5px 0px 0px" />
									{" "}
									<Text margin="0 5px 0 0px">
										225
									</Text>
									{" "}
									<Icon category="md" icon={MdMessage} margin="0px 0 0px 0px" />
								</Box>
							</Box>
						</Box>
					</Link>
					{" \n\t\t\t "}
					<Link href="/channel" color="inherit" text-decoration="none" cursor="pointer">
						<Box
							margin="0 20px 20px 0"
							width="400px"
							height="115px"
							border="1px solid grey"
							border-radius="20px"
							border-color="rgba(128, 128, 128, 0.08)"
							box-shadow="--l"
							padding="15px 15px"
							background-color="grey"
							background="rgba(2, 19, 255, 0.09)"
						>
							<Text color="#2C94FF" margin="0 0px 10px 0px" font="600 18px &quot;Montserrat Alternates&quot;, sans-serif" height="50px">
								Феминизм в современном мире
							</Text>
							<Box position="relative" display="flex" align-items="center">
								<Box
									border-radius="50%"
									margin-right="10px"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60560971f2b826001ebe87fd/images/848301af94386ebabd5d9544eb5357ed.jpg?v=2021-03-20T22:16:46.999Z) 0% 0% /cover no-repeat padding-box"
									width="60px"
									height="60px"
								/>
								<Text margin="10px 0px 10px 0px" font="500 18px &quot;Montserrat Alternates&quot;, sans-serif">
									Марина Шарина
								</Text>
								<Box
									position="absolute"
									bottom="0"
									right="0"
									display="flex"
									justify-content="center"
									align-items="center"
									color="#2C94FF"
									flex-direction="row"
								>
									<Text margin="0 5px 0 0px">
										100
									</Text>
									<Icon category="md" icon={MdPeople} margin="0px 5px 0px 0px" />
									{" "}
									<Text margin="0 5px 0 0px">
										500
									</Text>
									{" "}
									<Icon category="md" icon={MdMessage} margin="0px 0 0px 0px" />
								</Box>
							</Box>
						</Box>
					</Link>
					{" "}
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