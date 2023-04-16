import React from "react";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
    title: string;
    subtitle: string;
};

const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <Grid
            item
            container
            alignItems="baseline"
            sx={{ color: "#fff" }}
            spacing={1}
        >
            <Grid item>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {title}
                    </Typography>
                </motion.div>
            </Grid>
            <Grid item>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -23% 0px" }}
                >
                    <Typography>{subtitle}</Typography>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default SectionTitle;
