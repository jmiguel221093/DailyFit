import { Children, Fragment, cloneElement } from 'react';
import { View, Pressable } from 'react-native';
import type { ViewStyle } from 'react-native';

import { Text } from '../Text';

import Styles from './Tabs.styles';
import type { TabsProps } from './Tabs.props';

import { Panel } from './components';

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
                <View style={Styles.header}>
                    {tabs.map((tab, i) => (
                        <Pressable
                            key={tab.id}
                            style={{
                                ...tabStyles,
                                /* eslint-disable no-extra-parens */
                                ...(i < tabs.length - 1
                                    ? Styles.notLastTab
                                    : {}),
                                ...(tab.id === selectedTab
                                    ? Styles.tabActive
                                    : {}),
                            }}
                            onPress={() => handleTabChange(tab.id)}
                        >
                            <Text style={Styles.tabText}>{tab.title}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
            {panelListMakup}
        </View>
    );
};

Tabs.Panel = Panel;

export default Tabs;
