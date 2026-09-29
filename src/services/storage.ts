import AsyncStorage from "@react-native-async-storage/async-storage";
import { Especialidade } from "../types/especialidade";
import { Paciente } from "../types/paciente";
import { Medico } from "../interfaces/medico";
import { Consulta } from "../interfaces/consulta";
import { Usuario } from "../types/usuario";
import { ESPECIALIDADES, MEDICOS, USUARIOS_DEMO } from "../data/data";

const CHAVE_ESPECIALIDADES = "@consultas:especialidades";
const CHAVE_MEDICOS = "@consultas:medicos";
const CHAVE_CONSULTAS = "@consultas:consultas";
const CHAVE_USUARIOS = "@consultas:usuarios";
const CHAVE_SESSAO = "@consultas:sessao";
const CHAVE_VERSAO = "@consultas:versao";

const VERSAO_CATALOGO = "2";

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

export async function salvarUsuarios(
  usuarios: Usuario[]
): Promise<void> {
  await AsyncStorage.setItem(
    CHAVE_USUARIOS,
    JSON.stringify(usuarios)
  );
}

export async function obterUsuarios(): Promise<Usuario[]> {
  const dados = await AsyncStorage.getItem(CHAVE_USUARIOS);
  return dados ? JSON.parse(dados) : [];
}

export async function salvarSessao(
  usuario: Usuario
): Promise<void> {
  await AsyncStorage.setItem(
    CHAVE_SESSAO,
    JSON.stringify(usuario)
  );
}

export async function obterSessao(): Promise<Usuario | null> {
  const dados = await AsyncStorage.getItem(CHAVE_SESSAO);
  return dados ? JSON.parse(dados) : null;
}

export async function limparSessao(): Promise<void> {
  await AsyncStorage.removeItem(CHAVE_SESSAO);
}
export async function semearDadosIniciais(): Promise<void> {
  const versao = await AsyncStorage.getItem(CHAVE_VERSAO);

  if (versao !== VERSAO_CATALOGO) {
    await salvarEspecialidades(ESPECIALIDADES);
    await salvarMedicos(MEDICOS);
    await salvarUsuarios(USUARIOS_DEMO);
    await AsyncStorage.setItem(CHAVE_VERSAO, VERSAO_CATALOGO);
  }
}