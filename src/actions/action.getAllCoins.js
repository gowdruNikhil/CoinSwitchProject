import { GET_ALL_COINS } from '../constants';
import { getAllCoins } from '../services/services.getAllCoins';
export function getAllCoinsList() {
    return dispatch => {
        dispatch(requestgetAllCoinsList());
        let url = GET_ALL_COINS;
        return getAllCoins(url)
        .then(response => {
          dispatch(getAllCoinsListSuccess(response.data));
          dispatch(updateFilteredArray());
        })
        .catch(error => {
          dispatch(getAllCoinsListFailure(error.message));
        });
    };
  }

  function requestgetAllCoinsList(data) {
    return {
      type: 'REQUEST_ALL_COINS_LIST',
      data
    };
  }

  function getAllCoinsListSuccess(data) {
    return {
      type: 'GET_COINS_LIST_SUCCESS',
      data
    };
  }

  function getAllCoinsListFailure(errorMessage) {
    return {
      type: 'GET_COINS_LIST_FAILURE',
      errorMessage
    };
  }

  function updateFilteredArray() {
    return (dispatch, getState) => {
      const state = getState();
      let coinsData = state.getAllCoinsReducer.coinsList;
      let filterListData = state.getAllCoinsReducer.filterList;
      let filteredCoins = state.getAllCoinsReducer.filteredCoins;
      if(filterListData.length > 0 ){
        filteredCoins.length = 0;
        for(let x in filterListData){
          filteredCoins.push(coinsData.filter(item => item.id === filterListData[x])[0]);
        }
      }
    }
  }

  export function setFilterCoinsList(id) {
    return (dispatch, getState) => {
        const state = getState();
        let coinsData = state.getAllCoinsReducer.coinsList;
        let filterListData = state.getAllCoinsReducer.filterList;
        let filteredCoins = state.getAllCoinsReducer.filteredCoins;
        const indexValue = filterListData.indexOf(id);
        if (indexValue > -1) {
            filterListData.splice(indexValue, 1);
            let list = coinsData.filter(item => item.id === id);
            filteredCoins.splice(indexValue, 1);
        } else {
            filterListData.push(id);
            let list = coinsData.filter(item => item.id === id);
            filteredCoins.push(list[0]);

        }
    }
  }