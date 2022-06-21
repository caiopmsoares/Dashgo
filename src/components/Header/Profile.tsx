import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Caio Macedo</Text>
				<Text color="gray.300" fontSize="small">
					caiop@hotmail.com
				</Text>
			</Box>
			<Avatar
				size="md"
				name="Caio Pierre"
				src="https://github.com/caiopmsoares.png"
			/>
		</Flex>
	);
}
