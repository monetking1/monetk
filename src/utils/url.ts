export function url(path = ""): string {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const normalized = path.replace(/^\//, "");

    console.log(normalized ? `${base}/${normalized}` : `${base}/`)

    return normalized ? `${base}/${normalized}` : `${base}/`;
}
