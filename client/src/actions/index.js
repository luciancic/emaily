import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const handlePaymentToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/payment', token);
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (survey, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', survey);
  
  history.push('/dashboard');

  dispatch({ type: FETCH_USER, payload: res.data });
}