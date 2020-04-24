export const apolloErrorHandler = (error: any, func?: (x?: any) => void) => {
    if (func) func();

    error?.graphQLErrors?.map((el?: any) => console.error(el?.message))
}
