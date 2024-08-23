import kaboomJsFile from "../../../kaplay/dist/kaboom.js?raw";
import { $version } from "../../stores";

const versions = {
    v4000:
        "https://cdn.jsdelivr.net/npm/kaplay@4000.0.0-alpha.1/dist/kaplay.js",
    v3001: "https://cdn.jsdelivr.net/npm/kaplay@3001.0.0-alpha.21",
};

export const wrapCode = (code: any) => {
    return `
<!DOCTYPE html>
<head>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,
html {
    width: 100%;
}

body {
            overflow: hidden;
            background: #171212;
        }
        </style>
</head>
<body>
<script>
${kaboomJsFile}
</script>

<script type="module">
${code}
</script>
</body>
`;
};
