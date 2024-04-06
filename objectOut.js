function findAddress(inputObject) {
    // Check if the input object contains the required properties
    const name = inputObject.name || '__';
    const id = inputObject.id || '__';
    const reg = inputObject.reg || '__';

    // Construct the output string
    const output = `${name},${id},${reg}`;

    return output;
}

// Test cases
const input1 = {
     name: 'ahsan',
    id: 180119,
    reg: 101792 
}
console.log(findAddress(input1)); // Output: ahsan,180119,101792

const input2 = 
{ name: 'ahsan', 
id: 180119,
}
console.log(findAddress(input2)); // Output: ahsan,__,101792

