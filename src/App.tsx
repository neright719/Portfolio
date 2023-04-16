import {
    Avatar,
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    Breadcrumbs,
    Link,
} from "@mui/material";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Production from "./components/Production";
import About from "./components/About";
import img from "./assets/HERO.jpg";
import { motion } from "framer-motion";

const App: React.FC = () => {
    return (
        <>
            <Box
                sx={{
                    height: "calc(100vh - 4em)",
                    padding: "2em",
                }}
            >
                <motion.div
                    style={{
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                        }}
                    >
                        Portfolio
                    </Typography>
                    <motion.img
                        src={img}
                        style={{
                            width: "100%",
                            height: "0%",
                            objectFit: "cover",
                            y: "50%",
                        }}
                        animate={{
                            height: "100%",
                            y: "0%",
                        }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                        }}
                    />
                </motion.div>
            </Box>
            <Container maxWidth="lg" sx={{ marginTop: "3em" }}>
                <Grid container spacing={14} direction="column">
                    <Grid item>
                        <About />
                    </Grid>
                    <Grid item>
                        <Skills />
                    </Grid>
                    <Grid item>
                        <Production />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default App;
