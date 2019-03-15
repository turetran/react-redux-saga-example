export const CHANGE_MYAGE='ADD_MYAGE'

let changes = 1

export const ChangeMyAge = (myage) => ({
    type: CHANGE_MYAGE,
    myage: myage,
    changes: changes++
})
