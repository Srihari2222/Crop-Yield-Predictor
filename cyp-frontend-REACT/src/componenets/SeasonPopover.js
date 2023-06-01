import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,Grid,GridItem,Center,Flex,IconButton,Image,} from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import Kharif from '../assets/rainy.png'
import Rabi from '../assets/winter.png'
import Summer from '../assets/summer.png'
import Whole from '../assets/season.png'
export default function SeasonPopover({updateSeason}){
    const popoverCloseButtonRef = useRef(null);
    const initialFocusRef = useRef()
    const handleSeason=(e)=>{
        updateSeason((e.target.value===undefined)?e.target.alt:e.target.value);
        popoverCloseButtonRef.current.click();
    }
    return(
        <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
        >
        <PopoverTrigger>
            <Button ml={1} onMouseOver={(e) => (e.target.style.backgroundColor = 'gray')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'darkcyan')} width="40%" bgColor="darkcyan" mb={3} border="none" color="white" >Season</Button>
        </PopoverTrigger>
        <PopoverContent color='white' bg='#101030' borderColor='#101030'>
            <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Select&nbsp; Season
            </PopoverHeader>
            <PopoverArrow bgColor='darkcyan'/>
            <PopoverCloseButton ref={popoverCloseButtonRef} />
            <PopoverBody>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem display={"flex"} w='100%' h='10' bgColor={""} >
                        <Flex alignItems="center">
                            <IconButton onClick={handleSeason}  icon={<Image _hover={{transform: 'scale(1.2)',transition: 'transform 0.17s ease-in-out',}} onClick={handleSeason} alt='Kharif' src={Kharif} boxSize={8} />}
                                aria-label="Kharif"
                                value="Kharif"
                                size="lg"
                                colorScheme="transparent"/>
                        </Flex>
                        <Flex alignItems="center">
                            Kharif
                        </Flex>
                    </GridItem>
                    <GridItem display={"flex"} w='100%' h='10' bgColor={""} >
                        <Flex alignItems="center">
                            <IconButton onClick={handleSeason}  icon={<Image _hover={{transform: 'scale(1.2)',transition: 'transform 0.17s ease-in-out',}} onClick={handleSeason} alt='Rabi' src={Rabi} boxSize={8} />}
                                aria-label="Rabi"
                                value="Rabi"
                                size="lg"
                                colorScheme="transparent"/>
                        </Flex>
                        <Flex alignItems="center">
                            Rabi
                        </Flex>
                    </GridItem>
                    <GridItem  value={'Summer'} display={"flex"} w='100%' h='10' bgColor={""} >
                        <Flex alignItems="center">
                            <IconButton onClick={handleSeason}  icon={<Image  _hover={{transform: 'scale(1.2)',transition: 'transform 0.17s ease-in-out',}} onClick={handleSeason} alt='Summer' src={Summer} boxSize={8} />}
                                aria-label="Summer"
                                value="Summer"
                                size="lg"
                                colorScheme="transparent"/>
                        </Flex>
                        <Flex alignItems="center">
                            Summer
                        </Flex>
                    </GridItem>
                    <GridItem display={"flex"} w='100%' h='10' bgColor={""} >
                        <Flex alignItems="center">
                            <IconButton onClick={handleSeason}  icon={<Image _hover={{transform: 'scale(1.2)',transition: 'transform 0.17s ease-in-out',}} onClick={handleSeason} alt='Whole Year' src={Whole} boxSize={8} />}
                                aria-label="Whole Year"
                                value="Whole Year"
                                size="lg"
                                colorScheme="transparent"/>
                        </Flex>
                        <Flex alignItems="center">
                            Whole Year
                        </Flex>
                    </GridItem>
                </Grid>
            </PopoverBody>
            <Center>
            <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pb={4}
            >
            </PopoverFooter>
            </Center>
        </PopoverContent>
        </Popover>
    )
}