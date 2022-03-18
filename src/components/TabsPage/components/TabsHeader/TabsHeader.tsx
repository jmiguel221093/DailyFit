import { ScrollView, Dimensions } from 'react-native';

import { TabPage } from '../Tab';
import Styles from '../../TabsPage.styles';
import type { TabsPageItemProps } from '../../TabsPage.props';
import type { TabsHeaderProps } from './TabsHeader.props';
import { scaleSize, spacing } from '../../../../styles';

const TabsHeader = ({ tabs, selectedTab, onSelectTab }: TabsHeaderProps) => {
    const { width } = Dimensions.get('window');
    const renderTab = ({
        item,
        index,
    }: {
        item: TabsPageItemProps;
        index: number;
    }) => (
        <TabPage
            key={item.id}
            title={item.title}
            selected={selectedTab === item.id}
            isLastItem={index === (tabs ? tabs.length - 1 : 0)}
            onPress={() => onSelectTab && onSelectTab(item.id)}
        />
    );
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={Styles.tabsContainer}
            snapToAlignment="center"
            snapToOffsets={[...Array(tabs.length)].map(
                (x, i) =>
                    i * (scaleSize(38) + 2 * spacing('extraLoose')) -
                    (width - scaleSize(38)) / 2
            )}
            snapToEnd
        >
            {tabs.map((item, index) => renderTab({ item, index }))}
        </ScrollView>
    );
};

export default TabsHeader;
