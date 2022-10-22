import SupplierService from './service';

const START_LOAD = 'setStartLoad';
const FINISH_LOAD = 'setFinishLoad';
const SET_SUPPLIERS = 'setSuppliers';
const SET_SUPPLIER = 'setSupplier';
const SET_COUNT = 'setCount';
const SET_ERROR = 'setError';

export default {
  getSuppliers(context, data) {
    context.commit(START_LOAD);
    SupplierService.getSuppliers(data)
      .then(response => {
        context.commit(SET_COUNT, response?.count);
        context.commit(SET_SUPPLIERS, response?.results);
      })
      .catch(error => context.commit(SET_ERROR, error))
      .finally(() => {
        context.commit(FINISH_LOAD)
      });
  },
  getSupplier(context, data) {
    const supplier = context.state.suppliers.find(item => item.id === data);
    if (supplier) {
      context.commit(SET_SUPPLIER, supplier);
    } else {
      context.commit(START_LOAD);
      SupplierService.getSupplier(data)
          .then(response => context.commit(SET_SUPPLIER, response))
          .catch(error => context.commit(SET_ERROR, error))
          .finally(() => {
            context.commit(FINISH_LOAD)
          });
    }
  },
  clearError(context) {
      context.commit(SET_ERROR, null);
  }
};
