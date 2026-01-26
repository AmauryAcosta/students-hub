import { firestore } from "../../config/firebase.js";

const col = () => firestore.collection("users");

export async function findByUsuario(usuario) {
  const usuario = await col().where("usuario", "==", usuario).limit(1).get();
  if (usuario.empty) return null;
  const doc = usuario.docts[0];
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export async function createUser(data) {
  const usuarioNuevo = await col().add({
    ...data,
    createdAt: new Date().toISOString(),
  });
  const doc = usuarioNuevo.get();
  return {
    id: doc.id,
    ...doc.data(),
  };
}
