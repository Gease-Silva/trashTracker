import React from "react";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import ButtonAction from "../../components/ButtonAction";
import styles from "./styles";
import Template from "../../components/Template";

export default function Teste(route, navigation) {
    const data = [
        { id: 1, trashType: "Orgânico", address: "Parque Cimentolania - 165", collectStatus: true, collectDate: "2024-02-23" },
        { id: 2, trashType: "Plástico", address: "Rua 2", collectStatus: false, collectDate: "2024-02-24" },
        { id: 3, trashType: "Papel", address: "Rua 3", collectStatus: true, collectDate: "2024-02-25" },
        { id: 4, trashType: "Vidro", address: "Rua 4", collectStatus: false, collectDate: "2024-02-26" },
        { id: 5, trashType: "Metal", address: "Rua 5", collectStatus: true, collectDate: "2024-02-27" },
    ];

    function nav(){
        navigation.navigate('Home');
    }
    
    return (
        <SafeAreaView style={styles.container}>            
            <Template
                content = {<View>
                                <ButtonAction type={"filled"} text={"Teste"} action={nav} />
                            </View>}
            />
        </SafeAreaView>
    );
}