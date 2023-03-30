import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import styles from './Home.module.css';
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchBar } from "../SearchBar";
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { BottomSheet } from "../BottomSheet";
import { Venues } from "../Venues";

  const center = {
    lat: -3.745,
    lng: -38.523
  };

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBmnTGSmKHpRHlzWCrHGFu_1L29DX4mEr0',
        libraries: ['places']
    })
    
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false
    }) , []) 



    if(!isLoaded) return <div>loading...</div>

    return(
        <div className={styles.container}>
        <SearchBar setIsOpen={setIsOpen} />
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerStyle={{
                width: '100%',
                height: '100vh',
                display: 'flex'
            }}
            options={options}
            />
            <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen}>
                <Venues isOpen={isOpen} />
            </BottomSheet>
        </div>
    )
}

function usePrevious(value: any) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}