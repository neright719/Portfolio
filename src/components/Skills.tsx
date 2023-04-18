import { Grid } from "@mui/material";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import icons from "../assets/icons.json";
import SectionTitle from "./SctionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px -25% 0px"
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
          controls.start((i) => ({
            opacity: 1,
            transition: { delay: i * 0.05, duration: .3 },
          }));
        }
      }, [controls, inView]);

    return (
        <Grid container spacing={2} justifyContent="center">
            <SectionTitle title="SKILL" subtitle="スキル" />
            <Grid container item spacing={2} alignItems="flex-start" xs={12} ref={ref}>
                    {icons.map((icon, i) => {
                        return (
                            <Grid item key={i} lg={4} md={6} sm={12}>
                                <SkillCard icon={icon} controls={controls} index={i}></SkillCard>
                            </Grid>
                        );
                    })}
            </Grid>
        </Grid>
    );
};

export default Skills;
