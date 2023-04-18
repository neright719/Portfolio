import { Grid } from "@mui/material";
import { AnimationControls, motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillCard = ({ icon, controls, index }: {icon:any, controls:AnimationControls , index:number}) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
    });

    return (
        <motion.div
            style={{
                padding: "0.7em 0.5em",
                background: "white",
                borderRadius: "5px"
            }}
            variants={{
                hide: {
                    opacity: 0
                },
                show: {
                    opacity: 1
                }
            }}
            initial="hide"
            animate={controls}
            custom={index}
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
        </motion.div>
    );
};

export default SkillCard;
