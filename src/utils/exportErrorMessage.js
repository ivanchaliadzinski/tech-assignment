export default function exportErrorMessage(error) {
    return (typeof error.errorMessage === 'string')
        ? error.errorMessage
        : Object.keys(error.errorMessage).map(el=>error.errorMessage[el][0]).join(' ');
}
