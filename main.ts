input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    Symbol = randint(1, 3)
    if (Symbol == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Symbol == 2) {
        basic.showIcon(IconNames.Target)
    } else if (Symbol == 3) {
        basic.showIcon(IconNames.Square)
    }
})
let Symbol = 0
basic.showIcon(IconNames.Happy)
