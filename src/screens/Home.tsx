import React, { useCallback, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Consulta } from "../interfaces/consulta";
import ConsultaCard from "../components/ConsultaCard";import { obterConsultas, salvarConsultas } from "../services/storage";
import { styles } from "../styles/app.styles";

export default function Home() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      async function carregarConsultas() {
        const dados = await obterConsultas();

const consultasConvertidas = dados.map((consulta) => ({
  ...consulta,
  data: new Date(consulta.data),
}));

setConsultas(consultasConvertidas);
      }

      carregarConsultas();
    }, [])
  );

  async function confirmarConsulta(id: number) {
    const atualizadas = consultas.map((consulta) =>
      consulta.id === id
        ? { ...consulta, status: "confirmada" as const }
        : consulta
    );

    setConsultas(atualizadas);
    await salvarConsultas(atualizadas);
  }

  async function cancelarConsulta(id: number) {
    const atualizadas = consultas.map((consulta) =>
      consulta.id === id
        ? { ...consulta, status: "cancelada" as const }
        : consulta
    );

    setConsultas(atualizadas);
    await salvarConsultas(atualizadas);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
  <Text style={styles.titulo}>Sistema de Consultas</Text>
  <Text style={styles.subtitulo}>Consultas Agendadas</Text>

  <Text onPress={() => navigation.navigate("Admin" as never)}>
    Ir para Admin
  </Text>
</View>

        {consultas.length === 0 ? (
          <Text style={styles.subtitulo}>
            Nenhuma consulta agendada ainda
          </Text>
        ) : (
          consultas.map((consulta) => (
            <ConsultaCard
              key={consulta.id}
              consulta={consulta}
              onConfirmar={() => confirmarConsulta(consulta.id)}
              onCancelar={() => cancelarConsulta(consulta.id)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}