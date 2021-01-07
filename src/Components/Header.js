import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {style} from '../constants/variables';

export class Header extends React.Component {
  render() {
    const {
      title,
      headerIcons,
      onBackPress,
      containerStyle,
      size,
      hideBack,
      closeIcon,
      rightActbtn,
      rightActbtnAction,
      rightBtnContent
    } = this.props;
    const CustomHeader = headerIcons;
    const iconTop = closeIcon ? 'close-blue' : 'rollup';
    return (
      <View style={[headerStyle.headerView, containerStyle]}>
        {!hideBack && (
          <TouchableOpacity
            onPress={onBackPress}
            style={headerStyle.btn}
            hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}>
            <View 
            >
                <Icon name="arrow-left" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
        )}
        {
          title ? 
          <Text style={headerStyle.title}>{title}</Text>:null
        }
        {headerIcons && <CustomHeader />}
        {rightActbtn && rightBtnContent && (
          <TouchableOpacity
            onPress={rightActbtnAction}
            style={headerStyle.btn}
            hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}>
            <View >
              {rightBtnContent}
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const headerStyle = StyleSheet.create({
  headerView: {
    backgroundColor: '#9370db',
    color: '#fff',
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: style.border.color.darkGray,
    marginRight: 16,
    width: '100%'
  },
  image: {
    height: 24,
    width: 24,
  },
  title: {
    marginLeft: 4,
    flexGrow: 1,
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    fontFamily: style.font.family.rMedium,
  },
  btn: {
    margin: 16,
    alignItems: 'center',
    zIndex: 99999,
  }
});
