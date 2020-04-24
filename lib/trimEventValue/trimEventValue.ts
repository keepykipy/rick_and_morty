export const trimEventValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;

    return value;
}
