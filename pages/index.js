// @generated: @expo/next-adapter@2.1.52
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SSE } from "../utils/sse";

let sourceWith;
let sourceWithout;

let timerWith;

export default function App() {
    const [withChecks, setWithChecks] = useState([]);
    const [withoutChecks, setWithoutChecks] = useState([]);
    const [withChecksRunning, setWithChecksRunning] = useState(false);
    const [url, setUrl] = useState("https://quantum.sh");

    const addLog = (text, without) => {
        if (without)
            setWithoutChecks([
                { time: Date().toString(), text },
                ...withoutChecks,
            ]);
        else setWithChecks([{ time: Date().toString(), text }, ...withChecks]);
    };

    useEffect(() => {
        if (!withChecksRunning) {
            addLog("closed");
            if (timerWith) clearTimeout(timerWith);
        }
    }, [withChecksRunning]);

    const startPoll = async () => {
        try {
            if (withChecksRunning) {
                addLog("already running");
                return;
            }
            addLog("starting");
            setWithChecksRunning(true);

            if (sourceWith) sourceWith.close();
            if (timerWith) clearTimeout(timerWith);

            sourceWith = new SSE(url + "/api/document/poll", {
                headers: { "Content-Type": "application/json" },
                payload: JSON.stringify({ timeOnClient: Date().toString() }),
            });

            timerWith = setTimeout(() => {
                addLog("closed because no ping");
                setWithChecksRunning(false);
            }, 20000);
            sourceWith.addEventListener("message", (e) => {
                const news = JSON.parse(e.data);
                console.log(news);
                switch (news.messageCode) {
                    case "ping":
                        addLog(`ping ${news.time}`);

                        if (timerWith) clearTimeout(timerWith);
                        timerWith = setTimeout(() => {
                            addLog("closed because no ping");

                            setWithChecksRunning(false);
                        }, 20000);

                        break;
                }
            });

            sourceWith.addEventListener("error", function () {
                setWithChecksRunning(false);
            });
            sourceWith.stream();
        } catch (error) {
            setWithChecksRunning(false);
        }
    };
    const sendOneReq = async () => {
        try {
            const res = await axios.post(`${url}/api/utils/time`);
            if (res?.data?.time)
                addLog(`time on server from one time req: ${res.data.time}`);
        } catch (error) {
            addLog("one time req error");
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <Text>Url:</Text>
            <TouchableOpacity onPress={() => setUrl("http://localhost:5000")}>
                <Text>localhost:5000</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setUrl("https://quantum.sh")}>
                <Text>https://quantum.sh</Text>
            </TouchableOpacity>
            <View style={{ padding: 10, margin: 10, backgroundColor: "#ddd" }}>
                <TextInput value={url} onChangeText={setUrl} />
            </View>

            <TouchableOpacity
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: "green",
                    color: "white",
                }}
                onPress={startPoll}
            >
                <Text>Start poll (checks every 20 sec)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: "red",
                    color: "white",
                }}
                onPress={() => setWithChecksRunning(false)}
            >
                <Text>Stop poll</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: "red",
                    color: "white",
                }}
                onPress={sendOneReq}
            >
                <Text>One time req</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setWithChecks([])}
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: "grey",
                    color: "white",
                }}
            >
                <Text>Clear log</Text>
            </TouchableOpacity>
            <Text>Log</Text>
            {withChecks.map((item) => (
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Text>{item.time}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "blue" }}>{item.text}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
});
