import { StyleSheet } from "react-native";

export default StyleSheet.create({
    filled:{
        withIcon:{
            flexDirection: "row",
            borderRadius: 100,
            flex: 1,
            widht: "100%",
            gap: 8,
            paddingVertical: 10,
            paddingHorizontal: 16,
            justifyContent: "center",
            backgroundColor: "#00ff00"
        },
        withoutIcon:{
            flexDirection: "row",
            borderRadius: 100,
            flex: 1,
            gap: 8,
            widht: "100%",
            paddingVertical: 10,
            paddingHorizontal: 24,
            justifyContent: "center",
            backgroundColor: "#00ff00"
        }
    },
});
