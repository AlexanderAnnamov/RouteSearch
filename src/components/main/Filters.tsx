import React from "react";
import { StyleSheet, Text, Button as But, Modal, Pressable, TouchableOpacity, Dimensions  } from "react-native";
import { View } from "react-native";
import { Search } from "../ui/Search";
import { Button } from "../ui/Button";
import colors from "../../constants/styles/colors";
import { Checkbox } from "../ui/Checkbox";

const times = [ '1-2 ч','2-4 ч', '4-6 ч', '6-8 ч', '8-10 ч', '10-12 ч' ]
const typesRest = [ 'История', 'Природа', 'Прогулки по городу', 'Культура', 'Гастрономия', 'Развлечения' ]

export const Filters = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(true);

  return (
    <View style={styles.box}>
      <Search />
      <Button
        onPress={() => setModalIsOpen(true)}
        type="square"
        icon="params"
      />
      <Modal transparent={true} visible={modalIsOpen} animationType="slide" >
        <Pressable onPress={(e) => { setModalIsOpen(false) }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'relative', height: '100%' }}>
          <Pressable
            onPress={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: colors.white,
              height: "80%",
              width: "100%",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 13
            }}
          >
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}></View>
              <Text style={{
                fontFamily: 'Lato-Bold',
                fontWeight: '500',
                fontSize: 18,
              }}>Фильтры</Text>

              <Text style={{
                flex: 1,
                textAlign: 'right',
                fontFamily: 'Lato-Bold',
                fontWeight: '400',
                fontSize: 14,
                color: colors.textTertirary
              }}>Очистить</Text>
            </View>

            <Text style={{
              fontFamily: 'Lato-Bold',
              fontWeight: '500',
              fontSize: 16,
              marginTop: 25
            }}>Время в пути</Text>

            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap',}}>
              {times.map((time) => {
                return (
                  <TouchableOpacity style={{padding: 8, backgroundColor: colors.backgroundSecondary, borderRadius: 12, marginTop: 16,   width: (Dimensions.get('window').width - 60) / 4,}}>
                    {time}
                  </TouchableOpacity>
                )
              })}
            </View>

            <Text style={{
              fontFamily: 'Lato-Bold',
              fontWeight: '500',
              fontSize: 16,
              marginTop: 25
            }}>Тип отдыха</Text>

            <View style={{marginTop: 16, gap: 12}}>
              {typesRest.map((type) => {
                return (
                  <Checkbox text={type}/>
                )
              })}
            </View>

          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    gap: 8,
  },
});
