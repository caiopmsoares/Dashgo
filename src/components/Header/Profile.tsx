import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Caio Macedo</Text>
					<Text color="gray.300" fontSize="small">
						caiop@hotmail.com
					</Text>
				</Box>
			)}
			<Avatar
				size="md"
				name="Caio Pierre"
				src="https://github.com/caiopmsoares.png"
			/>
		</Flex>
	);
}
