import { Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img from "../assets/avatar2.webp";
import SectionTitle from "./SctionTitle";

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px -20% 0px",
    });

    return (
        <Grid container>
            <SectionTitle title="About Me" subtitle="中の人" />
            <Grid
                item
                lg={6}
                md={6}
                xs={12}
                style={{
                    padding: "1em 5em",
                }}
                ref={ref}
            >
                <motion.img
                    src={img}
                    style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        // borderRadius: "50%",
                        clipPath: "circle(50% at 50% 50%)",
                        filter: "grayscale(0.3)",
                    }}
                    initial="init"
                    animate={inView && "anime"}
                    variants={{
                        init: {
                            clipPath: "circle(0% at 50% 50%)",
                        },
                        anime: {
                            clipPath: "circle(50% at 50% 50%)",
                        },
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                />
            </Grid>
            <Grid
                item
                lg={6}
                md={6}
                xs={12}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    color: "#333",
                }}
            >
                <motion.div
                    style={{
                        background: "white",
                        padding: "2em",
                        borderRadius: "5px",
                    }}
                    variants={{
                        init: {
                            opacity: 0,
                        },
                        anime: {
                            opacity: 1,
                        },
                    }}
                    initial="init"
                    animate={inView && "anime"}
                    transition={{
                        duration: 0.2,
                        delay: 0.3,
                    }}
                >
                    <table
                        style={{
                            marginBottom: "1em",
                        }}
                    >
                        <tbody>
                            <tr>
                                <td style={{ textAlign: "right" }}>名前：</td>
                                <td>Nakatsuka</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right" }}>趣味：</td>
                                <td>
                                    音楽&nbsp;/&nbsp;映画&nbsp;/&nbsp;ニュースを見る
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right" }}>強み：</td>
                                <td>情報収集能力/検索力</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right" }}>弱み：</td>
                                <td>緊張しい</td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        style={{
                            lineHeight: "1.5em",
                        }}
                    >
                        <p style={{ marginBottom: ".8em" }}>
                            小学生の時に流行していたAmebaブログを始め、CSSでデザインをカスタマイズし始めたことがきっかけとなりIT技術に興味を持つ。
                        </p>
                        <p style={{ marginBottom: ".8em" }}>
                            javascriptが一番初めに触ったプログラミング言語。ライブラリのjQueryは当時流行していたこともあり不便なく扱える。
                        </p>
                        <p style={{ marginBottom: ".8em" }}>
                            その後、Pythonを使用したスクレイピングを主に行う。
                        </p>
                        <p style={{ marginBottom: ".8em" }}>
                            仮想化環境の構築やローカルサーバーの構築を行い、後にLinuxをメインPCとして使う中でLinuxコマンドも習得。
                        </p>
                        <p style={{ marginBottom: ".8em" }}>
                            コンビニの店長/マネージャーを長期務め、傍らGASでクローラーの作成やLINE
                            Notify APIを使用したBotを作成する。
                        </p>
                        <p style={{ marginBottom: ".8em" }}>
                            2022年1月 IT業界へ転職。現在は主にReactを学習中。
                        </p>
                        <p style={{ marginBottom: ".8em" }}>
                            小学生の頃に始めたブログをカスタマイズするためにCSSを触ったことがきっかけとなりIT系の独学を始める。
                        </p>
                    </div>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default About;
