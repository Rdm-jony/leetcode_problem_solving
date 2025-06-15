{
    function plusOne(digits: number[]): number[] {
        if (digits[digits.length - 1] != 9) {
            digits[digits.length - 1] += 1
            return digits;
        } else {
            for (let i = digits.length - 1; i >= 0; i--) {
                if (digits[i] != 9) {

                    digits[i] += 1
                    return digits
                }
                if (i == 0 && digits[i] == 9) {
                    digits[i] = 1;
                    digits[digits.length] = 0
                    return digits
                }
                digits[i] = 0



            }
        }



    }
    console.log(plusOne([9, 8, 9]
    ))

}