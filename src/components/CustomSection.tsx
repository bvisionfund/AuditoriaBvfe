import React from "react";
import { PropsWithChildren } from "react";
import { Text, View, useColorScheme } from "react-native";
import { styles } from "../theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

export const SectionComponent = ({ children, title }: SectionProps): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}
            >
                {children}
            </Text>
        </View>
    );
};
