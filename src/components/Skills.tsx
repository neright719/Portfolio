import React, { useRef } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import icons from "../assets/icons.json";
import SkillCard from "./SkillCard";
import SectionTitle from "./SctionTitle";
import { motion, useInView } from "framer-motion";

const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
    });

    return (
        <Grid container direction="column" spacing={2} justifyContent="center">
            <SectionTitle title="SKILL" subtitle="スキル" />
            <Grid container item spacing={2} alignItems="flex-start">
                    {icons.map((icon, i) => {
                        return (
                            <Grid item key={i} lg={4} md={6} xs={12}>
                                <SkillCard icon={icon}></SkillCard>
                            </Grid>
                        );
                    })}
            </Grid>
        </Grid>
    );
};

export default Skills;
