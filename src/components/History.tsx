import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Avatar, Box, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const History = () => {
    return (
        <Timeline position="alternate" sx={{ color: "white" }}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary"></TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "0px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        独学
                    </Typography>
                    <Box>
                        <Typography>小学生の時に始めたブログのデザインをCSSで編集していくなかで、HTMLやjavascriptを学び</Typography>
                        <Typography>aaa</Typography>
                        <Typography>aaa</Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        color="primary"
                        variant="outlined"
                    ></TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "0px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        コンビニに就職
                    </Typography>
                    <Box>
                        <Typography>
                            店長/マネージャーとして勤務
                        </Typography>
                        <Typography>
                            LINE Notify APIを使用
                        </Typography>
                        <Typography>
                            GASを使用しクローラーを作成
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary"></TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "0px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        IT業界へ転職
                    </Typography>
                    <Typography>使ったことない技術ばかり！！！</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default History;
