import { Box, FormLabel, Heading, Select, TagLabel } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Task from "./Task";

const Dashboard = () => {
    const [allTask, SetAllTask] = useState([]);

    const getAllTask = async () => {
        const res = await axios.get("https://wild-mite-shrug.cyclic.app/task");
        console.log(res.data);
        return res.data;
    };

    useEffect(() => {
        getAllTask().then((res) => SetAllTask(res));
    }, []);

    const [progressTask, SetProgressTask] = useState([]);
    const [doneTask, SetDoneTask] = useState([]);

    const getTaskByStatus = async (status) => {
        const res = await axios.get(
            `https://wild-mite-shrug.cyclic.app/task/byStatus?status=${status}`
        );
        console.log(res.data);
        return res.data;
    };

    useEffect(() => {
        getTaskByStatus("In_Progress").then((res) => SetProgressTask(res));
        getTaskByStatus("Done").then((res) => SetDoneTask(res));
    }, []);

    return (
        <Box>
            <br />
            <Heading textAlign={"center"}>Dashboard</Heading>
            <br />
            <Box
                width={"90%"}
                margin={"auto"}
                display={"grid"}
                gridTemplateColumns={"repeat(3,1fr)"}
                gap={10}
            >
                <Box bg={"skyblue"} color={"white"} padding={3} borderRadius={"md"} height={"max-content"}>
                    <Heading size={"md"} textAlign={"center"}>
                        Every Task
                    </Heading>
                    <br />
                    <Box display={"grid"} gap={3}>
                        {allTask.map((ele) => (<Task ele={ele}/>))}
                    </Box>
                </Box>
                <Box bg={"skyblue"} color={"white"} padding={3} borderRadius={"md"} height={"max-content"}>
                    <Heading size={"md"} textAlign={"center"}>
                        In Progress Task
                    </Heading>
                    <br />
                    <Box display={"grid"} gap={3}>
                        {progressTask.map((ele)=>(<Task ele={ele}/>))}
                    </Box>
                </Box>
                <Box bg={"skyblue"} color={"white"} padding={3} borderRadius={"md"} height={"max-content"}>
                    <Heading size={"md"} textAlign={"center"}>
                        Done Task
                    </Heading>
                    <br />
                    <Box display={"grid"} gap={3}>
                        {doneTask.map((ele)=>(<Task ele={ele}/>))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
