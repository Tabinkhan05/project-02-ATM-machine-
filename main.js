"use strict";
/*import inquirer from "inquirer";

let my_balance = 10000;
let my_pin = 1234;

console.log("welcome to ATM machine");

let pinanswer = await inquirer.prompt([{
    name : "pin",
    type : "number",
    message : "enter your pin",
}
])
if (pinanswer.pin == my_pin){
    console.log("pin is correct, login succesfully");
    //console.log(`current account balance is ${my_balance}`);

    let operationAns = await inquirer.prompt([{
        name : "operation",
        type : "list",
        message : "select an operation",
        choices : ["withdraw amount" , "check balance"]
    }])
    if(operationAns.operation == "withdraw amount"){
        let amountAns = await inquirer.prompt([{
            name : "amount",
            type : "number",
            message : "enter the amount to withdraw :"
        }])
        if (amountAns.amount > my_balance){
            console.log("insufficient balance");
        }
        else {
            my_balance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw success`);
            console.log(`your remaining balance is : ${my_balance}`);
        }
    }
else if(operationAns.operation == "check balance"){
    console.log(`your account balance : ${my_balance}`)
}

}
else {
    console.log("pin is incorrect,try again!");
}*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var my_balance = 10000;
var my_pin = 1234;
console.log("Welcome to the ATM machine");
var atm = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pinAnswer, operationAns, amountAns;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([{
                        name: "pin",
                        type: "number",
                        message: "Enter your pin:",
                    }])];
            case 1:
                pinAnswer = _a.sent();
                if (!(pinAnswer.pin === my_pin)) return [3 /*break*/, 6];
                console.log("Pin is correct, login successful.");
                return [4 /*yield*/, inquirer_1.default.prompt([{
                            name: "operation",
                            type: "list",
                            message: "Select an operation:",
                            choices: ["Withdraw amount", "Check balance"]
                        }])];
            case 2:
                operationAns = _a.sent();
                if (!(operationAns.operation === "Withdraw amount")) return [3 /*break*/, 4];
                return [4 /*yield*/, inquirer_1.default.prompt([{
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to withdraw:"
                        }])];
            case 3:
                amountAns = _a.sent();
                if (amountAns.amount <= 0) {
                    console.log("Invalid amount. Please enter a positive number.");
                }
                else if (amountAns.amount > my_balance) {
                    console.log("Insufficient balance.");
                }
                else {
                    my_balance -= amountAns.amount;
                    console.log("".concat(amountAns.amount, " withdrawn successfully."));
                    console.log("Your remaining balance is: ".concat(my_balance));
                }
                return [3 /*break*/, 5];
            case 4:
                if (operationAns.operation === "Check balance") {
                    console.log("Your account balance: ".concat(my_balance));
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                console.log("Pin is incorrect, try again!");
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
atm().catch(function (error) { return console.error(error); });
