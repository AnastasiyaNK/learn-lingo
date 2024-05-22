export const reactSelectStyles = {
  control: (styles) => ({
    ...styles,
    width: "220px",
    border: "none",
    borderRadius: "14px",
    fontSize: "18px",
    height: "48px",
    backgroundColor: "#f7f7fb",
    appearance: "none",
    fontWeight: 500,
    lineHeight: 1.11,
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: "Roboto",
    margin: 0,
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "1.11",
    color: "#121417",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  valueContainer: (styles) => ({
    ...styles,
    paddingLeft: "18px",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#121417",
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    color:"#121417",
    backgroundColor: isSelected ? "#f0aa8d" : "#fff",
   
  }),
};


    
