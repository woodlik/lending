import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'color': '#4d4d4d',
    'fontFamily': '"Open Sans", Arial, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'header': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 84 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '99'
  },
  'wrapper': {
    'maxWidth': [{ 'unit': 'px', 'value': 1250 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  'logo a': {
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'borderRadius': '50%',
    'color': '#ffffff',
    'fontFamily': '"Montserrat", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 45 }],
    'fontWeight': '700',
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'textTransform': 'uppercase'
  },
  'header-wrap': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between'
  },
  'menu__item': {
    'marginLeft': [{ 'unit': 'px', 'value': 90 }],
    'position': 'relative'
  },
  'menu__item:last-child::after': {
    'display': 'none'
  },
  'menu__item ::after': {
    'content': '"\\\\"',
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'color': '#ffffff',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 39 }]
  },
  'menu__link': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'textTransform': 'uppercase',
    'color': '#ffffff'
  },
  'menu__link:hover': {
    'color': 'black'
  },
  'menu': {
    'listStyle': 'none',
    'display': 'flex'
  },
  // Banner
  'banner': {
    'background': 'url("../img/banner.png") no-repeat center',
    'height': [{ 'unit': 'px', 'value': 1100 }],
    'paddingTop': [{ 'unit': 'px', 'value': 450 }],
    'textAlign': 'center',
    'paddingBottom': [{ 'unit': 'px', 'value': 280 }]
  },
  'h1': {
    'color': '#ffffff',
    'fontWeight': '300',
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 45 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -0.9 }],
    'marginBottom': [{ 'unit': 'px', 'value': 90 }]
  },
  'h1 lg': {
    'fontSize': [{ 'unit': 'px', 'value': 70 }],
    'fontWeight': '700',
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'display': 'block',
    'letterSpacing': [{ 'unit': 'px', 'value': -4.2 }]
  },
  'h1 sm': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -2.4 }]
  },
  // button
  'btn': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'height': [{ 'unit': 'px', 'value': 42 }],
    'padding': [{ 'unit': 'px', 'value': 11 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'backgroundColor': 'transparent',
    'color': '#fff',
    'fontFamily': '"Open Sans", Arial, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'textDecoration': 'none'
  },
  'btn:hover': {
    'backgroundColor': '#f39c12',
    'color': '#fff',
    'textDecoration': 'none',
    'borderColor': '#f39c12'
  },
  // About
  'about': {
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }]
  },
  'heading': {
    'display': 'flex',
    'alignItems': 'center',
    'MsFlexItemAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'heading h2': {
    'color': '#0d0d0d',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '700',
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'textTransform': 'uppercase',
    'position': 'relative',
    'marginRight': [{ 'unit': 'px', 'value': 40 }]
  },
  'heading h2::after': {
    'content': '""',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 4 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'backgroundColor': '#f39c12',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 19 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -22 }]
  },
  'heading p': {
    'color': '#4d4d4d',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'textTransform': 'uppercase'
  },
  'h6': {
    'color': '#0d0d0d',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'textTransform': 'uppercase'
  },
  // About
  'about-wrap': {
    'display': 'flex',
    'alignItems': 'flex-start',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e6e6e6' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 120 }]
  },
  'about-wrap-content__icon': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': [{ 'unit': 'px', 'value': 125 }],
    'height': [{ 'unit': 'px', 'value': 125 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f39c12' }],
    'backgroundColor': '#ffffff',
    'borderRadius': '50%',
    'flex': 'none',
    'marginRight': [{ 'unit': 'px', 'value': 29 }],
    'fontSize': [{ 'unit': 'px', 'value': 40 }]
  },
  'about-wrap-content': {
    'display': 'flex',
    'alignItems': 'flex-start',
    'marginRight': [{ 'unit': 'px', 'value': 60 }],
    'flex': '1'
  },
  'about-text': {
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'px', 'value': 0 }],
    'color': '#e74c3c',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '300'
  },
  'about-info': {
    'color': '#737373',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'about-wrap-content__text h6': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'about-wrap-content__text about-text': {
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'color': '#e74c3c',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '300',
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'about-wrap-content': {
    'display': 'flex',
    'alignItems': 'flex-start',
    'marginRight': [{ 'unit': 'px', 'value': 60 }]
  },
  'about-wrap-content__icon': {
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 125 }],
    'height': [{ 'unit': 'px', 'value': 125 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f39c12' }],
    'backgroundColor': '#ffffff'
  },
  'about-wrap-img': {
    'marginLeft': [{ 'unit': 'px', 'value': 60 }],
    'position': 'relative'
  },
  'about-wrap': {
    'display': 'flex',
    'alignItems': 'flex-start',
    'marginRight': [{ 'unit': 'px', 'value': 60 }],
    'flex': 'none'
  },
  'about-wrap-img': {
    'position': 'relative'
  },
  'about-wrap-img__icon': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 32 }]
  }
});
