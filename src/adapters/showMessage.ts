import { toast } from "react-toastify";
import { Dialog } from "../components/Dialog";

export const showMessage = {
  success: (msg:string) => toast.success(msg),
  error: (msg:string) => toast.error(msg),
  warn: (msg:string) => toast.warn(msg),
  warning: (msg:string) => toast.warning(msg),
  info: (msg:string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onclosing: (confirmation:boolean) => void) =>
    toast(Dialog, {
      data,
      onClose:confirmation => {
        if(confirmation) onclosing(true)
          return false
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false
    })
}