function intro() {
    let a = 1 + 3
    console.log("Hello World")
    console.log("1+3 =" + a)
}
intro()

function intro2(paramName) {
    let vorName = "SuperCoder"
    console.log("Hi, " + vorName + ". Mein Name ist " + paramName + ".")
}
intro2("Dennis")

function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". " + "Ich bin" + alter + " Jahre alt. " + "Ich komme aus " + stadt + ".")
}
intro3("SuperCoder", "Düsseldorf", 27)

function math(a, b) {
    console.log(a * b)
    console.log(a / b)
}
math(10, 2)
math(100, 100)
math(30, 20)
math(5, 0)
math(45, 173)
math(1, 1000)
