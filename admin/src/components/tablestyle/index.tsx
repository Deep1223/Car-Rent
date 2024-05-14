type BorderBottomStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';

const TableStyles = {
    headRow: {
        style: {
            fontWeight: 'bold', 
            minHeight: '38px',                
        },
    },
    rows: {
        style: {
            minHeight: '38px', 
            borderBottomStyle: 'none !important' as BorderBottomStyle,
            backgroundColor: 'inherit',
            '&:nth-of-type(odd)': {
                backgroundColor: 'rgba(237, 244, 255, 0.5)', 
            },
            '&:hover': {
                backgroundColor: '#edf4ff', 
            },
        },
    },
};

export default TableStyles;
