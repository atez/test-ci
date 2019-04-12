import {Application} from './app';

const appInstance = new Application();
appInstance.start();
export const app = appInstance.app;

process.on("uncaughtException", function(err) {
    console.error("uncaughtException", JSON.stringify(err));
});