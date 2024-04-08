import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Image,
    Input,
    Select,
    Textarea,
    Text,
    VStack,
    Center
} from "@chakra-ui/react";
import * as Yup from 'yup';

// API
import { fetchAPI, submitAPI } from '../lib/reservationAPI';

import RestaurantImage from '../assets/restaurant.jpg';

import './ReservationForm.css';

export default function ReservationForm() {

    const [times, setTimes] = useState(['Please select a date']);

    let initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        guests: '1',
        date: '',
        time: '',
        occasion: 'none',
        seatingPreferece: 'none',
        specialRequests: ''
    }

    let yupValidationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Please enter a valid email").required("Required"),
        phoneNumber: Yup.number().required("Please enter mobile number"),
        date: Yup.date().min(new Date()),
        time: Yup.string().not(['Please select a date']).required('Required')
    });

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => { submitAPI(values) },
        validationSchema: yupValidationSchema,
    });

    useEffect(() => {
        if (formik.values.date === '') return;
        let times = fetchAPI(formik.values.date);
        setTimes(times);
    }, [formik.values.date]);

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;

    let currentDay = `${year}-${month}-${day}`;

    return (
        <VStack alignItems="flex-start">
            <Box
                position={"relative"}
                className='image_wrapper'
                h={"25vh"}
                w={"100%"}
                borderRadius={"10px"}
            >
                <Image
                    src={RestaurantImage}
                    alt="Table reservation"
                    display={"block"}
                    objectFit={"cover"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius={"inherit"}
                />
                <div className="overlay overlay_2">
                    <h3>Table Reservation</h3>
                </div>
            </Box>
            <Center w="100%">
                <Box p={6} rounded="md" w="50vw">
                    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                                <FormLabel htmlFor="name">First Name</FormLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    focusBorderColor="#F4CE14"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    focusBorderColor="#F4CE14"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
                                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="number"
                                    focusBorderColor="#F4CE14"
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneNumber}
                                />
                                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="guests">Guests</FormLabel>
                                <Select id="guests" name="guests" focusBorderColor="#F4CE14" onChange={formik.handleChange} value={formik.values.guests}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                                <FormLabel htmlFor="date">Date</FormLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    focusBorderColor="#F4CE14"
                                    min={currentDay}
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                />
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                                <FormLabel htmlFor="time">Time</FormLabel>
                                <Select id="time" name="time" focusBorderColor="#F4CE14" onChange={formik.handleChange} value={formik.values.time}>
                                    {times.map((time, index) => {
                                        return <option key={index} value={time}>{time}</option>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.specialRequests && formik.errors.specialRequests}>
                                <FormLabel htmlFor="specialRequests">Special Requests</FormLabel>
                                <Textarea
                                    id="specialRequests"
                                    name="specialRequests"
                                    height={250}
                                    focusBorderColor="#F4CE14"
                                    onChange={formik.handleChange}
                                    value={formik.values.specialRequests}
                                />
                                <FormErrorMessage>{formik.errors.specialRequests}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="brand" width="full">
                                <Text color={"#000000"} fontSize='l'>Submit</Text>
                            </Button>
                        </VStack>
                    </form>
                </Box>`
            </Center>
        </VStack>
    )
}
