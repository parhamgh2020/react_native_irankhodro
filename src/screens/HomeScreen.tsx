import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import spacing from "../config/spacing";
import cars from "../data/cars";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const gradient = [colors.cadetGrey, colors.federalBlue];


const HomeScreen = () => {
    return (
        <SafeAreaView style={{ marginTop: spacing * 8 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <LinearGradient
                        style={{
                            height: spacing * 12,
                            width: spacing * 12,
                            borderRadius: spacing * 6,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        colors={gradient}
                    >
                        <TouchableOpacity
                            style={{
                                height: spacing * 10,
                                width: spacing * 10,
                                borderRadius: spacing * 5,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="dots-horizontal"
                                color={colors.white}
                                size={spacing * 8}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        style={{
                            height: spacing * 12,
                            width: spacing * 12,
                            borderRadius: spacing * 4,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        colors={[colors.cadetGrey, colors.dimGrey]}
                    >
                        <TouchableOpacity
                            style={{
                                height: spacing * 12,
                                width: spacing * 12,
                                backgroundColor: colors.prissioanBlue,
                                borderRadius: spacing * 4,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={require('../../assets/car_image/ikcologo.webp')}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: spacing * 2,
                                }}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View
                    style={{
                        position: "relative",
                        marginVertical: spacing * 3,
                        justifyContent: "center",
                    }}
                >
                    <TextInput
                        style={{
                            backgroundColor: colors.prissioanBlue,
                            padding: spacing * 1.5,
                            borderRadius: spacing * 2,
                            color: colors.white,
                            fontSize: spacing * 6,
                            paddingLeft: spacing * 10,
                        }}
                        placeholder="Search"
                        placeholderTextColor={colors.cadetGrey}
                    />
                    <Ionicons
                        style={{
                            position: "absolute",
                            left: spacing * 2,
                        }}
                        size={spacing * 6}
                        color={colors.white}
                        name="search"
                    />
                </View>

                <LinearGradient
                    colors={gradient}
                    style={{
                        padding: spacing * 3,
                        height: 160,
                        borderRadius: spacing * 2,
                        flexDirection: "row",
                    }}
                >
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: 'row',

                    }}>
                        <View
                            style={{
                                maxWidth: "50%",
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.white,
                                    fontSize: spacing * 8,
                                    fontWeight: "800",
                                    marginBottom: spacing,
                                }}
                            >
                                20%
                            </Text>
                            <Text
                                style={{
                                    color: colors.white,
                                    fontWeight: "700",
                                    fontSize: spacing * 4,
                                    marginBottom: spacing,
                                }}
                            >
                                New Arrival
                            </Text>
                            <Text
                                style={{
                                    color: colors.white,
                                }}
                            >
                                Get a new car discount, only valid this friday
                            </Text>
                        </View>
                        <View
                            style={{
                                width: "50%",
                                left:spacing * 15,
                                bottom:spacing * 2,
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                style={{
                                    width: "50%",
                                    height: 100,
                                }}
                                source={require('../../assets/car_image/ikcologo.webp')}
                            />
                        </View>

                    </View>

                </LinearGradient>
                <View
                    style={{
                        marginVertical: spacing * 3,
                    }}
                >
                    <Text
                        style={{
                            color: colors.richBlack,
                            fontSize: spacing * 4,
                            fontWeight: "600",
                        }}
                    >
                        Top Deals
                    </Text>
                    <View
                        style={{
                            marginTop: spacing * 2,
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        {cars.map((car) => (
                            <LinearGradient
                                key={car.id}
                                colors={gradient}
                                style={{
                                    height: spacing * 50,
                                    width: spacing * 50 - spacing * 3,
                                    borderRadius: spacing * 2,
                                    marginBottom: spacing * 2,
                                    padding: spacing,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginHorizontal: spacing * 2,
                                        marginTop: spacing * 1
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Ionicons
                                            name="star"
                                            color={colors.yellow}
                                            size={spacing * 5}
                                        />
                                        <Text
                                            style={{
                                                color: colors.white,
                                                marginLeft: spacing / 2,
                                            }}
                                        >
                                            {car.rating}
                                        </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Ionicons
                                            name="heart"
                                            color={colors.red}
                                            size={spacing * 5}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: 100,
                                    }}
                                    source={car.image}
                                    resizeMode="contain"
                                />
                                <View style={{
                                    marginHorizontal: spacing * 2
                                }}>
                                    <Text
                                        style={{
                                            marginTop: spacing * 4,
                                            fontSize: spacing * 4,
                                            color: colors.white,
                                        }}
                                    >
                                        {car.name}
                                    </Text>
                                    <View
                                        style={{
                                            marginVertical: spacing,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: colors.white,
                                                fontSize: spacing * 4,
                                            }}
                                        >
                                            $ {car.price}
                                        </Text>
                                        <TouchableOpacity
                                            style={{
                                                borderRadius: spacing / 2,
                                                overflow: "hidden",
                                            }}
                                        >
                                            <LinearGradient
                                                style={{
                                                    padding: spacing / 3,
                                                    paddingHorizontal: spacing / 2,
                                                }}
                                                colors={[colors.dimGrey, colors.richBlack]}
                                            >
                                                <Ionicons
                                                    name="arrow-forward"
                                                    size={spacing * 4}
                                                    color={colors.white}
                                                />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </LinearGradient>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;