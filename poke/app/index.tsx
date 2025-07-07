import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Charmander Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Charmander</Text>
          <Text style={styles.hp}>❤️ HP: 39</Text>
        </View>

        <Image
          source={require("@/assets/images/charmander.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#f97316" }]}>
          <Text style={[styles.typeText, { color: "#f97316" }]}>🔥 Fire</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>Scratch, Ember, Growl, Leer</Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Water, Rock</Text>
      </View>

      {/* Pikachu Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Pikachu</Text>
          <Text style={styles.hp}>⚡ HP: 35</Text>
        </View>

        <Image
          source={require("@/assets/images/pikachu2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#facc15" }]}>
          <Text style={[styles.typeText, { color: "#facc15" }]}>⚡ Electric</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Thunder Shock, Quick Attack, Tail Whip, Electro Ball
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Ground</Text>
      </View>

      {/* Mewtwo Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Mewtwo</Text>
          <Text style={styles.hp}>🧠 HP: 206</Text>
        </View>

        <Image
          source={require("@/assets/images/mewtwo.jpg")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#a78bfa" }]}>
          <Text style={[styles.typeText, { color: "#a78bfa" }]}>🔮 Psychic</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Psychic, Shadow Ball, Recover, Barrier
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Ghost, Dark</Text>
      </View>

      {/* Zekrom Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Zekrom</Text>
          <Text style={styles.hp}>🧠 HP: 106</Text>
        </View>

        <Image
          source={require("@/assets/images/Zekrom.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#000" }]}>
          <Text style={[styles.typeText, { color: "#000" }]}>🪨 Rock</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Rock, Solid Ball, Heals, Barrier
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Ghost, Poison</Text>
      </View>

      {/* Zygarde Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Zygarde</Text>
          <Text style={styles.hp}>🧠 HP: 128</Text>
        </View>

        <Image
          source={require("@/assets/images/zygarde.jpg")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#0f8159" }]}>
          <Text style={[styles.typeText, { color: "#0f8159" }]}>🐉 Dragon</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Aura Break, Land's Wrath, Thousand Arrows, Thousand Waves
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>White Kyurem, Ground, Dark</Text>
      </View>

      {/* Palkia Card */}
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>Palkia</Text>
        <Text style={styles.hp}>🧠 HP: 156</Text>
      </View>

      <Image
        source={require("@/assets/images/Palkia.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={[styles.typeBadge, { borderColor: "#a78bfa" }]}>
        <Text style={[styles.typeText, { color: "#a78bfa" }]}>🔮 Psychic</Text>
      </View>

      <Text style={styles.sectionLabel}>Moves:</Text>
      <Text style={styles.sectionText}>
        Psychic, Shadow Ball, Recover, Barrier
      </Text>

      <Text style={styles.sectionLabel}>Weakness:</Text>
      <Text style={styles.sectionText}>Bug, Ghost, Dark</Text>
    </View>

      {/* Dialga Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Dialga</Text>
          <Text style={styles.hp}>🧠 HP: 119</Text>
        </View>

        <Image
          source={require("@/assets/images/Dialga.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#284ca0" }]}>
          <Text style={[styles.typeText, { color: "#284ca0" }]}>🧿 Crystal</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Ice Ball, Ice Waves, Crystal Rain
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Ghost, Dark, Lightning</Text>
      </View>
      
      {/* Groudon Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Groudon</Text>
          <Text style={styles.hp}>🧠 HP: 99</Text>
        </View>

        <Image
          source={require("@/assets/images/Groudon.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#bd310c" }]}>
          <Text style={[styles.typeText, { color: "#bd310c" }]}>🌋 Magma</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Psychic, Shadow Ball, Recover, Barrier
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Ghost, Dark</Text>
      </View>

      {/* Lunala Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Lunala</Text>
          <Text style={styles.hp}>🧠 HP: 101</Text>
        </View>

        <Image
          source={require("@/assets/images/Lunala.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#61289a" }]}>
          <Text style={[styles.typeText, { color: "#61289a" }]}>🪻 Lavender</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Raining Flower, Powder Poison, Recover, Bug
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Ghost, Dark, Ground, Lightning</Text>
      </View>
      
      {/* Necrozma Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Necrozma</Text>
          <Text style={styles.hp}>🧠 HP: 101</Text>
        </View>

        <Image
          source={require("@/assets/images/Necrozma.webp")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#000" }]}>
          <Text style={[styles.typeText, { color: "#000" }]}>🦾 Mechatronics</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Iron Spine, Raining Knife, Steel, Dark
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Water, Light</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#ef3636",
    shadowOpacity: 10,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 160,
    marginVertical: 12,
    borderRadius: 21,
  },
  typeBadge: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  typeText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionLabel: {
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionText: {
    marginBottom: 4,
  },
});
