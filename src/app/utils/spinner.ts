import { ISpinner } from "./ispinner";

export function Spinner(){
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldFunction = descriptor.value //pierdo el enlace a this
    descriptor.value = async function(...args:[]){
      const spinner: ISpinner = (this as ISpinner)
      try{
        spinner.on()
        return await oldFunction.apply(this,args)
      }
      catch(err){
        spinner.err(err)
      }
      finally{
        spinner.off()
      }
    }
  };
}

