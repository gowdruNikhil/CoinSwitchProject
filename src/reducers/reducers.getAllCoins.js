let initialState = {
    coinsList: [],
    filterList: [],
    filteredCoins: [],
    status: 'PENDING'
}

export default function getAllCoinsReducer(state = initialState, action) {
    switch(action.type){
        case "REQUEST_ALL_COINS_LIST":
            return {
                ...state,
                status: 'PENDING'
            }
        case 'GET_COINS_LIST_SUCCESS':
            return {
                ...state,
                coinsList: action.data,
                status: 'SUCCESS'
            }
        default:
            return { ...state };
    }
}