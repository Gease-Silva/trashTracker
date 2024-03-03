import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filled:{
        withIcon:{
            flexDirection: "row",
            borderRadius: 100,
            overflow: 'hidden',
            gap: 8,
            paddingVertical: 10,
            paddingHorizontal: 16,
            justifyContent: "center",
            backgroundColor: "#00ff00"
        },
        withoutIcon:{
            flexDirection: "row",
            borderRadius: 100,
            overflow: 'hidden',
            gap: 8,
            paddingVertical: 10,
            paddingHorizontal: 24,
            justifyContent: "center",
            backgroundColor: "#00ff00"
        }
    },
});

export default styles;