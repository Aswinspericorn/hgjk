import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
const EnterDob = () => {
    const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <TextInput
        isvalid={error.date && !!error.date}
        keyBoardtype="number-pad"
        value={inputValues.date}
        style={{width: '58%'}}
        textStyle={{flex: 2}}
        max={5}
        icon={<FontAwesome name="calendar" size={21} color="#BFC1C8" />}
        onChange={inputChangeHandler.bind(this, 'date')}
        isOpen={showDatepicker}>
        Expery Date
      </TextInput>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="date"
          is24Hour={true}
          onChange={inputChangeHandler.bind(this, 'dateCalender')}
        />
      )}
    </>
  );
};
export default EnterDob;
