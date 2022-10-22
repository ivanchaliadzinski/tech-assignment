export default function exportErrorMessage(error) {
    return (typeof error.errorMessage === 'string')
        ? error.errorMessage
        : error.errorMessage?.["non_field_errors"][0];
}
