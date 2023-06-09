import React from 'react'
import { useState,useEffect,useRef,} from 'react';
import CropModal from './CropModal';
import SeasonPopover from './SeasonPopover';
import SubmitModal from './SubmitModal';
import {Box,extendTheme,Container,Heading,Divider,FormControl,FormLabel,Menu,MenuButton, MenuList, MenuItem,NumberInput,NumberInputField,Image,Text,Stack,useToast,Button,Tooltip,AlertDialog,AlertDialogBody,AlertDialogFooter,AlertDialogHeader,AlertDialogContent,AlertDialogOverlay,AlertDialogCloseButton,useDisclosure} from '@chakra-ui/react';
import Kharif from '../assets/rainy.png'
import Rabi from '../assets/winter.png'
import Summer from '../assets/summer.png'
import Whole from '../assets/season.png'
import reset from '../assets/reset.png'
const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
};
const scrollbarStyles={
    "&::-webkit-scrollbar": {
        width: "8px",
    },
    "&::-webkit-scrollbar-track": {
        background: "#161030",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "gray",
        borderRadius: "4px",
    },
};
const States = [
    { value: 'ANDAMAN AND NICOBAR ISLANDS', label: 'ANDAMAN AND NICOBAR ISLANDS' },
    { value: 'ANDHRA PRADESH', label: 'ANDHRA PRADESH' },
    { value: 'ARUNACHAL PRADESH', label: 'ARUNACHAL PRADESH' },
    { value: 'ASSAM', label: 'ASSAM' },
    { value: 'BIHAR', label: 'BIHAR' },
    { value: 'CHANDIGARH', label: 'CHANDIGARH' },
    { value: 'CHHATTISGARH', label: 'CHHATTISGARH' },
    { value: 'DADRA AND NAGAR HAVELI', label: 'DADRA AND NAGAR HAVELI' },
    { value: 'GOA', label: 'GOA' },
    { value: 'GUJARAT', label: 'GUJARAT' },
    { value: 'HARYANA', label: 'HARYANA' },
    { value: 'HIMACHAL PRADESH', label: 'HIMACHAL PRADESH' },
    { value: 'JAMMU AND KASHMIR', label: 'JAMMU AND KASHMIR' },
    { value: 'JHARKHAND', label: 'JHARKHAND' },
    { value: 'KARNATAKA', label: 'KARNATAKA' },
    { value: 'KERALA', label: 'KERALA' },
    { value: 'MADHYA PRADESH', label: 'MADHYA PRADESH' },
    { value: 'MAHARASHTRA', label: 'MAHARASHTRA' },
    { value: 'MANIPUR', label: 'MANIPUR' },
    { value: 'MEGHALAYA', label: 'MEGHALAYA' },
    { value: 'MIZORAM', label: 'MIZORAM' },
    { value: 'NAGALAND', label: 'NAGALAND' },
    { value: 'ODISHA', label: 'ODISHA' },
    { value: 'PUDUCHERRY', label: 'PUDUCHERRY' },
    { value: 'PUNJAB', label: 'PUNJAB' },
    { value: 'RAJASTHAN', label: 'RAJASTHAN' },
    { value: 'SIKKIM', label: 'SIKKIM' },
    { value: 'TAMIL NADU', label: 'TAMIL NADU' },
    { value: 'TELANGANA', label: 'TELANGANA' },
    { value: 'TRIPURA', label: 'TRIPURA' },
    { value: 'UTTARAKHAND', label: 'UTTARAKHAND' },
    { value: 'UTTAR PRADESH', label: 'UTTAR PRADESH' },
    { value: 'WEST BENGAL', label: 'WEST BENGAL' },
];
export const theme = extendTheme({
components: {
    Form: {
    variants: {
        floating: {
        container: {
            _focusWithin: {
            label: {
                ...activeLabelStyles
            }
            },
            ".chakra-numberinput:not([value='']) + label": {
            ...activeLabelStyles
            },
            label: {
            top: 0,
            left: 0,
            zIndex: 2,
            position: "absolute",
            backgroundColor: "#171030",
            textColor:"white",
            pointerEvents: "none",
            mx: 3,
            px: 1,
            my: 2,
            transformOrigin: "left top"
            }
        }
        }
    }
    }
}
});
export default function Main() {
    const toast=useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    useEffect(()=>{
        toast({
            title: "Do not worry",
            description: "We Auto-Save the changes you make.",
            status: "info",
            duration: 4000,
            position:"top-left",
            isClosable: true,
        });
        const resetOccurred = localStorage.getItem("resetOccurred");
        if(resetOccurred === "true") {
            localStorage.removeItem("resetOccurred");
            setTimeout(() => {
                toast({
                title: "Reset Success",
                description: "We have reset the Form.",
                status: "success",
                duration: 5000,
                position:"top-left",
                isClosable: true,
                });
            },1000);
        }
    },[])
    const [State,setState]=useState(localStorage.getItem("statestore") ||"Select State");
    const [Crop,setCrop]=useState(localStorage.getItem("cropstore") ||"Select Crop");
    const [Season,setSeason]=useState(localStorage.getItem("seasonstore")||"Select Season");
    const [temp,setTemp]=useState(localStorage.getItem("tempstore")|| undefined);
    const [rain,setRain]=useState(localStorage.getItem("rainstore")|| undefined);
    const [n,setn]=useState(localStorage.getItem("nstore")|| undefined);
    const [p,setp]=useState(localStorage.getItem("pstore")|| undefined);
    const [k,setk]=useState(localStorage.getItem("kstore")|| undefined);
    const [ph,setph]=useState(localStorage.getItem("phstore")|| undefined);
    const [area,setArea]=useState(localStorage.getItem("areastore")|| undefined);
    


    useEffect(()=>{
        localStorage.setItem("statestore",State);
        localStorage.setItem("cropstore",Crop);
        localStorage.setItem("seasonstore",Season);
        localStorage.setItem("tempstore",temp);
        localStorage.setItem("rainstore",rain);
        localStorage.setItem("nstore",n);
        localStorage.setItem("pstore",p);
        localStorage.setItem("kstore",k);
        localStorage.setItem("phstore",ph);
        localStorage.setItem("areastore",area);

    });
    const handleReset=()=>{
        if(State==="Select State" && Crop==="Select Crop" && Season==="Select Season" && temp===undefined && rain===undefined && n===undefined && n===undefined && p===undefined && k===undefined && ph===undefined && area===undefined){
            onClose()
            return
        }
        else{
            localStorage.removeItem("statestore");
            localStorage.removeItem("cropstore");
            localStorage.removeItem("seasonstore");
            localStorage.removeItem("tempstore");
            localStorage.removeItem("rainstore");
            localStorage.removeItem("nstore");
            localStorage.removeItem("pstore");
            localStorage.removeItem("kstore");
            localStorage.removeItem("phstore");
            localStorage.removeItem("areastore");
            localStorage.setItem("resetOccurred", "true");
            window.location.reload();
        }
    }
    

    const imgs={'Kharif':Kharif,'Rabi':Rabi,'Summer':Summer,'Whole Year':Whole}
    const handleMenuItemClick = (value) => {
        setState(value);
    };
    return (
        <Container  borderRadius={10} p={5} marginBottom={5} height="100%" width="100%" backgroundColor="#100D25">
            <Box display={"flex"} width={"100%"}>
                <Heading ml={`${window.innerWidth>1000?5:3}`} whiteSpace={"nowrap"} as="h1" fontWeight={"bolder"} size="lg" mb={0} textColor="darkcyan">Want to Predict Yield ?</Heading>
                <Tooltip label="Reset Form" bg={"black"} borderWidth={0.01}  hasArrow >
                    <Image marginLeft={`${window.innerWidth<1000?5:"100px"}`} boxShadow={"dark-lg"} alt="reset" src={reset} boxSize={10} onClick={onOpen} _hover={{transform: 'scale(1.25)',transition: 'transform 0.05s ease-in-out',cursor:"pointer"}} />
                </Tooltip>
                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                    <AlertDialogHeader>Reset Form?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to reset the form?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                        No
                        </Button>
                        <Button onClick={handleReset} colorScheme='red' ml={3}>
                        Yes
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </Box>
            <Divider orientation='horizontal' width={"100%"} borderWidth={1.5} borderColor="#151530" m={0} mt={2}/>
            <Container ml={0} width="100%" mt={30}>
                    <Box  width={"70"} mb={3} border="none" borderColor="#161030" borderRadius={2} height={"12"} color="white" bgColor="#161030" boxShadow="dark-lg" >
                        <Box display={"flex"} alignItems={"baseline"}>
                        <Box m={0} ml='2' color='gray.600' fontSize='sm'>State</Box>
                        <Divider orientation='horizontal' width={"100%"} borderWidth={1.5} borderColor="gray" m={0}/>
                        </Box>
                        <Box as='h6' mt='1' ml='2' color='white' fontSize='sm'>
                            {State}
                        </Box>
                    </Box>
                    <Menu>
                        <MenuButton as={Button} type="text" boxShadow="dark-lg" cursor='pointer' color="white" placeholder="States" width={"40%"} border="none" bgColor="darkcyan" onMouseOver={(e) => (e.target.style.backgroundColor = 'gray')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'darkcyan')}>State
                        </MenuButton>
                        <MenuList sx={scrollbarStyles} maxHeight="270px" overflowY="auto"  bgColor="#161530" border={"none"} borderRadius={5}>
                            {States.map((option) => (
                                <React.Fragment key={option.value}>
                                <MenuItem
                                letterSpacing={"1px"}
                                color="white"
                                bgColor="#161030"
                                value={option.value}
                                onClick={() => handleMenuItemClick(option.label)}
                                >
                                    <Stack minW={"100%"}>
                                        <Text m={0}>{option.label}</Text>

                                        <Divider orientation='horizontal'  width={"100%"} borderColor="#151530" borderWidth={1} m={0} ml={2.5}></Divider>
                                    </Stack>
                                </MenuItem>
                                </React.Fragment>
                            ))}
                        </MenuList>
                    </Menu>
            </Container>
            <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
            <Container m={0} width="100%" mt={30}>
                <Box  width={"70"} mb={3} border="none" borderColor="#161030" borderRadius={2} height={"12"} color="white" bgColor="#161030" boxShadow="dark-lg" >
                    <Box display={"flex"} alignItems={"baseline"}>
                    <Box m={0} ml='2' color='gray.600' fontSize='sm'>Crop</Box>
                    <Divider orientation='horizontal' width={"100%"} borderWidth={1.5} borderColor="gray" border m={0}/>
                    </Box>
                    <Box as='h6' mt='1' ml='2' color='white' fontSize='sm'>
                        {Crop}
                    </Box>
                </Box>
                <CropModal updateCrop={setCrop}/>
            </Container>
            <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
            <Container m={0} width="100%" mt={30} >
                <Box  width={"70"} mb={3} border="none" borderColor="#161030" borderRadius={2} height={"60px"} color="white" bgColor="#161030" boxShadow="dark-lg" >
                    <Box display={"flex"} alignItems={"baseline"}>
                    <Box m={0} ml='2' color='gray.600' fontSize='sm'>Season</Box>
                    <Divider orientation='horizontal' width={"100%"} borderWidth={1.5} borderColor="gray" border m={0}/>
                    </Box>
                    <Box as='h6' display={'flex'} mt='1' ml='2' color='white' fontSize='sm'>
                        {Season!=='Select Season' && 
                        <Image _hover={{transform: 'scale(1.2)',transition: 'transform 0.17s ease-in-out',}} alt={Season} src={imgs[Season]} boxSize={8} />}
                        <Text ml={3} mb={0} pt={2}>{Season}</Text>
                    </Box>
                </Box>
                <SeasonPopover updateSeason={setSeason}/>
            </Container>
            <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
            <Container theme={theme} m={0} p={"0 16px"} width="100%" mt={30}>
                <FormControl variant="floating" id="rainfall" isRequired>
                    <NumberInput min={80} max={30000} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={rain} onChange={(value)=>{setRain(value)}}>
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>Rainfall&nbsp;&nbsp;(in mm)</FormLabel>
                </FormControl>
                <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
                <FormControl variant="floating" id="temperature" isRequired>
                    <NumberInput min={8} max={60} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={temp} onChange={(value)=>{setTemp(value)}} >
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>{`${window.innerWidth<300?"Temperature (in C)":`Temperature  (in Celsius)`}`}</FormLabel>
                </FormControl>
                <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
                <FormControl variant="floating" id="Area" isRequired>
                    <NumberInput min={1} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={area} onChange={(value)=>{setArea(value)}} >
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>Area&nbsp;&nbsp;(in hectares)</FormLabel>
                </FormControl>
                <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
                <FormControl variant="floating" id="pH" isRequired>
                    <NumberInput min={3.5} max={10} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={ph} onChange={(value)=>{setph(value)}} >
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>pH value</FormLabel>
                </FormControl>
                <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
                <FormControl variant="floating" id="nitrogen" isRequired>
                    <NumberInput min={0} max={200} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={n} onChange={(value)=>{setn(value)}} >
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>Nitrogen&nbsp;(N)</FormLabel>
                </FormControl>
                <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
                <FormControl variant="floating" id="phosphorous" isRequired>
                    <NumberInput min={0} max={200} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={p} onChange={(value)=>{setp(value)}} >
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>Phosphorous&nbsp;(P)</FormLabel>
                </FormControl>
                <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
                <FormControl variant="floating" id="potassium" isRequired>
                    <NumberInput min={0} max={200} borderColor="#161030" borderRadius={1} textColor="white" bgColor="#161030" boxShadow="dark-lg" defaultValue={k} onChange={(value)=>{setk(value)}} >
                        <NumberInputField borderColor={"gray"}/>
                    </NumberInput>
                    <FormLabel>Potassium&nbsp;(k)</FormLabel>
                </FormControl>
            </Container>
            <Divider orientation='horizontal' width={"100%"} borderColor="" m={5} ml={0}/>
            <SubmitModal values={{State:State,Crop:Crop,Season:Season,Temperature:temp,Rainfall:rain,N:n,P:p,K:k,pH:ph,Area:area}}/>
        </Container>
    )
}
