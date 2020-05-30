const smartgrid = require('smart-grid');

const settings = {
    filename: "_smart-grid",
    columns: 24,
    outputStyle: 'sass',
    offset: '32px',
    container: {
        maxWidth: '1120px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./app/sass', settings);