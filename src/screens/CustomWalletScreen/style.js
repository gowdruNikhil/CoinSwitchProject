import { StyleSheet, Dimensions } from 'react-native';

export const Style = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    headerBackgroundColor: {
        backgroundColor: '#9370db'
    },
    listView: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 5,
        padding: 10, 
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    listImg: {
        width: 20,
        height: 20, 
        borderRadius: 50, 
        overflow: 'hidden', 
        marginLeft: 20
    },
    padding10: {
        paddingLeft: 10
    },
    autoMarginLeft: {
        marginLeft: 'auto'
    }
})