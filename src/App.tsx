import { Container, Grid } from "@mui/material";
import About from "./components/About";
import Hero from "./components/Hero";
import Production from "./components/Production";
import Skills from "./components/Skills";

const App: React.FC = () => {
    return (
        <>
            <Hero />
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
