import {Dimensions, Platform, StyleSheet} from 'react-native';

export const style = {
  device: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    height: Platform.OS === 'ios' ? 20 : 0, // Android, statusBar is outside App component by default, no overlay needed
  },
  height: {
    normal: 16, // according to zeplin
    normal18: 18,
    humongous: 90,
    huge: 70,
    large: 60,
    small: 32,
    small15: 15,
    small16: 16,
    small20: 20,
    small10: 10,
    small2: 2
  },
  width: {
    huge123: 123,
    small32: 32,
    small15: 15,
    small10: 10,
    small0: 0
  },
  font: {
    size: {
      humongous: 48,
      huger: 28,
      huge: 24,
      hugish: 22,
      largerish: 20,
      larger19: 19,
      larger: 18,
      large: 16,
      largish: 15,
      normal: 14,
      small: 12,
      smaller: 11,
      tiny: 10,
      tiny9: 9,
      mediumlarge: 20,
    },
    lineHeight: {
      tight: {
        humongous: 48,
        huger: 28,
        huge: 23,
        hugish: 22,
        larger: 20,
        large: 16,
        normal: 14,
        small: 12,
        smaller: 11,
      },
      normal: {
        huge: 28,
        hugish: 26,
        larger: 22,
        large: 19,
        normal: 17,
        small: 15,
        smaller: 13,
      },
      wide: {
        huge: 34,
        hugish: 32,
        larger: 27,
        large: 24,
        normal: 21,
        small: 18,
        smaller: 15,
      },
    },
    family: {
      robotoCondensedBold: 'RobotoCondensed-Bold',
      robotoCondensedRegular: 'RobotoCondensed-Regular',
      rBold: 'Roboto-Bold',
      rMedium: 'Roboto-Medium',
      rBlack: 'Roboto-Black',
    },
    weight: {
      humongous: '900',
      huger: '800',
      huge: '700',
      hugish: '600',
      larger: '500',
      large: '400',
      bolder: 'bolder',
      bold: 'bold',
      normal: 'normal',
      small: '300',
      smaller: '200',
      tiny: '100',
    },
    textTransform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase'
    }
  },
  icon: {
    size: {
      gargantuan: 120,
      humongous: 100,
      huge: 80,
      larger: 60,
      large: 40,
      normalish: 36,
      normal: 30,
      small: 27,
      smaller: 22,
      tab: 44,
    },
  },
  color: {
    // Add color name from https://www.color-blindness.com/color-name-hue/
    transparent: 'transparent',
    none: 'transparent',
    white: '#ffffff',
    black: '#000000',
    black_10: '#00000010',
    black_60: '#00000060',
    gray: '#333333',
    green: '#53a835',
    greenYellowish: '#f2ffee',
    darkGray: '#666666',
    borderGray: '#eef2f7',
    grayBg: '#f8f8f8',
    lightGray: '#f7f7f7',
    darkerGray: '#979797',
    mediumGrey: '#d1d1e0',
    veryLightGrey: '#cccccc',
    textGrey: '#999999',
    darkblue: '#0b2c3e',
    lighterBlue: '#005073',
    lightBlue: '#2cb3d0',
    backgroundBlue: '#d1eaf0',
    orange: '#ff7300',
    deepOrange: '#aa8000',
    lightRed: '#d0021b',
    red: '#e60000',
    persianRed: '#ce2a2a',
    lightOrange: '#fff5ed',
    skyBlue: '#44a6b6',
    // Card color
    chileanHeath: '#f7fdf4',
    // Button Color
    primary: '#ff7300',
    secondary: '#134f70',
    borderColor: '#eef2f7',
    cardBackgroundColor: '#f7f7f7',
    appBlue: '#074f71',
    bodyBg: '#f8f8f8',
    pageIndicatorActive: '#aeaeae',
    pageIndicatorInactive: '#e3e3e3',
    yellow: '#ffba00',
    subyellow: '#ffba00',
    bkgYellow: '#fff1ce',
    darkCerulean: '#005073',
    errorButtonColor: '#03a9f4',
    offerBg: '#edf6ea',
    placeHolder: '#fafafa',
    divider: '#d2dfe7',
    subBlue: '#eefcff',
    tealish: '#2cb3d0',
    tealishLight: '#e8f2f5',
    orangeYellowMix: '#be951a',
    pink: '#fef1f3',
    darkRed: '#e30c36',
    oliveGold:"#aa8000",
    darkChip:"#9aa4b0",
    skyBlue: '#EAF8FB',
    blueHighlight: '#c3f4ff',
    blueBackground: '#e4f0ff',
    blueBorder: '#5490d9',
    lightBlueBackground: '#d1dee4'
  },
  border: {
    width: {
      lighter: StyleSheet.hairlineWidth, // lighter:0.125,
      light: StyleSheet.hairlineWidth, // light:0.25,
      normal: StyleSheet.hairlineWidth * 2, // normal:0.5,
      heavy: 1, // heavy:1.0,
      heavier: 2, // heavier:1.5,
      heaviest: 3, // heaviest:3,
      humongous: 8,
    },
    color: {
      darkGray: 'rgba(182, 182, 182, 0.2)',
      lightBlue: '#d7e3e9',
      lightGray: '#eef2f7',
      gray: '#c6d6dd',
      orangeYellowMixDark: '#fdc10f',
    },
    radius: {
      smallest: 1,
      smaller: 2,
      small: 3,
      medium: 4,
      large: 5,
      larger: 6,
      xxlarge:10,
      xlarge:8,
      xxxlarge: 20,
      huge:25,
    },
    size: {
      xxlarge: 16
    },
    style: {
      dashed: 'dashed'
    }
  },
  shadow: {
    color: {
      gray: 'rgba(182, 182, 182, 0.5)',
    },
    radius: {
      smallest: 1,
      normal: 3.84,
    },
    height: {
      smallest: 1,
      small2: 2,
      normal: 16, // according to zeplin
    },
    width: {
      small0: 0,
      smallest: 1
    }
  },
  alpha: {
    darker: 0.9,
    dark: 0.85,
    normal: 0.75,
    light: 0.66,
    lighter: 0.5,
    lightest: 0.33,
    full: 0,
    none: 1,
  },
  padding: {
    humongous: 48,
    huge: 39,
    hugish: 28, // used to add extra padding to the bottom, as offset to the bottom menu bar (which should be 39...)
    larger: 24, // according to zeplin
    // larger: 19,
    large: 22,
    largish: 18,
    // large: 14.5,
    // normal: 10,
    medium: 20,
    normal: 16, // according to zeplin
    // small: 4.5,
    small15: 15,
    small: 12, // according to zeplin
    smallish11: 11,
    smallish: 10,
    // smallish: 3.5,
    smaller: 8,
    xsmall: 6,
    xxsmall: 5,
    xsmallish: 4,
    small3: 3,
    small2: 2,
    small1: 1,
    small0: 0,
    smallMinus10: -10,
    smallMinus12: 12
  },
  margin: {
    xhuge: 70,
    huge: 39,
    hugish: 28, 
    larger: 24, 
    // larger: 19,
    large: 22,
    largish: 18,
    // large: 14.5,
    // normal: 10,
    normal15: 15,
    normal: 16,
    // small: 4.5,
    smallMinus15: -15,
    small: 12,
    smallish: 10,
    // smallish: 3.5,
    smaller: 8,
    xsmall: 6,
    xsmall5: 5,
    xsmallish: 4,
    small2: 2,
    small0: 0,
  },

  absolute: {
    position: {
      small: 10,
      xxsmall: 5,
      xsmall4: 4
    },
    top: {
      small0: 0
    },
    right: {
      small0: 0
    },
    left: {
      small0: 0
    },
    bottom: {
      small0: 0
    }
  },
  elevation: {
    small: 2,
    small3: 3,
    medium: 4,
    xxsmall: 5,
    large: 6,
  },
  opacity: {
    small: 0.4,
    smallest: 0.25,
  },
  emptyStyle: {},
  flex0: {
    flex: 0
  },
  flex1: {
    flex: 1
  },
  zIndex: {
    small: 2,
    minues1: -1
  },
  top: {
    minues5: -5
  },
  flexDirection: {
    row: "row"
  },
  rotate: {
    degree45: '45deg'
  }

};

export const otpSmsRegex = /.*Medlife.*([\d]{6}).*/;