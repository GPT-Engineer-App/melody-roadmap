import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh" textAlign="center" bg="gray.800" color="white">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            The Rockers Band
          </Heading>
          <Text fontSize="xl">Join us on our worldwide tour and experience the thrill of live music!</Text>
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" size="lg">
            Get Tickets
          </Button>
        </VStack>

        <Image src="https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2V8ZW58MHx8fHwxNzEwMDM0ODg3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Concert stage" mt={10} borderRadius="md" shadow="lg" />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={16}>
        <Box>
          <Heading as="h2" size="xl" mb={6}>
            Upcoming Shows
          </Heading>
          <Text mb={4}>New York - Madison Square Garden</Text>
          <Text mb={4}>Los Angeles - The Forum</Text>
          <Text mb={4}>London - O2 Arena</Text>
          <Link color="teal.500">
            View all tour dates <FaMusic />
          </Link>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={6}>
            Follow Us
          </Heading>
          <Flex justify="center" gap={4}>
            <Link href="https://instagram.com/therockersband" isExternal>
              <FaInstagram size="2em" />
            </Link>
            <Link href="https://twitter.com/therockersband" isExternal>
              <FaTwitter size="2em" />
            </Link>
            <Link href="https://facebook.com/therockersband" isExternal>
              <FaFacebookF size="2em" />
            </Link>
          </Flex>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
