export function throttle(milissegundos=500) {

    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        let timer = 0;

        descriptor.value = function (...args: any[]) {
            if (window.event) window.event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => {
                metodoOriginal.apply(this, args)
            }, milissegundos)
        }

        return descriptor;
    }
}