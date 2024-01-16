import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {

    console.log(chalk.bgRed('Error') + '' + error);

}

const printSuccess = (msg) => {

    console.log(chalk.bgGreen('Error') + '' + msg);

}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h дял вывода помощи
        -t [API_KEY] для сейв токена
        `
        );
}

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' Weather ')} Погода  в городе ${res.name}
        ${icon} ${res.weather[0].description}
        Температура: ${res.main.temp} (ощущается как ${res.main.fells_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}
        `
        );
};

export {printError, printSuccess, printHelp, printWeather};