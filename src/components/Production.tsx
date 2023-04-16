import React from "react";
import { Grid, Paper } from "@mui/material";
import img from "../assets/NGSLTyping_SC.png";
import SectionTitle from "./SctionTitle";

const Production = () => {
    return (
        <Grid
            container
            direction="column"
            spacing={2}
            justifyContent="center"
        >
            <SectionTitle title="Product" subtitle="制作物"/>
            <Grid item xs={8}>
                <Paper sx={{padding: "2em"}}>
                    <a href="">
                        <span>NGSL Typing β版</span>
                        <img
                            style={{
                                width: "100%",
                            }}
                            src={img}
                        />
                    </a>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Production;
