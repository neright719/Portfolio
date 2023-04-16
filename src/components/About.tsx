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
import { useInView } from "framer-motion";
import SectionTitle from "./SctionTitle";
import img from "../assets/avatar.jpg";
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
                xs={6}
                style={{
                    padding: "1em 5em",
                }}
            >
                <img
                    src={img}
                    style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        borderRadius: "50%",
                    }}
                />
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    color: "white",
                }}
            >
                <table>
                    <tbody>
                        <tr>
                            <td>名前：</td>
                            <td>Nakatsuka</td>
                        </tr>
                        <tr>
                            <td>趣味：</td>
                            <td>
                                音楽&nbsp;/&nbsp;映画&nbsp;/&nbsp;ニュースを見る
                            </td>
                        </tr>
                        <tr>
                            <td>癖：</td>
                            <td>気になったことはすぐ調べる</td>
                        </tr>
                        <tr>
                            <td>強み：</td>
                            <td>独学で進んできたため情報収集能力は高い</td>
                        </tr>
                        <tr>
                            <td>弱み：</td>
                            <td>緊張しい</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p>
                        小学生の頃に始めたブログをカスタマイズするためにCSSを触ったことがきっかけとなりIT系の独学を始める。
                    </p>
                    <p>
                        javascriptが一番初めに触ったプログラミング言語となり、ライブラリのjQueryは当時流行していたこともあり不便なく扱える。
                    </p>
                    <p>その後、Pythonを使用したスクレイピングを主に行う。</p>
                    <p>
                        仮想化環境の構築やローカルサーバーの構築を行い、後にLinuxをメインPCとして使う中でLinuxコマンドも習得。
                    </p>
                    <p>
                        技術系の情報を見るのが好きで、気になった技術は積極的に触る
                    </p>
                    <p>
                        コンビニの店長/マネージャーを長期務め、傍らGASでクローラーの作成やLINE
                        Notify APIを使用したBotを作成する。
                    </p>
                </div>
            </Grid>
        </Grid>
    );
};

export default About;
