import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; //eisagwgh tou reducer pou parexete mazi me to redux-form//*
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm
  //apo8hkeuete me auto to key name to state object pou krateite apo to redux//
});
