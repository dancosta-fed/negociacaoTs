export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Método ${propertyKey}`);
    console.log(`--- parâmetros ${JSON.stringify(args)}`);
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === 'string') {
      console.log(`@escape em ação na classe: ${this.constructor.name} para o método ${propertyKey}`);
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '')
    }

    console.log(`--- retorno: ${JSON.stringify(retorno)}`);
    return retorno;
  }

  return descriptor
}