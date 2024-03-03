import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        width: 352,
        borderWidth: 1,
        borderRadius: 21,
        marginBottom: 14,
    },
    icon: {
        margin: 10,
        paddingLeft: 8
    },
    details: {
        flex: 1,
        paddingHorizontal: 10,
        gap: 4,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateIcon: {
        marginRight: 5,
    },
    textTrashContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
        paddingRight: 5,
    },
    typeTextTrash: {
        fontWeight: "600",
    },
    textDateDetails: {
        fontWeight: '600',
        flex: 1,
    }
});

export default styles;