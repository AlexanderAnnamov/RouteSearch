import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import colors from '../constants/styles/colors'
import BannerIcon from '../assets/img/icons/locate-banner.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Routes'

export const RegistrationPage = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'Registration'>) => {
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
                padding: 16
            }}>
                <Text style={{ fontSize: 22, fontWeight: '600', fontFamily: 'Lato-Regular', }}>Регистрация</Text>
                {isLoginFields && (<View style={{ marginTop: 24, }}>
                    <TextInput style={{
                        paddingVertical: 13,
                        paddingHorizontal: 16,
                        backgroundColor: '#F7F7F7',
                        borderRadius: 12,
                    }}
                        placeholder="Имя"
                        placeholderTextColor="#888"
                    ></TextInput>
                    <TextInput style={{
                        paddingVertical: 13,
                        paddingHorizontal: 16,
                        backgroundColor: '#F7F7F7',
                        borderRadius: 12,
                        marginTop: 24,
                    }}
                        placeholder="Email"
                        placeholderTextColor="#888"
                    ></TextInput>
                </View>)}

                {!isLoginFields && (<View style={{ marginTop: 24, }}>
                    <TextInput style={{
                        paddingVertical: 13,
                        paddingHorizontal: 16,
                        backgroundColor: '#F7F7F7',
                        borderRadius: 12,
                    }}
                        placeholder="Придумайте пароль"
                        placeholderTextColor="#888"
                        secureTextEntry
                    ></TextInput>
                    <TextInput style={{
                        paddingVertical: 13,
                        paddingHorizontal: 16,
                        backgroundColor: '#F7F7F7',
                        borderRadius: 12,
                        marginTop: 24,
                        
                    }}
                        placeholder="Подтвердите пароль"
                        textContentType='password'
                        placeholderTextColor="#888"
                        secureTextEntry
                    ></TextInput>
                </View>)}

                <TouchableOpacity onPress={isLoginFields ? () => setLoginFields(false) : () => navigation.navigate('Login')} style={{
                    backgroundColor: colors.black,
                    alignItems: 'center',
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 8,
                    marginTop: 24,
                }}>
                    <Text style={{ color: colors.white }}>
                        {isLoginFields ? 'Продолжить' : 'Зарегестрироваться'}
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, gap: 12, marginLeft: '10%' }}>
                    <View style={{ backgroundColor: '#CCCCCC', flex: 1, height: 1 }}></View>
                    <Text style={{ color: '#CCCCCC', fontSize: 14 }}>или</Text>
                    <View style={{ backgroundColor: '#CCCCCC', flex: 1, height: 1, marginRight: '10%' }}></View>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 8, fontSize: 14, }}>
                    <TouchableOpacity  onPress={() => navigation.navigate('Login')} ><Text style={{ color: '#67C23C', fontSize: 14, }}>
                        Войдите
                    </Text>
                    </TouchableOpacity>
                    , если у вас уже есть аккаунт
                </Text>
            </View>
        </View>
    )
}