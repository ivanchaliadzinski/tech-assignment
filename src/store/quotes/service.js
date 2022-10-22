import FetchService from "@/utils/FetchService";
import API from '@/constants/API';

class QuoteService {
    getQuotes(data) {
        return FetchService.fetch({
            endpoint: API.QUOTES,
            params: data,
      })
    }
}

export default new QuoteService();
