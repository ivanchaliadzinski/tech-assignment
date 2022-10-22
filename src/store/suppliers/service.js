import FetchService from "@/utils/FetchService";
import API from '@/constants/API';

class SupplierService {
    getSuppliers(data) {
        return FetchService.fetch({
            endpoint: API.SUPPLIERS,
            params: data,
      })
    }

    getSupplier(data) {
        return FetchService.fetch({
            endpoint: `${API.SUPPLIERS}${data}/`,
        });
    }
}

export default new SupplierService();
