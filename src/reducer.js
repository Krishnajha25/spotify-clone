export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token:"BQBGCQ7sjtR_jiDTnzxYgkogUN6xe4STSgJuxdZ6AqYoqhHh1WlYRIUN4ozFvrryPJ2jPP4gVu6VpZNDuqZG85j2Vant32_6Viz1BzlOxH7SyQmgYmG4cUWOhlN9Isak3DUbg-bCFO3utEWMJobA_EvDj16x6zwxIYqGVxvFMgESgnw8k57E",
}

const reducer = (state, action) => {
    // console.log(action);

    // Action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default reducer