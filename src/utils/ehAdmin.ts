import { Usuario } from "../types/usuario";

export function ehAdmin(usuario: Usuario): boolean {
  return usuario.papel === "admin";
}