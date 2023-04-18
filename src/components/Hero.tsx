import {
    Box
} from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <Box
            sx={{
                height: "100vh",
            }}
        >
            <motion.div
                style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        fontSize: "6em",
                        position: "relative",
                        color: "#333",
                        textShadow: "-1px -1px 1px #000000, 1px 1px #ccc",
                        fontFamily: "'Gravitas One'",
                    }}
                >
                    <motion.span
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                    >
                        ❝Portfolio❞
                    </motion.span>
                    <motion.div
                        style={{
                            position: "absolute",
                            top: "-50%",
                            width: 300,
                            height: 300,
                            backgroundColor: "#4158D0",
                            backgroundImage:
                                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                            borderRadius: "33% 67% 52% 48% / 52% 32% 68% 48%",
                            zIndex: -1,
                            left: "55%",
                            filter: "blur(80px)",
                        }}
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: .2,
                        }}
                    ></motion.div>
                </div>
            </motion.div>
        </Box>
    );
};

export default Hero;
