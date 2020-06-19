import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp2768478Reducer from '../features/SignUp2768478/redux/reducers'
import SignUp2868477Reducer from '../features/SignUp2868477/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp2768478: SignUp2768478Reducer,
SignUp2868477: SignUp2868477Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});