import * as React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './styles';

const TextField = ({ placeholderText }) => {
    const [text, setText] = React.useState('');

    return (
        <TextInput
            placeholder={placeholderText}
            value={text}
            onChangeText={text => setText(text)}
            left={<TextInput.Icon icon="mail" />}
        />
    );
};

export default TextField;