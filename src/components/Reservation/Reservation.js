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
  useToast,
} from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReservationService from "../../Redux/services/reservationService";
import { getList2 } from "../../Redux/actions/barberActions";
import { getList4 } from "../../Redux/actions/hourActions";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormik } from "formik";
import DatePicker from "react-native-modern-datepicker";
import { add } from "../../Redux/actions/reservationActions";
function Reservation() {
  const dispacth = useDispatch();
  const [isBarberId, setIsBarberId] = useState("");
  const service = new ReservationService();
  const [userId, setUserId] = useState(0);
  const [barberId, setBarberId] = useState(0);
  const [hourId, setHourId] = useState(0);
  const { barbers } = useSelector((state) => state.barber);
  const { hours } = useSelector((state) => state.hour);
  const [selectedDate, setSelectedDate] = useState("");
  const toast = useToast();
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        barberId: 0,
        hourId: 0,
        userId: 0,
        description: "",
        status: false,
        date: selectedDate,
      },
      onSubmit: async (values) => {
        console.log(values);
        const result = await service.check(
          values.barberId,
          values.hourId,
          values.date
        );
        if (result.status === 200) {
          toast.show({
            render: () => {
              return (
                <Box bg="error.500" px="2" py="1" rounded="3xl" mb={5}>
                  Berber bu saat veya günde doludur
                </Box>
              );
            },
          });
        } else if (result.status === 404) {
          toast.show({
            render: () => {
              return (
                <Box bg="emerald.500" px="2" py="1" rounded="3xl" mb={5}>
                  Reservasyonunuz alınmıştır
                </Box>
              );
            },
          });
          dispacth(add(values));
        }
        console.log(result);
      },
    });
  useEffect(() => {
    dispacth(getList2());
    dispacth(getList4());
    AsyncStorage.getItem("userId").then((value) => {
      setUserId(value);
    });
    AsyncStorage.getItem("barberId").then((value) => {
      setIsBarberId(value);
    });
  }, []);
  const eskiTarih = selectedDate;
  const yeniTarih = eskiTarih.replace(/\//g, "-");
  return (
  <>
  
  {isBarberId == null&&(
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
          <DatePicker
            onSelectedChange={setSelectedDate}
            options={{
              backgroundColor: "#090C08",
              textHeaderColor: "#FFA25B",
              textDefaultColor: "#F6E7C1",
              selectedTextColor: "#fff",
              mainColor: "#F4722B",
              textSecondaryColor: "#D6C7A1",
              borderColor: "rgba(122, 146, 165, 0.1)",
            }}
            current={(values.date = yeniTarih)}
            selected={(values.date = yeniTarih)}
            mode="calendar"
            minuteInterval={30}
            style={{ borderRadius: 10 }}
          />
        </FormControl>

        <FormControl maxW="300">
          <FormControl.Label>Berber Seçiniz</FormControl.Label>
          <Select
            onValueChange={(value) => setBarberId(value)}
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
              <Select.Item
                label={barber?.userName}
                value={barber.id}
              ></Select.Item>
            ))}
          </Select>
          {errors.barberId && touched.barberId && (
            <Text style={{ color: "red" }}>{errors.barberId}</Text>
          )}
        </FormControl>
        <FormControl maxW="300">
          <FormControl.Label>Saat Seçiniz</FormControl.Label>
          <Select
            value={(values.hourId = hourId)}
            onValueChange={(value) => setHourId(value)}
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
  )}
   
  </>
   
  );
}

export default Reservation;
