import {
    ResourceList,
    ResourceItem,
    TabsPage,
    Text,
} from '../../../../components';

import { NutritionalPlanStyles } from '../../../../styles';

import type { DietItemType } from '../../../../api';
import type { DietProps } from './Diet.props';

const DietItem = ({ tabSource, items, onSelectItem }: DietProps) => {
    const renderItem = (item: DietItemType, index: number) => (
        <ResourceItem
            id={item.id}
            isLastChild={index === (items ? items.length - 1 : 0)}
            onPress={onSelectItem}
        >
            <Text type="heading">{item.time}</Text>
            <Text>{item.description}</Text>
        </ResourceItem>
    );
    return (
        <TabsPage.Section source={tabSource}>
            <ResourceList
                items={items}
                renderItem={(item, index) => renderItem(item, index)}
                style={NutritionalPlanStyles.resourceList}
            />
        </TabsPage.Section>
    );
};

export default DietItem;
