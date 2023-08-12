const { useState } = require("react");

export default function UrlProvider() {
    const [urlToShort, setUrlToShort] = useState('')

    return {
        urlToShort,
        setUrlToShort
    }
}