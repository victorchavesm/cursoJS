function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpar(23)
console.log(res)

// ou somente console.log(parimpar(23))