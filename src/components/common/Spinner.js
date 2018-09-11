import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';


const Spinner = (props) => {
        return (
            <View style={styles.container}>
            <ActivityIndicator color='black' size={props.size || 'large'}/>
            </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Spinner } ;
