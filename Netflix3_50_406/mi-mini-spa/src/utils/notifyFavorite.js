import { toast } from "react-toastify";

export const notifyAdded = (title) =>
  toast.success(`"${title}" agregado a favoritos!`);

export const notifyRemoved = (title) =>
  toast.info(`"${title}" removido de favoritos.`);
