import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {

    const { inputStyle, lableStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={lableStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={inputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    lableStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };