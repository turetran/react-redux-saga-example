export const CHANGE_MYAGE='ADD_MYAGE'
export const CHANGE_MYAGE_SAGA='ADD_MYAGE_SAGA'

let changes = 1

export const ChangeMyAge = (myage) => ({
    type: CHANGE_MYAGE,
    myage: myage,
    changes: changes++
})

export const ChangeMyAgeSaga = (myage) => ({
    type: CHANGE_MYAGE_SAGA,
    myage: myage,
    changes: changes
})
