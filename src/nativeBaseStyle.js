import merge from 'lodash/merge';
import getTheme from 'native-base/src/theme/components';
import variables from 'native-base/src/theme/variables/commonColor';

// Update the variables which depend on the platform condition
// See native-base/src/theme/variables/commonColor.js for detail
// We will choose ios as the default platform then change the variables as we need
merge(variables, {
  platform: 'ios',
  cardItemPadding: 10,
  CheckboxRadius: 13,
  CheckboxBorderWidth: 1,
  CheckboxPaddingLeft: 4,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 21,
  CheckboxIconMarginTop: undefined,
  CheckboxFontSize: 23 / 0.9,
  brandPrimary: '#fff',
  fontFamily: 'RobotoLight',
  toolbarBtnColor: '#007aff',
  toolbarSearchIconSize: 20,
  toolbarBtnTextColor: '#007aff',
  toolbarDefaultBorder: '#a7a6ab',
  radioBtnSize: 25,
  radioBtnLineHeight: 29,
  segmentBackgroundColor: '#F8F8F8',
  segmentActiveBackgroundColor: '#007aff',
  segmentTextColor: '#007aff',
  segmentActiveTextColor: '#fff',
  segmentBorderColor: '#007aff',
  segmentBorderColorMain: '#a7a6ab',
  titleFontfamily: 'RobotoLight',
  titleFontSize: 17,
  subTitleFontSize: 11,
  subtitleColor: '#000',
  titleFontColor: '#000',
  borderRadiusBase: 3,
  inverseTextColor: '#000',
  toolbarDefaultBg: '#e0e0e0',
  tabDefaultBg: '#e0e0e0',
  get btnTextSize() {
    return this.fontSizeBase * 1.1;
  },
});

// Build the style object from the above variables
const nativeBaseStyle = getTheme(variables);

// This recursively update the whole style
// Will be useful for which field we need to update for every components
const recursiveUpdateStyle = obj => {
  Object.entries(obj).forEach(([k, v]) => {
    if (k === 'fontFamily') {
      obj[k] = 'RobotoLight';
    } else if (k === 'borderRadius') {
      obj[k] = 3;
    } else if (v && typeof v === 'object') {
      recursiveUpdateStyle(v);
    }
  });
};
recursiveUpdateStyle(nativeBaseStyle);

console.warn(nativeBaseStyle);

// Other small/accuracy modifications will be put here
// We should take a look at the default components to see the keys
merge(nativeBaseStyle, {
  'NativeBase.Header': {
    '.noLeft': {
      'NativeBase.Left': {
        width: 0,
        flex: 1,
      },
    },
    borderBottomColor: null,
    borderBottomWidth: null,
  },
  'NativeBase.TabHeading': {
    '.active': {
      'NativeBase.Text': {
        color: '#000',
      },
    },
    'NativeBase.Text': {
      color: '#adadad',
    },
  },
  'NativeBase.Footer': {
    backgroundColor: '#000',
  },
  'NativeBase.FooterTab': {
    'NativeBase.Button': {
      'NativeBase.Icon': {
        color: '#000',
      },
      'NativeBase.Text': {
        color: '#000',
      },
    },
    backgroundColor: '#e0e0e0',
  },
  variables: {
    topTabBarActiveBorderColor: '#4cc5de',
  },
  'NativeBase.Badge': {
    '.brekeke': {
      backgroundColor: '#4cc5de',
    },
  },
  'NativeBase.ListItem': {
    '.listUser': {
      // -> components-Recent/Recents + PageContact
      'NativeBase.Left': {
        flex: 0.25,
      },
      'NativeBase.Body': {
        'NativeBase.Text': {
          marginLeft: null,
          paddingVertical: 3,
        },
        flex: 1,
        paddingVertical: variables.listItemPadding + 2,
        marginLeft: variables.listItemPadding + 5,
      },
      'NativeBase.Right': {
        'NativeBase.Button': {
          '.transparent': {
            'NativeBase.Text': {
              fontSize: variables.listNoteSize,
              color: variables.sTabBarActiveTextColor,
            },
          },
          height: null,
        },
        flex: 0.25,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingRight: variables.listItemPadding + 5,
        paddingVertical: variables.listItemPadding + 5,
      },
    },
  },
  'NativeBase.Fab': {
    'NativeBase.Button': {
      backgroundColor: '#74bf53',
    },
  },
  'NativeBase.Left': {
    '.callBar': {
      'NativeBase.Left': {
        'NativeBase.Button': {
          justifyContent: 'center',
          borderRadius: variables.listItemPadding * 4,
          width: variables.listItemPadding * 6,
          height: variables.listItemPadding * 6,
        },
        'NativeBase.Text': {
          paddingTop: variables.listItemPadding,
          fontSize: variables.listItemPadding,
        },
        alignItems: 'center',
        marginHorizontal: variables.listItemPadding,
      },
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: variables.listItemPadding * 2,
      marginLeft: variables.listItemPadding,
      marginRight: variables.listItemPadding,
    },
    '.hangUp': {
      'NativeBase.Left': {
        'NativeBase.Button': {
          justifyContent: 'center',
          borderRadius: variables.listItemPadding * 4,
          width: variables.listItemPadding * 6,
          height: variables.listItemPadding * 6,
        },
        'NativeBase.Text': {
          fontWeight: '700',
          paddingTop: variables.listItemPadding,
        },
        alignItems: 'center',
        marginHorizontal: variables.listItemPadding,
      },
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: variables.listItemPadding * 2,
      marginLeft: variables.listItemPadding,
      marginRight: variables.listItemPadding,
    },
    '.leftpd18': {
      marginLeft: variables.listItemPadding + 12,
      marginTop: variables.listItemPadding,
      alignSelf: 'flex-start',
    },
    '.leftmgt100': {
      marginTop: '100%',
    },
    '.leftmgt30': {
      marginTop: '30%',
    },
  },
});

export default nativeBaseStyle;