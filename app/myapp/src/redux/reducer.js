var obj = [
    {name: '嘻嘻', age: 18}
]

export function data(state=obj[0].age, action) {
    switch(action.type) {
        case 'ADD':
            return state+action.data
            break
        case 'DEL':
            return state-action.data
        default:
            return state;
            break
    }
}