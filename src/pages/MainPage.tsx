import React from "react";
import { Header } from "../components/main/Header";
import { Tabs } from "../components/main/Tabs";
import { View, StyleSheet } from "react-native";
import { Filters } from "../components/main/Filters";
import { Routes } from "../components/main/routes/Routes";
import Places from "../components/main/placees/Places";

export const MainPage = () => {
  const [selectedTab, setSelectedTab] = React.useState<'routes'| 'places'>('routes')
  return (
    <View style={styles.box}>
      <Header />
        <View style={styles.filters}>
          <Filters/>
          <Tabs selectedTab={selectedTab}setSelectedTab={setSelectedTab} />
            {selectedTab === 'routes' && <Routes/>}
            {selectedTab === 'places' && <Places/>}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    box: {
    },
    filters: {
      gap: 12,
      paddingVertical: 8,
      paddingHorizontal: 16
    }
  });
