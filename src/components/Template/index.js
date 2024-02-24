import { View } from "react-native-web";
import styles from "./styles";
import { Text } from "react-native";

export default function Template({ content }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {content}
            </View>
            <View style={styles.containerMenu}>
                <View style={styles.menu}>
                    <View style={styles.menuItem}>
                        <Text>Oi</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text>Oi</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text>Oi</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
