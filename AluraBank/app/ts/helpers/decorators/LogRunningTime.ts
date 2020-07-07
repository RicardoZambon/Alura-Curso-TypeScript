export function LogRunningTime(showInSeconds: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {

            let unit = 'ms';
            let divider = 1;
            if (showInSeconds) {
                unit = 's';
                divider = 1000;
            }

            console.log('---------------');
            console.log(`params received to method ${propertyKey}: ${JSON.stringify(args)}.`)

            const t1 = performance.now();

            const result = originalMethod.apply(this, args);

            console.log(`The method ${propertyKey} result is ${JSON.stringify(result)}.`);

            const t2 = performance.now();
            console.log(`The method ${propertyKey} took ${(t2 - t1)/divider} ${unit}.`)

            return result;
        }
        return descriptor;
    }
}