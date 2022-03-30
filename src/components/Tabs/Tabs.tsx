import { Children, Fragment, cloneElement } from 'react';
import { ScrollView, View } from 'react-native';
import type { ViewStyle } from 'react-native';

import Styles from './Tabs.styles';
import type { TabsProps } from './Tabs.props';

import { Panel, Tab } from './components';

const Tabs = ({
    tabs,
    panelsContent,
    selectedTab,
    onTabChange,
    renderPanel,
}: TabsProps) => {
    const tabStyles: ViewStyle = { ...Styles.tab };

    const handleTabChange = (id: string) => {
        if (onTabChange) onTabChange(id);
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const renderTabContent = (tabContent: any, i: number) => {
        const panel: React.ReactElement = renderPanel(tabContent, i);
        if (panel.type !== Panel) {
            /* eslint-disable no-console */
            console.warn('Tabs: children must be a Tabs.Panel component');
        }
        const panelComponent = cloneElement(panel, {
            ...panel.props,
            showPanel: selectedTab === tabContent.id,
        });
        return panelComponent;
    };

    const panelListMakup =
        /* eslint-disable no-extra-parens */
        panelsContent && panelsContent.length > 0
            ? /* eslint-disable indent */
              Children.toArray(
                  panelsContent.map((tabContent, i) => (
                      <Fragment key={`tab-panel-${i}`}>
                          {renderTabContent(tabContent, i)}
                      </Fragment>
                  ))
              )
            : null;

    return (
        <View style={Styles.container}>
            {tabs && (
                <ScrollView
                    horizontal
                    style={Styles.header}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={Styles.headerContainer}>
                        {tabs.map((tab, i) => (
                            <Tab
                                key={tab.id}
                                tabStyles={{
                                    notLastTab: Styles.notLastTab,
                                    tabActive: Styles.tabActive,
                                    tabText: Styles.tabText,
                                }}
                                isSelected={tab.id === selectedTab}
                                isLast={i === tabs.length - 1}
                                id={tab.id}
                                title={tab.title}
                                onPress={handleTabChange}
                                style={tabStyles}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}
            {panelListMakup}
        </View>
    );
};

Tabs.Panel = Panel;

export default Tabs;
