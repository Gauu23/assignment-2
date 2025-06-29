function calculate(sign, arg1, arg2) {
    switch (sign) {
        case "DIVIDE":
            return arg2 !== 0 ? arg1 / arg2 : null;
        default:
            return 0;
    }
}