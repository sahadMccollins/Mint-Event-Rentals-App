import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ColorSection({
    colors,
    options,
    selected,
    onSelect
}) {
    if (!options || !options.length) return null;

    return (
        <View style={styles.section}>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }} >
                <Text style={[styles.label, { color: "#5e5e5e" }]}>
                    Color :
                </Text>
                <Text style={[styles.label, { color: colors.text }]}>
                    {selected || 'Select color'}
                </Text>
            </View>

            <FlatList
                data={options}
                keyExtractor={(item) => item}
                horizontal
                scrollEnabled={false}
                contentContainerStyle={{ gap: 14 }}
                renderItem={({ item }) => {
                    const isSelected = item === selected;

                    return (
                        <TouchableOpacity
                            onPress={() => onSelect(item)}
                            style={[
                                styles.outerSquare,
                                isSelected && styles.selectedOuterSquare,
                            ]}
                            activeOpacity={0.7}
                        >
                            <View
                                style={[
                                    styles.innerSquare,
                                    { backgroundColor: item.toLowerCase() },
                                ]}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}