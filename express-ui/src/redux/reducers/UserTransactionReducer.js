 const INITIAL_STATE = {
    transactionList: [],
    transactionByID: [],
    loading: false,
    };
    
    export const UserTransactionReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case "FETCH_START":
          return {
            ...state,
            loading: true,
          };
        case "FETCH_SUCCESS":
          return {
            ...state,
            loading: false,
          };
        case "FETCH_TRANSACTION_BY_ID":
          return {
            ...state,
            transactionByID: action.payload,
          };
        default:
          return state;
      }
    };
    