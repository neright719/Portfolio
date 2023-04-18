import React from "react";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
    title: string;
    subtitle: string;
};

const SectionTitle = ({ title, subtitle }:{title:string, subtitle: string}) => {
    return (
        <Grid
            item
            container
            alignItems="baseline"
            sx={{ color: "#333" }}
            xs={12}
            spacing={1}
        >
            <Grid item>
                <motion.div>
                    <Typography
                        variant="h2"
                        sx={{
                            textShadow: "-1px -1px 1px #000000, 1px 1px #ccc",
                            fontWeight: "bold",
                        }}
                    >
                        {title}
                    </Typography>
                </motion.div>
            </Grid>
            <Grid item>
                <motion.div>
                    <Typography sx={{fontWeight: "bold"}}>{subtitle}</Typography>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default SectionTitle;
