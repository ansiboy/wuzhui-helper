export let errors = {
    arugmentNull(paramName: string) {
        return new Error("Argument '" + paramName + "' can not be null.");
    },
    argumentFieldNull(argumentName: string, fieldName: string) {
        let msg = `Argument ${argumentName} ${fieldName} field can not be null or empty.`
        return new Error(msg);
    },
    dataFieldValueNotArray(dataField:string) {
        let msg = `Type of dataitem ${dataField} field is not array.`;
        return new Error(msg);
    }
}