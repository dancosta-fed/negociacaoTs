export const logarTempoDeExecucao = () => {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: Array<any>) {
      const t1 = performance.now();

      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(`Checking performance for ${propertyKey}: ${(t2 - t1)/1000} seconds.`);

      retorno
    };
    return descriptor;
  }
}