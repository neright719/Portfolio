import {
    Box,
    Avatar,
    Grid,
    Paper,
    Typography,
    Divider,
    Stack,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SctionTitle";
import img from "../assets/HERO.jpg";
import History from "./History";

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
                    position: "relative",
                }}
            >
                <div style={{
                        fontSize: "6em",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontFamily: "'Gravitas One', cursive"
                    }}>
                    {[..."Portfolio"].map((item, index) => {
                        return (<motion.span
                            style={{
                                display: "inline-block"
                            }} 
                            initial={{
                                x: -10,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: .5,
                                delay: 0.1 * index,
                                once: true
                            }}
                            >{item}</motion.span>)
                    })}
                </div>
                <motion.div style={{
                    position: "absolute",
                    top: "30%",
                    width: 300,
                    height: 300,
                    backgroundColor: "#4158D0",
                    backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                    borderRadius: "33% 67% 52% 48% / 52% 32% 68% 48%",
                    zIndex: 1,
                }}
                initial={{
                    left: "30%",
                    filter: "blur(10px)",
                    scale: 0
                }}
                animate={{
                    left: "55%",
                    filter: "blur(80px)",
                    zIndex: [-1],
                    scale: 1
                }}
                transition={{
                    ease: "linear",
                    duration: 1
                }}
                ></motion.div>
            </motion.div>
        </Box>
    );
};

export default Hero;
