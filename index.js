import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
async function main() {
    let count = await inquirer.prompt([
        {
            name: "count",
            type: "number",
            message: chalk.bold.green.italic `Enter the amount of countdown timer (in seconds)`,
        },
    ]);
    let input = count.count;
    function countdown(val) {
        let countdownFinished = false; // Flag to track if countdown has finished
        const intTime = new Date().setSeconds(new Date().getSeconds() + val);
        const intervalTime = new Date(intTime);
        setInterval(() => {
            const currentTime = new Date();
            const diff = differenceInSeconds(intervalTime, currentTime);
            if (diff <= 0 && !countdownFinished) {
                countdownFinished = true;
                console.log(chalk.bold.red `Countdown finished!`);
            }
            else if (diff > 0) {
                console.clear(); // Clear the console before printing
                const days = Math.floor(diff / (60 * 60 * 24)); // Calculate days
                const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60)); // Calculate hours
                const minutes = Math.floor((diff % (60 * 60)) / 60); // Calculate minutes
                const seconds = Math.floor(diff % 60); // Calculate seconds
                console.log(chalk.bold.green `Countdown Timer`);
                console.log(chalk.bold.whiteBright(`${days}d ${hours}h ${minutes}m ${seconds}s`));
            }
        }, 1000);
    }
    countdown(input);
}
main();
