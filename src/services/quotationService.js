import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/quotations";

function quotationUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getQuotations() {
  http.get(apiEndPoint + "/get-all");
}

export function getQuotation(quotationId) {
  http.get(quotationUrl(quotationId));
}

export function saveQuotation(quotation) {
  if (quotationId._id) {
    const body = { ...quotation };
    delete body._id;
    return http.put(quotationUrl(quotation._id), body);
  }

  // otherwise it is a new object. Post the new quotation.
  return http.post(apiEndPoint, quotation);
}

export function deleteQuotation(quotationId) {
  http.delete(quotationUrl(quotationId));
}
