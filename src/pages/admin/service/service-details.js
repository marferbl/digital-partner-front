import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../../../components/corporate/service/service-details";
import { getServiceById } from "../../../services/service";
import { Box } from "@chakra-ui/react";
import { UserContext } from "../../../context/userContext";
import Navbar from "../../../components/base/navbar";
import { useContext } from "react";


const ServiceDetailsPage = () => {
    const [service, setService] = useState(null);
    const { isLoggedIn } = useContext(UserContext)

    const { id } = useParams();

    useEffect(() => {
        getMyService();
    }, []);

    const getMyService = () => {
        getServiceById(id)
            .then((res) => {
                setService(res.data.service);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Box>
            {!isLoggedIn ? <Navbar></Navbar> : null}
            <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
                <ServiceDetails service={service} />
            </Box>
        </Box>

    )
}

export default ServiceDetailsPage