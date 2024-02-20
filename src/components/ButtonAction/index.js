import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Label from "../Label";
import styles from "./styles";

export default function ButtonAction({
    text,
    action,
    type,
    icon,
}){
    let style = {};
    switch (type) {
        case 'filled':
            if(icon){
                style = styles.filled.withIcon;
            }
            else{
                style = styles.filled.withoutIcon;
            }
            break;
    
        default:
            break;
    }
    
    const selected = style;

    return (
        <TouchableOpacity
            onPress={action}
            style={selected}>
            <Label type="label" size="large" text={text} color={"#000"} fontWeight={"bold"}/>
        </TouchableOpacity>
    );
}