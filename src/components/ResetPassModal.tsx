import {Text} from 'react-native';
import React from 'react';
import {Button, Modal} from 'react-native-paper';

const ResetPassModal = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <Modal
      style={{flex: 1}}
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}>
      <Text>
        Example Modal. Click outside this area to
        didddddddddddddddddddddddddsmiss.
      </Text>
    </Modal>
  );
};

export default ResetPassModal;
