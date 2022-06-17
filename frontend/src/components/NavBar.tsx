import { Avatar,  Container, Heading, HStack, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { userContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user,balance } = useContext(userContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <HStack bg="white" p={5} borderBottom={"1px solid"} borderColor="blackAlpha.300" mb={10}>
      <Container maxW={"container.lg"}>
        <HStack w="100%" justifyContent={"space-between"}>
            <Heading size={"sm"}>{balance.substring(0,5)} ETH</Heading>
              <HStack><Avatar /> <Text>{user.substring(0, 5) + " ... " + user.substring(user.length-5,user.length)}</Text></HStack>
        </HStack>
      </Container>
    </HStack>
  );
};

export default NavBar;
