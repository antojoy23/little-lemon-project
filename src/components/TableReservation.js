import React from 'react'
import Main from './Main'
import ReservationForm from './ReservationForm';
import {
    Box,
    Image,
    VStack,
    Center
} from "@chakra-ui/react";

import RestaurantImage from '../assets/restaurant.jpg';

import './TableReservation.css';

export default function TableReservation() {
    return (
        <Main>
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
                    <div className="text-overlay">
                        <h3>Table Reservation</h3>
                    </div>
                </Box>
                <Center w="100%">
                    <Box p={6} rounded="md" w="50vw">
                        <ReservationForm />
                    </Box>`
                </Center>
            </VStack>
        </Main>
    )
}
