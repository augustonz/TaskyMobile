import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles.js';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
    )
}