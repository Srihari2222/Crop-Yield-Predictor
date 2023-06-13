import React from 'react'
import { useState} from 'react';
import { useDisclosure,Modal,Button,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Grid,Flex,Input,Text,Center,Image,Card,CardBody,Divider,Container,Tooltip} from '@chakra-ui/react';
import { crops } from './constants';
import resize from '../assets/resize.png';
const scrollbarStyles={
    "&::-webkit-scrollbar": {
        width: "5px",
    },
    "&::-webkit-scrollbar-track": {
        background: "#101030",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "gray",
        borderRadius: "4px",
        height:"20%"
    },
};
const cropImgs={};
crops.forEach((item)=>{
    cropImgs[item.name]=item.icon;
});
export default function CropModal({updateCrop}) {
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [doubletap,setdoubletap]=useState(1);
    const filteredCrops = crops.filter((crop) =>
        crop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleCrop=(e)=>{
        updateCrop((e.target.alt===undefined)?e.currentTarget.getAttribute('data-crop'):e.target.alt);
        onCloseModal1();
    }
    const enlargeImage = (e) => {
        setdoubletap(doubletap+1);
        if(doubletap===1){
            setTimeout(()=>{
                setdoubletap(1);
            },300)
        }
        else if(doubletap===2){
            setSelectedImage(e.target.alt);
            onOpenModal2()
            setdoubletap(1);
        }
    };
    return (
        <>
        <Button ml={1} onMouseOver={(e) => (e.target.style.backgroundColor = 'gray')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'darkcyan')} width="40%" bgColor="darkcyan" mb={3} border="none" color="white" onClick={onOpenModal1}>Crop</Button>
        <Modal
            isCentered
            onClose={onCloseModal1}
            isOpen={isOpenModal1}
            size={'xl'}
            motionPreset='slideInBottom'
            scrollBehavior='inside'
            
            
        >
            <ModalOverlay />
            <ModalContent bgColor={'#100D25'} h={`${window.innerWidth<1000?"60vh":"100vh"}`}>
            <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
                <Text color={'white'} fontSize="xl" fontWeight="bold">
                    Select&nbsp; Crop
                </Text>
                <Flex align="center">
                    <Input
                    size="sm"
                    placeholder="Search crops"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    width={'80%'}
                    height={'40px'}
                    borderRadius={'8px'}
                    boxShadow={5}
                    bgColor={'#171030'}
                    textColor={'white'}
                    borderColor={'gray'}
                    borderWidth={2}
                    focusBorderColor={filteredCrops.length===0?"red.500":""}
                    />
                </Flex>
            </ModalHeader>
            <ModalCloseButton color='white' />
            <ModalBody overflowX={'hidden'} sx={scrollbarStyles}>
            <Divider orientation='horizontal' width={"100%"} borderColor="gray" mt={0} ml={0}/>
                <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
                    {filteredCrops.map((crop) => (
                    <Card boxShadow={"dark-lg"} p={1.5} key={crop.name} textAlign="center" cursor="pointer" _hover={{transform: 'scale(1.05)',transition: 'transform 0.05s ease-in-out',backgroundColor:"green.200"}}  borderWidth={1} bgColor={'#C6F6D5'} >
                        <Tooltip label="Double tap" bg={"black"} borderWidth={0.01}  hasArrow >
                        <Image src={crop.icon} height={'50%'} alt={crop.name} borderRadius={'6px'} onClick={enlargeImage} />
                        </Tooltip>
                        {/* <Image  title='full view' alt={crop.name} src={resize} boxSize={5} position={'absolute'} transform="translate(50%, -50%)" top={5} right={5} onClick={enlargeImage} /> */}
                        <CardBody data-crop={crop.name} onClick={handleCrop}>
                            <Center>
                                <Text display={'flex'} fontSize={'auto'} fontWeight="bold" mt={2}>{crop.name}</Text>
                            </Center>
                        </CardBody>
                    </Card>
                    ))}
                </Grid>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='#171030' borderRadius={5} boxShadow={'dark-lg'} mr={3} onClick={onCloseModal1}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        <Modal   size={'lg'} isCentered
            onClose={onCloseModal2}
            isOpen={isOpenModal2}>
            <ModalOverlay bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)' />
            <ModalContent width={"90%"} borderColor={"#161030"} p={0}>
            <ModalCloseButton color={"white"} size={10} position={"absolute"} top={-3} right={-4} />
            <ModalBody p={0}>
                <Container p={0} height={"100%"} width={"100%"}>
                    <Image height={"80%"} width={"100%"} p={0} src={cropImgs[selectedImage]} >
                    </Image>
                </Container>
            </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}
