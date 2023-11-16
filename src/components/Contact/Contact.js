import { Button, FormControl, Heading, Input, Stack, View, WarningOutlineIcon } from "native-base";
import React from "react";

function Contact() {
  return (
    <View mt={10}>
        <Heading textAlign="center" fontStyle="italic" mb={2}>Geri Bildirim Yap</Heading>
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <FormControl isRequired isInvalid>
          <Input size="xl" placeholder="Adınız" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Bu alan zorunludur
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid>
          <Input size="xl" placeholder="Telefon Numarınız" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Bu alan zorunludur
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid>
          <Input size="xl" placeholder="Açıklama Ekleyeniz" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Bu alan zorunludur
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
            <Button colorScheme="green">Gönder</Button>
        </FormControl>
      </Stack>
    </View>
  );
}

export default Contact;
