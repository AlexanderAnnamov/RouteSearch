import React from 'react'
import { Image, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import BabyIcon from '../../../assets/img/icons/baby.svg'
import LikeIcon from '../../../assets/img/icons/like.svg'
import LikeActiveIcon from '../../../assets/img/icons/like-active.svg'
import colors from '../../../constants/styles/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigation/Routes'

interface RouteProps {
    images: string[],
    title: string,
    description: string,
    atributes: {title: string, text: string, type: string}[],
    time: string,
    url: string,
    distance: string,
    countPlaces: string,
    childrenAllowed: boolean,
    places: {
        img: string,
        title: string,
        description: string,
        travelTime: string
      }[],
    navigate: (route: string, props?: Record<string, any>) => void
}

export const Route: React.FC<RouteProps> = (props) => {
    const [like, pressLike] = React.useState(false)

    console.log(props.description);
    

    return (<View style={styles.box}>
        {props.childrenAllowed && <View style={styles.children}>
            <BabyIcon style={styles.icon} />
        </View>}

        <TouchableOpacity onPress={() => pressLike(!like)} style={styles.like}>
            {like ? <LikeActiveIcon /> : <LikeIcon />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate('RouteCard', { title: props.title, 
            description: props.description, atributes: props.atributes, url: props.url, 
            places: props.places })} style={styles.imageBox}>
            <Image source={{ uri: props.images[0] }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.info}>{props.time} · {props.distance} · {props.countPlaces}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    box: {
        position: 'relative'
    },
    children: {
        width: 30,
        height: 44,
        backgroundColor: colors.backgroundAccent,
        position: 'absolute',
        left: 14,
        top: 0,
        zIndex: 1,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        paddingTop: 18,
        paddingHorizontal: 6

    },
    icon: {
        width: 16,
        height: 16
    },
    like: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: colors.backgroundWhite80,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBox: {
        width: Dimensions.get('window').width - 32,
        height: 180,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16
    },
    title: {
        marginTop: 12,
        fontFamily: 'Lato-Bold',
        fontWeight: '500',
        fontSize: 18
    },
    info: {
        marginTop: 4,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: colors.textSecondary
    },
})
