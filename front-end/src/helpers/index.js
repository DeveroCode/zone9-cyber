export const formatCurrency = value => Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
export const generateFolio = (a, b, c) => {
    var folio = 0;
    const date = new Date().getMinutes();
    const firts = a.split('').slice(0, 2).join('') + b.split('').slice(0, 2).join('') + c.split('').slice(0, 2).join('');

    return folio = (firts + date).toUpperCase();
}

export const toggleModal = (visible) => {
    visible.value = !visible.value;
};