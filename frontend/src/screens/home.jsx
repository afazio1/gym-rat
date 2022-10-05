import { Stack, Button } from "@chakra-ui/react";

const Home = () => {
    return (
        <>
            <h1>Gym Rat</h1>
            <Stack direction='row' spacing={4} align='center'>
                <Button bg='black' color="white">
                    Join Now
                </Button>
                <Button colorScheme='black' variant='outline'>
                    Sign In
                </Button>
            </Stack>
        </>
    )
}

export default Home;