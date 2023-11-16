import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  VStack,
  View,
  WarningOutlineIcon,
} from "native-base";
import React from "react";

function Reservation() {
  return (
    <Center>
      <Heading mb={3} textAlign="center" fontStyle="italic" marginTop="2">
        Randevu Alın
      </Heading>
      <VStack w="500" space={4} alignItems="center">
        <FormControl maxW="300" isRequired isInvalid>
          <FormControl.Label>Tarih Seçiniz</FormControl.Label>
          <RNDateTimePicker style={{ width: 100 }} value={new Date()} />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Bu alan zorunludur
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl maxW="300" isRequired isInvalid>
          <FormControl.Label>Berber Seçiniz</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Berber Seçiniz"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Yakup" value="Yakup" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Bu alan zorunludur
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl maxW="300" isRequired isInvalid>
          <FormControl.Label>Gün Seçiniz</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Gün Seçiniz"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Pazartesi" value="Pazartesi" />
            <Select.Item label="Salı" value="Salı" />
            <Select.Item label="Çarşamba" value="Çarşamba" />
            <Select.Item label="Perşembe" value="Perşembe" />
            <Select.Item label="Cuma" value="Cuma" />
            <Select.Item label="Cumartesi" value="Cumartesi" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Bu alan zorunludur
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl maxW="300">
          <Button colorScheme="orange">Randevu Alın</Button>
        </FormControl>
      </VStack>
    </Center>
  );
}

export default Reservation;
