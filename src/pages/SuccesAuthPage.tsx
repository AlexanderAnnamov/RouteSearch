import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import colors from '../constants/styles/colors'
import BannerIcon from '../assets/img/icons/locate-banner.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Routes'
import SuccessIcon from '../assets/img/icons/success.svg'

export const SuccessAuthPage = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'SuccessAuth'>) => {
    const [isLoginFields, setLoginFields] = React.useState(true)
    return (
        <View style={{ backgroundColor: colors.accent400, flex: 1 }}>
            <View style={{
                flex: 0.4,
                paddingVertical: 26,
                paddingHorizontal: 16,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '800', fontFamily: 'Lato-Regular', }}>
                    ПОИНТ.
                </Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '600', fontFamily: 'Lato-Regular', maxWidth: 151, zIndex: 1 }}>
                    Путеводитель по России
                </Text>
                <View style={{
                    position: 'absolute', width: 110, height: 30, backgroundColor: colors.accent600, bottom: 21, left: 11, transform: [
                        { skewX: '10deg' },
                        { rotate: '-2deg' }
                    ], borderRadius: 2,
                }}></View>
                <BannerIcon style={{ position: 'absolute', bottom: -5, right: -5 }} />
            </View>
            <View style={{
                flex: 1,
                backgroundColor:
                    colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 16,
                // paddingBottom: 32
            }}>
                <View style={{justifyContent: 'center', marginTop: '20%', alignItems: 'center', gap: 40}}>
                    <View>
                    <Text style={{fontSize: 22, fontWeight: '600', textAlign: 'center'}}>Вы успешно</Text>
                    <Text style={{fontSize: 22, fontWeight: '600', textAlign: 'center'}}>авторизованы! </Text>
                    </View>
                    <SuccessIcon/>
                </View>
                <View style={{flex: 1}}></View>
              
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{
                    backgroundColor: colors.black,
                    alignItems: 'center',
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 8,
                    marginTop: 24,
                }}>
                    <Text style={{ color: colors.white }}>
                    На главную
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}