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
import Hero from "./components/Hero";

const App: React.FC = () => {
    return (
        <>
            <Hero/>
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
