import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Profile } from "../../components/profile/profile";

export const ProfilePage = () => {
  const [showEdit, setShowEdit] = useState(false)

  const toggleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  return <Box>
    <Profile />
  </Box>;
};
