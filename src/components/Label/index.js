import { Text } from "react-native";
import styles from "./styles";

export default function Label({
    type,
    size,
    text,
    color,
    fontWeight
}) {
    let style = {};

    switch (type) {
        case "display":
            style = size === "large" ? styles.display.large :
                size === "medium" ? styles.display.medium :
                    style = styles.display.small;
            break;
        case "headline":
            style = size === "large" ? styles.headline.large :
                size === "medium" ? styles.headline.medium :
                    style = styles.headline.small;
            break;
        case "title":
            style = size === "large" ? styles.title.large :
                size === "medium" ? styles.title.medium :
                    style = styles.title.small;
            break;
        case "label":
            style = size === "large" ? styles.label.large :
                size === "medium" ? styles.label.medium :
                    style = styles.label.small;
            break;
        case "body":
            style = size === "large" ? styles.body.large :
                size === "medium" ? styles.body.medium :
                    style = styles.body.small;
            break;
    }
    const selected = { style, color: color, fontWeight };

    return (
        <Text style={selected}>
            {text}
        </Text>
    );
}