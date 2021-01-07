import { StyleSheet, Dimensions } from 'react-native';

export const Style = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#F5F5F5'},
    mainHeader: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height/4, 
        backgroundColor: '#9370db'
    },
    mainheaderControl: {
        marginLeft: 'auto',
        marginRight: 40, 
        paddingTop: 10
    },
    mainHeaderTitle: {
        color: 'white', 
        paddingLeft: 30, 
        fontSize: 15
    },
    mainHeaderPrice: {
        color: 'white',
        paddingLeft: 30, 
        fontSize: 40
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },
    buyButton: { 
        width:120,
        height: 40,
        borderRadius:50,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft: 30
    },
    buyBtnText: {
        color: '#9370db', 
        fontWeight: 'bold'
    },
    rechargeButton: { 
        width:180,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
        marginLeft: 20
    },
    rechargeBtnText: {
        color:'#fff', 
        fontWeight: 'bold'
    },
    inrDepStrip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30 , 
        height: 40, 
        backgroundColor: '#9932cc'
    },
    inrDepText: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 16
    },
    inrDepIcon: {
        marginLeft: 'auto', 
        marginRight: 40
    },
    mainWalletContiner: {
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    mainWalletImg: {
        width: 40,
        height: 40, 
        borderRadius: 50, 
        overflow: 'hidden', 
        marginLeft: 10
    },
    mainWalletTitleView: {
        paddingLeft: 10
    },
    mainWalletTitle: {
        fontWeight: 'bold', 
        fontSize: 16
    },
    upperCaseText: {
        textTransform: 'uppercase'
    },
    mainWalletIcon: {
        marginLeft: 'auto', 
        marginRight: 20
    },
    coinsListContainer: {
        flex:1, 
        marginBottom: 1
    },
    coinListView: {
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
    boldFont: {
        fontWeight: 'bold'
    },
    caretUp: {
        textAlign: 'right', 
        color: 'green'
    },
    caretDown: {
        textAlign: 'right', 
        color: 'red'
    }
})