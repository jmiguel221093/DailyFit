import { View, Dimensions } from 'react-native';
import { HorizontalPicker } from '../../components';

const PickerPage = () => {
    const handlePickerChange = (value: number) => {
        // console.log(value);
    };
    return (
        <View>
            <HorizontalPicker
                itemsSize={300}
                itemWidth={Math.ceil(Dimensions.get('window').width / 5)}
                startsFrom={30}
                initialValue={80}
                onChange={handlePickerChange}
            />
        </View>
    );
};

export default PickerPage;
