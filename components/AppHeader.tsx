import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme/colors";

type AppHeaderProps = {
    title: string;
    showBack?: boolean;
};

const AppHeader = ({ title, showBack = true }: AppHeaderProps) => {
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack();

    return (
        <SafeAreaView
            edges={["top"]}
            style={{
                backgroundColor: colors.background,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 52, // 🔥 FIX: altura controlada (não cresce infinito)
                    paddingHorizontal: 16,
                }}
            >
                {/* LEFT */}
                <View style={{ width: 40 }}>
                    {showBack && canGoBack ? (
                        <Pressable
                            onPress={() => router.back()}
                            style={{ padding: 4 }}
                        >
                            <Ionicons
                                name="chevron-back"
                                size={22}
                                color={colors.text}
                            />
                        </Pressable>
                    ) : null}
                </View>

                {/* TITLE */}
                <Text
                    numberOfLines={1}
                    style={{
                        color: colors.text,
                        fontSize: 16,
                        fontWeight: "600",
                    }}
                >
                    {title}
                </Text>

                {/* RIGHT SPACER */}
                <View style={{ width: 40 }} />
            </View>
        </SafeAreaView>
    );
};

export default AppHeader;