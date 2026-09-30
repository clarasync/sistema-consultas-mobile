// Catálogo mockado. A tela NÃO digita especialidade: escolhe daqui.
// Sem JSX. Sem AsyncStorage. Só o dado inicial da clínica.

import { Especialidade } from "../types/especialidade";
import { Medico } from "../interfaces/medico";
import { Usuario } from "../types/usuario";
import banco from "./banco.json";

export const ESPECIALIDADES: Especialidade[] = banco.especialidades;

function especialidadePorId(id: number): Especialidade {
  const encontrada = ESPECIALIDADES.find((item) => item.id === id);

  if (!encontrada) {
    throw new Error(`Especialidade ${id} não existe no catálogo.`);
  }

  return encontrada;
}

export const MEDICOS: Medico[] = banco.medicos.map((medico) => ({
  id: medico.id,
  nome: medico.nome,
  crm: medico.crm,
  email: medico.email,
  especialidade: especialidadePorId(medico.especialidadeId),
  ativo: medico.ativo,
}));

export const USUARIOS_DEMO: Usuario[] = [
  {
    id: 1,
    nome: "Maria Silva",
    login: "maria",
    email: "maria@email.com",
    senha: "1234",
    papel: "paciente",
    cpf: "123.456.789-00",
    telefone: "(11) 98765-4321",
  },
  {
    id: 2,
    nome: "Dra. Ana Souza",
    login: "ana",
    email: "ana@clinica.com",
    senha: "1234",
    papel: "medico",
    medicoId: 1,
  },
];