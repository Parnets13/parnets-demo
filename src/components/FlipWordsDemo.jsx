import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
    const words = [
        "development studio",
        "Innovation Hub",
        "Digital Workshop",
        "Creative Forge",
        "Tech Studio",
        "Tech Innovators",
        "Creative Studio",
        "Digital Studio",
        "Innovation Studio"
    ];

    return (
        <FlipWords words={words} />
    )
}
