import { FlatList, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef, useState } from 'react'


import WelcomeCarouselData from '../../WelcomeCarouselData'
import WelcomeItem from './WelcomeItem'
import Paginator from './Paginator'

const WelcomeCarousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const scrollX = useRef(new Animated.Value(0)).current;
        const slidesRef = useRef(null);

        const viewableItemsChanged = useRef(({ viewableItems }) => {
            setCurrentIndex(viewableItems[0].index);
        }).current;

        const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

        return ( <
            View style = { styles.container } >
            <
            View styles = {
                { flex: 3 }
            } >
            <
            FlatList data = { WelcomeCarouselData }
            renderItem = {
                ({ item }) => < WelcomeItem item = { item }
                />}
                horizontal
                showsHorizontalScrollIndicator = { false }
                pagingEnabled
                bounces = { false }
                keyExtractor = {
                    (item) => item.id
                }
                onScroll = {
                    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })
                }
                scrollEventThrottle = { 32 }
                onViewableItemsChanged = { viewableItemsChanged }
                viewabilityConfig = { viewConfig }
                /> < /
                View >

                <
                Paginator data = { WelcomeCarouselData }
                scrollX = { scrollX }
                />

                <
                /View>

            )
        }

        export default WelcomeCarousel

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        })