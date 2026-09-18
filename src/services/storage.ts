import AsyncStorage from "@react-native-async-storage/async-storage";
import { Especialidade } from "../types/especialidade";
import { Paciente } from "../types/paciente";
import { Medico } from "../interfaces/medico";
import { Consulta } from "../interfaces/consulta";

const CHAVE_ESPECIALIDADES = "@consultas:especialidades";
const CHAVE_MEDICOS = "@consultas:medicos";
const CHAVE_CONSULTAS = "@consultas:consultas";

export async function salvarEspecialidades(
  especialidades: Especialidade[]
): Promise<void> {
  await AsyncStorage.setItem(
    CHAVE_ESPECIALIDADES,
    JSON.stringify(especialidades)
  );
}

export async function obterEspecialidades(): Promise<Especialidade[]> {
  const dados = await AsyncStorage.getItem(CHAVE_ESPECIALIDADES);
  return dados ? JSON.parse(dados) : [];
}

export async function salvarMedicos(
  medicos: Medico[]
): Promise<void> {
  await AsyncStorage.setItem(
    CHAVE_MEDICOS,
    JSON.stringify(medicos)
  );
}

export async function obterMedicos(): Promise<Medico[]> {
  const dados = await AsyncStorage.getItem(CHAVE_MEDICOS);
  return dados ? JSON.parse(dados) : [];
}

export async function salvarConsultas(
  consultas: Consulta[]
): Promise<void> {
  await AsyncStorage.setItem(
    CHAVE_CONSULTAS,
    JSON.stringify(consultas)
  );
}

export async function obterConsultas(): Promise<Consulta[]> {
  const dados = await AsyncStorage.getItem(CHAVE_CONSULTAS);
  return dados ? JSON.parse(dados) : [];
}