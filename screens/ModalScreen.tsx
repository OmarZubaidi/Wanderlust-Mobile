import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import { useUserContext } from '../contexts';
import { ITrip } from '../interfaces';

interface IProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

function TripSelector({ modalVisible, setModalVisible }: IProps) {
  const { userDetails } = useUserContext();

  function tripRenderer(trip: ITrip) {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(trip.destination);
          setModalVisible(!modalVisible);
        }}
      >
        <Text>{trip.destination}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View>
            <FlatList
              data={userDetails.Trips}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => tripRenderer(item)}
            />

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TripSelector;
