import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { getAllCoinsList } from '../../actions/action.getAllCoins';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Style } from './style';

class HomeScreen extends Component {

  componentDidMount = async () => {
    await this.props.getAllCoinsList();
    setInterval( async () => await this.props.getAllCoinsList(), 30000);
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={Style.coinListView}>
        <Image
          style={Style.mainWalletImg}
          source={{
            uri: item.image,
          }}
        />
        <View style={Style.mainWalletTitleView}>
          <Text style={Style.mainWalletTitle}>{item.name}</Text>
          <Text style={Style.upperCaseText}>{(Math.random().toFixed(1))} {item.symbol}</Text>
          </View>
          <View style={Style.mainWalletIcon}>
          <Text style={Style.boldFont}>${item.current_price}</Text>
          {item.price_change_percentage_24h > 0 ? (
            <Text style={Style.caretUp}><Icon name="caret-up" size={15} color="green"/> {(item.price_change_percentage_24h).toFixed(2)}</Text>
          ): (
            <Text style={Style.caretDown}><Icon name="caret-down" size={15} color="red"/> {(item.price_change_percentage_24h).toFixed(2)}</Text>
          ) }
        </View>
      </View>
    );
  };

  render() { 

    const { navigation, coinsReducer } = this.props;
    const allCoins = [...coinsReducer.coinsList];
    const filteredCoinsList = [...coinsReducer.filteredCoins];

    return ( 
      <View style={Style.container}>
        <View style={Style.mainHeader}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('CustomWalletScreen');
            }}>
                <Text style={Style.mainheaderControl}>
                  <Icon name="list" size={20} color="#fff" />
                </Text>
            </TouchableOpacity>
            <Text style={Style.mainHeaderTitle}>
                Your Accounts
            </Text>
            <Text style={Style.mainHeaderPrice}>
                $36,400
            </Text>
            <View style={Style.flexRow}>
                <TouchableOpacity style={Style.buyButton}> 
                <Text style={Style.buyBtnText}>Buy BTC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.rechargeButton}> 
                <Text style={Style.rechargeBtnText}>Recharge Wallet</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={Style.inrDepStrip}>
            <Text style={Style.inrDepText}>
                INR Deposits are live. Deposit Now.
            </Text>
            <Text style={Style.inrDepIcon}>
              <Icon name="angle-right" size={20} color="#fff"/>
            </Text>
        </View>
          <View style={Style.mainWalletContiner}>
            <Image
              style={Style.mainWalletImg}
              source={{
                uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
              }}
            />
            <View style={Style.mainWalletTitleView}>
              <Text style={Style.mainWalletTitle}>Indian Rupee</Text>
              <Text>10,500</Text>
            </View>
            <View style={Style.mainWalletIcon}>
              <Icon name="angle-right" size={20} color="#000"/>
            </View>
          </View>
          <View style={Style.coinsListContainer}>
            <FlatList
              data={filteredCoinsList.length > 0 ? filteredCoinsList : allCoins}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.id}
            />
          </View>
      </View>
     );
  }
}

const mapStateToProps = state => {
  return {
    coinsReducer: state.getAllCoinsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCoinsList: () => dispatch(getAllCoinsList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);