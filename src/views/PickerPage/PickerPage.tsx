import { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { HorizontalPicker } from '../../components';

const items = Array.from({ length: 300 }, (_, i) => i + 30);

const PickerPage = () => {
    const [value, setValue] = useState<number>(20);

    return (
        <View>
            <HorizontalPicker value={value} onChange={setValue} items={items} />
        </View>
    );
};

export default PickerPage;
