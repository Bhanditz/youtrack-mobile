import {StyleSheet} from 'react-native';
import bottomPadding from '../bottom-padding/bottom-padding';
import {
  UNIT,
  FOOTER_HEIGHT,
  COLOR_PINK,
  COLOR_SELECTED_DARK,
  COLOR_GRAY,
  COLOR_TRANSPARENT_BLACK,
  COLOR_FONT_GRAY,
  COLOR_FONT_ON_BLACK,
  COLOR_BLACK,
  COLOR_DARK_BORDER
} from '../../components/variables/variables';

const SAVING_ALPHA = '70';
const DONE_BUTTON_HEIGHT = 24;

export default StyleSheet.create({
  placeholder: {
    height: FOOTER_HEIGHT + bottomPadding,
    backgroundColor: COLOR_BLACK
  },
  customFieldsPanel: {
    paddingLeft: UNIT,
    flexDirection: 'row',
    backgroundColor: COLOR_BLACK,
    height: FOOTER_HEIGHT + bottomPadding,
    borderTopWidth: 1,
    borderColor: COLOR_DARK_BORDER,
    flexShrink: 0
  },

  modal: {
    flex: 1,
    justifyContent: 'space-between',
    left: 0,
    right: 0,
    bottom: 0
  },

  editorViewContainer: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: COLOR_TRANSPARENT_BLACK
  },
  calendar: {
    padding: UNIT*2,
    paddingBottom: UNIT
  },
  clearDate: {
    paddingTop: UNIT,
    paddingBottom: UNIT,
    color: COLOR_PINK
  },
  simpleValueInput: {
    paddingTop: 2,
    paddingBottom: 2,

    height: UNIT * 4,
    margin: UNIT,
    paddingLeft: UNIT,
    backgroundColor: COLOR_SELECTED_DARK,
    color: COLOR_FONT_ON_BLACK
  },
  savingFieldIndicator: {
    backgroundColor: `#CCCCCC${SAVING_ALPHA}`,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  doneButton: {
    backgroundColor: COLOR_PINK,
    padding: UNIT,
    paddingBottom: UNIT + bottomPadding
  },
  doneButtonText: {
    height: DONE_BUTTON_HEIGHT,
    fontSize: 20,
    color: COLOR_FONT_ON_BLACK,
    textAlign: 'center'
  }
});

export const calendarTheme = {
  calendarBackground: COLOR_BLACK,
  textSectionTitleColor: COLOR_GRAY,
  selectedDayBackgroundColor: COLOR_PINK,
  selectedDayTextColor: COLOR_FONT_ON_BLACK,
  todayTextColor: COLOR_PINK,
  dayTextColor: COLOR_FONT_ON_BLACK,
  textDisabledColor: COLOR_FONT_GRAY,
  dotColor: COLOR_FONT_ON_BLACK,
  selectedDotColor: COLOR_FONT_ON_BLACK,
  arrowColor: COLOR_PINK,
  monthTextColor: COLOR_FONT_ON_BLACK
};
