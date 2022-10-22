import QuoteService from './service';

const START_LOAD = 'setStartLoad';
const FINISH_LOAD = 'setFinishLoad';
const SET_QUOTES = 'setQuotes';
const SET_COUNT = 'setCount';
const SET_ERROR = 'setError';

export default {
  getQuotes(context, data) {
    context.commit(START_LOAD);
      QuoteService.getQuotes(data)
      .then(response => {
        context.commit(SET_COUNT, response?.count);
        context.commit(SET_QUOTES, response?.results);
      })
      .catch(error => {
        context.commit(SET_ERROR, error)
      })
      .finally(() => {
        context.commit(FINISH_LOAD)
      });
  },
  clearError(context) {
      context.commit(SET_ERROR, null);
  }
};
