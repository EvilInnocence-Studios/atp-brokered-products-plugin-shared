// Templates have the format `https://example.com/{ID}/{NAME}...` or `https://example.com/{URL}...` with placeholders for data
// Data strings have the format `ID:123,NAME:Sample Product,...`
export const generateBrokeredProductUrl = (template: string, data:string) => {
    const placeholders = data.split(',').reduce((acc, item) => {
        const [key, value] = item.split(':');
        acc[key] = value;
        return acc;
    }, {} as Record<string, string>);

    return template.replace(/{(\w+)}/g, (_, key) => placeholders[key] || '');
}
