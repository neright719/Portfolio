import {
    Box,
    Avatar,
    Grid,
    Paper,
    Typography,
    Divider,
    Stack,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SctionTitle";
import img from "../assets/avatar2.jpg";
import History from "./History";

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle title="About Me" subtitle="中の人" />
            </Grid>
            <Grid
                item
                lg={6}
                md={6}
                xs={12}
                style={{
                    padding: "1em 5em",
                }}
            >
                <motion.img
                    src={img}
                    style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        borderRadius: "50%",
                        filter: "grayscale(0.3)"
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
                    color: "white",
                }}
            >
                <motion.div>
                    <table>
                        <tbody>
                            <motion.tr>
                                <td>名前：</td>
                                <td>Nakatsuka</td>
                            </motion.tr>
                            <motion.tr>
                                <td>趣味：</td>
                                <td>
                                    音楽&nbsp;/&nbsp;映画&nbsp;/&nbsp;ニュースを見る
                                </td>
                            </motion.tr>
                            <motion.tr>
                                <td>癖：</td>
                                <td>気になったことはすぐ調べる</td>
                            </motion.tr>
                            <motion.tr>
                                <td>強み：</td>
                                <td>独学で進んできたため情報収集能力は高い</td>
                            </motion.tr>
                            <motion.tr>
                                <td>弱み：</td>
                                <td>緊張しい</td>
                            </motion.tr>
                        </tbody>
                    </table>
                    <motion.div>
                        <motion.p>
                            小学生の頃に始めたブログをカスタマイズするためにCSSを触ったことがきっかけとなりIT系の独学を始める。
                        </motion.p>
                        <motion.p>
                            javascriptが一番初めに触ったプログラミング言語となり、ライブラリのjQueryは当時流行していたこともあり不便なく扱える。
                        </motion.p>
                        <motion.p>
                            その後、Pythonを使用したスクレイピングを主に行う。
                        </motion.p>
                        <motion.p>
                            仮想化環境の構築やローカルサーバーの構築を行い、後にLinuxをメインPCとして使う中でLinuxコマンドも習得。
                        </motion.p>
                        <motion.p>
                            技術系の情報を見るのが好きで、気になった技術は積極的に触る
                        </motion.p>
                        <motion.p>
                            コンビニの店長/マネージャーを長期務め、傍らGASでクローラーの作成やLINE
                            Notify APIを使用したBotを作成する。
                        </motion.p>
                        <motion.p>2022年1月 IT業界へ転職</motion.p>
                        <motion.p>現在は主にReactを学習中</motion.p>
                    </motion.div>
            </motion.div>
            </Grid>
        </Grid>
    );
};

export default About;
