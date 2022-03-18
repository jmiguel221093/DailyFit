import {
    useRef,
    useState,
    useEffect,
    Children,
    cloneElement,
    createElement,
    isValidElement,
} from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import PagerView from 'react-native-pager-view';

import Styles from './TabsPage.styles';
import { TabsHeader, TabSection } from './components';
import type { TabsPageProps } from './TabsPage.props';
import { spacing } from '../../styles';

const TabsPage: React.FunctionComponent<TabsPageProps> & {
    Section: typeof TabSection;
} = ({ tabs, selectedTab, style, onSelectTab, children }: TabsPageProps) => {
    const containerStyles: ViewStyle[] = [
        {
            flexDirection: 'column',
        },
    ];
    if (style) containerStyles.push(style);

    const [page, setPage] = useState(
        tabs ? tabs.findIndex((tab) => tab.id === selectedTab) : 0
    );
    const pagerViewRef = useRef<PagerView>(null);

    useEffect(() => {
        pagerViewRef.current?.setPage(page);
    }, [page]);

    const handleSelectTab = (tab: string) => {
        onSelectTab?.(tab);
        setPage(tabs ? tabs.findIndex((t) => t.id === tab) : 0);
    };

    return (
        <View style={containerStyles}>
            {tabs && (
                <TabsHeader
                    onSelectTab={handleSelectTab}
                    tabs={tabs}
                    selectedTab={selectedTab}
                />
            )}
            <PagerView
                ref={pagerViewRef}
                pageMargin={spacing()}
                scrollEnabled={false}
                initialPage={page}
                showPageIndicator={false}
                style={Styles.pagerView}
            >
                {Children.map(children, (child, i) =>
                    /* eslint-disable indent  */
                    isValidElement(child)
                        ? createElement(
                              View,
                              { key: i },
                              cloneElement(child, { ...child.props })
                          )
                        : child
                )}
            </PagerView>
        </View>
    );
};

TabsPage.Section = TabSection;

export default TabsPage;
