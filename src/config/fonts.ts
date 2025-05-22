export type FontOptions =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const fontFamily: {[Font in FontOptions]: string} = {
  100: 'AncizarSans-Thin',
  200: 'AncizarSans-ExtraLight',
  300: 'AncizarSans-Light',
  400: 'AncizarSans-Regular',
  500: 'AncizarSans-Medium',
  600: 'AncizarSans-SemiBold',
  700: 'AncizarSans-Bold',
  800: 'AncizarSans-ExtraBold',
  900: 'AncizarSans-Black',
};
