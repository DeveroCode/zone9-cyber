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

export const convertToMilitaryTime = timeString => {
    if (!timeString) {
        return 0;
    }
    const [hours, minutes] = timeString.split(':');

    const hora = parseInt(hours, 10);
    const minutos = parseInt(minutes, 10);

    const newHours = (hora * 100) + minutos;
    return newHours;
}

export const convertToTime = time => {
    const hours = Math.floor(time / 100);
    const minutes = time % 100;

    return `${hours}.${minutes}`;
}

export const setHeaderTitle = (title) => {
    switch (title) {
        case 'reservations':
            return 'Adminsitrador de rentas';
            break;
        case 'earnings':
            return 'Visualizador de Ganancias Mensuales';
            break;
        case 'expenses':
            return 'Visualizador de Gastos Mensuales'
            break;
        case 'users':
            return 'Adminsitrador de Cuentas';
            break;
        default:
            return 'Bienvenido al panel de administración de Zona9';
            break;
    }
};