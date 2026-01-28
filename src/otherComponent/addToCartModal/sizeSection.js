import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

export default function SizeSection({
    colors,
    sizes,
    selected,
    onSelect,
    sizeLabel = 'Table Size'
}) {
    if (!sizes || !sizes.length) return null;

    return (
        <View style={styles.section}>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }} >
                <Text style={[styles.label, { color: "#5e5e5e" }]}>
                    {sizeLabel} :
                </Text>
                <Text style={[styles.label, { color: colors.text }]}>
                    {selected || 'Select size'}
                </Text>
            </View>

            <FlatList
                data={sizes}
                keyExtractor={(item) => item}
                // horizontal
                scrollEnabled={false}
                contentContainerStyle={{ gap: 12 }}
                renderItem={({ item }) => {
                    const isSelected = item === selected;

                    return (
                        <TouchableOpacity
                            onPress={() => onSelect(item)}
                            style={[
                                styles.sizeBox,
                                isSelected && styles.selectedSizeBox,
                            ]}
                            activeOpacity={0.7}
                        >
                            <Text
                                style={[
                                    styles.sizeText,
                                    isSelected && styles.selectedSizeText,
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}