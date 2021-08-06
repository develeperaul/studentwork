import ky from 'ky';

const apiStudent = ky.create({
    prefixUrl:
        'https://sim.2apps.ru/api',
    timeout: 20000,
})

export { apiStudent }