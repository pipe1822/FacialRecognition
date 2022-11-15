import { FINE_STATE } from "./fineState.enum";

export class Fine {

    id = "";
    date = "";
    licensePlate = ""
    departament = "";
    infringement = "";
    state = FINE_STATE.PENDING;
    value = "";
    interest = "";
    finalValue = "";
    testValue = "";
    discount = 0;
    tComparendo= "";

    constructor(id, date, licensePlate, departament, infringement, state, value, interest) {
        this.id = id;
        this.date = date;
        this.licensePlate = licensePlate;
        this.departament = departament;
        this.infringement = infringement
        this.state = state
        this.value = value
        this.interest = interest
        this.discount = 50
        this.finalValue = value + (interest * value / 100)
        this.testValue = infringement.toLowerCase().includes('c') ? 58500 : 112500
        this.tComparendo="POLNAL"
    }

}