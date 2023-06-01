import React from 'react'
import { useDisclosure,Center,Modal,Button,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Text,
    Table,Tbody,Tr,Td,TableContainer,Spinner} from '@chakra-ui/react';
import { useState,useEffect} from 'react';
import "./index.css";
import axios from 'axios';
const scrollbarStyles={
    "&::-webkit-scrollbar": {
        width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "gray",
        borderRadius: "2px",
    },
};

export default function SubmitModal({values}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hide ,setHide]=useState(false)
    const [HIDE,setHIDE]=useState(true)
    const [data,setdata]=useState()
    const handleSubmit=()=>{
        setHide(true);
        setTimeout(()=>{
            setHide(false);
        },10000)
    }
    const handleError=()=>{
        setHide(false);
        onOpen();
    }
    useEffect(()=>{
        setdata();
    },[values])
    useEffect(()=>{
        setHIDE(true);
    },[])
    const handlepredict=()=>{
        onClose();
        setHIDE(false);
        if(data!==undefined)return;
        setTimeout(async()=>{
            try {
                const response= await axios.post('https://cyp-flask-server.onrender.com', values, {
                    headers: {
                    'Content-Type': 'application/json'
                    }
                });
                const prediction = response.data.prediction;
                setdata((prediction[0]/values.Area).toFixed(2));
            } catch (error) {
            console.error(error);
            }
        },1500)
        
    }
    return (
        <>
        <Center>
            <Button onClick={(Object.values(values).some((item) => item === undefined || item==='' || values.State==='Select State' || values.Season==='Select Season' || values.Crop==='Select Crop'))?handleSubmit:handleError} ml={1} onMouseOver={(e) => (e.target.style.backgroundColor = 'gray')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'darkcyan')} width="30%" bgColor="darkcyan" mb={3} border="none" boxShadow={"dark-lg"} color="white">Submit</Button>
        </Center>
        <Center>
            {hide &&
            <Text fontSize='xs' fontStyle={"italic"} letterSpacing={"0.05rem"}  ml='2'  color='red'>Please enter all values</Text>}
        </Center>

        <Modal size={"md"} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalCloseButton />
            <ModalBody maxHeight={"50vh"} pl={6} paddingTop={0} mt={0} sx={scrollbarStyles}>
                <TableContainer overflowX={"hidden"} >
                    <Table variant={"striped"} colorScheme='green'>
                        <Tbody>
                            <Tr>
                                <Td>State Name</Td>
                                <Td whiteSpace={"pre-wrap"} wordBreak={"break-word"} >{values.State}</Td>
                            </Tr>
                            <Tr>
                                <Td>Crop Name</Td>
                                <Td>{values.Crop}</Td>
                            </Tr>
                            <Tr>
                                <Td>Season Name</Td>
                                <Td>{values.Season}</Td>
                            </Tr>
                            <Tr>
                                <Td>Rainfall</Td>
                                <Td >{values.Rainfall}</Td>
                            </Tr>
                            <Tr>
                                <Td>Temperature</Td>
                                <Td>{values.Temperature}</Td>
                            </Tr>
                            <Tr>
                                <Td>Nitrogen</Td>
                                <Td>{values.N}</Td>
                            </Tr>
                            <Tr>
                                <Td>Phosphourous</Td>
                                <Td>{values.P}</Td>
                            </Tr>
                            <Tr>
                                <Td>Potassium</Td>
                                <Td>{values.K}</Td>
                            </Tr>
                            <Tr>
                                <Td>pH value</Td>
                                <Td>{values.pH}</Td>
                            </Tr>
                            <Tr>
                                <Td>Area</Td>
                                <Td>{values.Area}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' onClick={handlepredict} mr={3}>Predict</Button>
                <Button colorScheme='red' onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        <Center>

        <div className={`modal ${HIDE?"hidden":""}`} data-id="modal">
            <div className="modal-contents" style={{backgroundColor:"#05f9ed"}}>
                <Text color={"black"} fontSize={"larger"} fontWeight={"bold"}>{`${data===undefined?"Predicting...":`${data} tons per 1 hectare`}`}</Text>
                {(data === undefined)?(
                    <Spinner
                    thickness='6px'
                    speed='0.65s'
                    color='blue.500'
                    size='xl'
                    />
                ):
                (
                    <> 
                    <Button colorScheme='whatsapp' onClick={()=>{setHIDE(true)}} >Done</Button>
                    </>
                )}
            </div>
        </div>
        </Center>
        </>
        
        
    )
}
