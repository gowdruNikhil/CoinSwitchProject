import React, {Component} from 'react';
import { View, Text, FlatList, Switch, Image } from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../../Components';
import { setFilterCoinsList } from '../../actions/action.getAllCoins';
import { Style } from './style';

class CustomWalletScreen extends Component {

  state = {
    toggleSwitch: false
  }

  toggleSwitch = () => {
    this.setState({toggleSwitch: !this.state.toggleSwitch})
  }

  handleSetFilterOfCoins = (id) => {
    if(id) this.props.setFilterList(id);
  }

  renderItem = ({ item }) => {
    const filteredCoinsList = this.props.coinsReducer.filterList;
    let isEnabled = false;
    const indexValue = filteredCoinsList.indexOf(item.id);
    if (indexValue > -1) {
      isEnabled = true;
    }

    return (
      <View key={item.id} style={Style.listView}>
        <Image
          style={Style.listImg}
          source={{
            uri: item.image,
          }}
        />
        <Text style={Style.padding10}>{item.name}</Text>
        <Switch style={Style.autoMarginLeft}
          trackColor={{ false: "#F5F5F5", true: "#9370db" }}
          thumbColor={isEnabled ? "#fff" : "#F5F5F5"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            this.toggleSwitch(),
            this.handleSetFilterOfCoins(item.id)
          }}
          value={isEnabled}
      />
      </View>
    );
  };

  render() { 
    const { navigation, coinsReducer } = this.props;
    const allCoins = coinsReducer.coinsList;
    return ( 
      <View style={Style.flexOne}>
        <Header title="Customise WatchList" 
            onBackPress={() => navigation.push('HomeScreen')}
        />
        <FlatList
          data={allCoins}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
     );
  }
}

const mapStateToProps = state => {
  return {
    coinsReducer: state.getAllCoinsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterList: id => {
      dispatch(setFilterCoinsList(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomWalletScreen);

