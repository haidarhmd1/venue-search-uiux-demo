import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion"

type PropTypes = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    children: ReactNode
}

export const BottomSheet = ({ isOpen, setIsOpen, children }: PropTypes) => {
    const y = useMotionValue(0);
    const controls = useAnimation();
    const prevIsOpen = usePrevious(isOpen);

    useEffect(() => {
        if (prevIsOpen && !isOpen) {
        controls.start("hidden");
        } else if (!prevIsOpen && isOpen) {
        controls.start("visible");
        }
    }, [controls, isOpen, prevIsOpen]);

    const onDragEnd = (event: any, info: { velocity: { y: number; }; point: { y: number; }; }) => {
        const shouldClose =
          info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
        if (shouldClose) {
          controls.start("hidden");
          setIsOpen(false)
        } else {
          controls.start("visible");
          setIsOpen(true)
        }
      }

    return(
        <motion.div className="h-screen w-full bg-white absolute bottom-0 rounded-t-lg p-4" 
            drag="y"
            onDragEnd={onDragEnd}
            animate={controls}
            transition={{
                type: "spring",
                damping: 40,
                stiffness: 400
            }}
            dragConstraints={{ top: 0 }}
            dragElastic={0}
            style={{ y }}
            variants={{
                visible: { y: 0 },
                hidden: { y: "80%" }
            }}>
                {children}
            </motion.div>
    )
}

function usePrevious(value: any) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}