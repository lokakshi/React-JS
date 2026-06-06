// we write a function whose name is test and takes 2 argument 1st is string and 2nd is a function
// the string is the name of the test and the function is the actual test case
// we use expect to check if the result of the function is equal to the expected value
import { sum } from "../src/sum";
test("Sum of 2 numbers", () => {
    const result = sum(2, 3);
    // asseration is the process of verifying if the result of the function is equal to the expected value
    expect(result).toBe(5);
    // this is use to verify if the result is equal to the expected value
})