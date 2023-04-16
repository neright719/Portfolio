import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const SkillCard = ({ icon }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
    });

    return (
        <Paper
            sx={{
                padding: "0.7em 0.5em",
            }}
            ref={ref}
        >
            <Grid container alignItems="center" spacing={2}>
                <Grid
                    item
                    container
                    xs={3}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item container justifyContent="center">
                        <img
                            src={icon.url}
                            style={{
                                width: "60%",
                                filter: inView
                                    ? "grayscale(0)"
                                    : "grayscale(1)",
                                transition: "all 0.3s ease-in .8s",
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <span style={{ fontSize: "0.8em", opacity: 0.8 }}>
                            {icon.name}
                        </span>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <p>{icon.text}</p>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SkillCard;
