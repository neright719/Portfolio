import { Chip, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import img from "../assets/NGSLTyping_SC.png";
import SectionTitle from "./SctionTitle";

const Production = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                marginBottom: "4em",
            }}
        >
            <SectionTitle title="Work" subtitle="制作物" />
            <Grid item xs={12}>
                <motion.div
                    style={{
                        background: "white",
                        borderRadius: "5px",
                    }}
                    variants={{
                        hide: {
                            x: -30,
                            opacity: 0,
                        },
                        show: {
                            x: 0,
                            opacity: 1,
                        },
                    }}
                    initial="hide"
                    whileInView="show"
                    viewport={{
                        once: true,
                        margin: "0px 0px -20% 0px",
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <p style={{ padding: "1em" }}>
                        <Link href="https://neright719.github.io/NGSLTyping/">
                            NGSL Typing β版
                        </Link>
                    </p>
                    <Link href="https://neright719.github.io/NGSLTyping/">
                        <img
                            style={{
                                width: "100%",
                            }}
                            src={img}
                        />
                    </Link>
                    <div style={{ padding: "1em" }}>
                        <div style={{ marginBottom: "1em" }}>
                            <p>英単語学習用タイピングゲーム</p>
                            <p>
                                一般英会話で使用される英単語の90%以上をカバーできるというNGSL英単語リストの記憶を目的としたタイピングゲーム。
                            </p>
                            <p>
                                Web Speech
                                APIで単語の音声を再生させ、リスニングも同時に行える。
                            </p>
                        </div>
                        <div>
                            <Chip label="使用技術" variant="outlined" />
                            <ul style={{ paddingLeft: "1em" }}>
                                <li>JavaScript</li>
                                <li>Web Speech API</li>
                                <li>React</li>
                                <li>MUI</li>
                                <li>Framer Motion</li>
                                <li>GitHub Pages</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default Production;
