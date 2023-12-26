import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  FormControl,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  View,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReservationService from "../../Redux/services/reservationService";
import validationSchema from "./validations";
import { getList2 } from "../../Redux/actions/barberActions";
import { getList4 } from "../../Redux/actions/hourActions";
import { add } from "../../Redux/actions/reservationActions";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormik } from "formik";
function Reservation() {
  const dispacth = useDispatch();
  const service = new ReservationService();
  const [userId, setUserId] = useState("");
  const [barberId, setBarberId] = useState(0);
  const { barbers } = useSelector((state) => state.barber);
  const { hours } = useSelector((state) => state.hour);
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        barberId: 0,
        hourId: "",
        userId: 0,
        description: "",
        status: false,
        date: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        const result = await service.check(
          values.barberId,
          values.hourId,
          values.date
        );
        console.log(result);
      },
    });
  useEffect(() => {
    dispacth(getList2());
    dispacth(getList4());
    AsyncStorage.getItem("userId").then((value) => {
      setUserId(value);
    });
  }, []);
  console.log(barberId);
  return (
    <Center>
      <Heading mb={3} textAlign="center" fontStyle="italic" marginTop="2">
        Randevu Alın
      </Heading>  
      <VStack w="500" space={4} alignItems="center">
        <FormControl>
          <Input
            h="1"
            w="1"
            isReadOnly
            isDisabled
            id="userId"
            name="userId"
            onChangeText={handleChange("userId")}
            value={(values.userId = userId)}
            onBlur={handleBlur("userId")}
          />
        </FormControl>
        <FormControl maxW="300">
          <FormControl.Label>Tarih Seçiniz</FormControl.Label>
          <RNDateTimePicker
            id="date"
            name="date"
            onChangeText={handleChange("date")}
            onBlur={handleBlur}
            style={{ width: 100 }}
            value={(values.date = new Date())}
          />
        </FormControl>

        <FormControl maxW="300">
          <FormControl.Label>Berber Seçiniz</FormControl.Label>
          <Select
            value={(values.barberId = barberId)}
            id="barberId"
            name="barberId"
            onChangeText={handleChange("barberId")}
            onBlur={handleBlur("barberId")}
            minWidth="200"
            accessibilityLabel="Berber Seçiniz"
            placeholder="Berber Seçiniz"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            {barbers?.map((barber) => (
              <Select.Item  label={barber?.userName} value={barber.id}>
                
              </Select.Item>
            ))}
          </Select>
          {errors.barberId && touched.barberId && (
            <Text style={{ color: "red" }}>{errors.barberId}</Text>
          )}
        </FormControl>
        <FormControl maxW="300">
          <FormControl.Label>Saat Seçiniz</FormControl.Label>
          <Select
            value={values.hourId}
            id="hourId"
            name="hourId"
            onChangeText={handleChange("hourId")}
            onBlur={handleBlur("hourId")}
            minWidth="200"
            accessibilityLabel="Saat Seçiniz"
            placeholder="Saat Seçiniz"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            {hours?.map((hour) => (
              <Select.Item label={hour?.hour} value={hour?.id} />
            ))}
          </Select>
          {errors.hourId && touched.hourId && (
            <Text style={{ color: "red" }}>{errors.hourId}</Text>
          )}
        </FormControl>
        <FormControl maxW="300">
          <FormControl.Label>Not Ekleyeniz</FormControl.Label>
          <Input
            id="description"
            name="description"
            onChangeText={handleChange("description")}
            value={values.description}
            onBlur={handleBlur("description")}
            placeholder="Not Ekleyebilirsiniz..."
          />
          {errors.description && touched.description && (
            <Text style={{ color: "red" }}>{errors.description}</Text>
          )}
        </FormControl>
        <FormControl maxW="300">
          <Button onPress={handleSubmit} colorScheme="orange">
            Randevu Alın
          </Button>
        </FormControl>
      </VStack>
    </Center>
  );
}

export default Reservation;
