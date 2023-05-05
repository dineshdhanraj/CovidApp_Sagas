const initial={
  country5:'SA',
  webData:{
    country:'',
    updated:'',
  }
}

export default function reducers(state = initial,action){

  switch(action.type){
    case 'updateCountry':
    console.log('I AM UPDATE COUNTRY', action.payload,state);
    return {...state,country5:action.payload};
    case 'updateDetails': console.log('I M UPDATE DETAILS', action.payload);
    return {...state,webData:action.payload};
    default:
    return state;
  }

}