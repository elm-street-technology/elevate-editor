export default {
  "& strong": {
    fontWeight: 600,
  },
  "& em": {
    fontStyle: "italic",
  },
  "& h1": {
    color: "#121130",
    fontWeight: "700",
    letterSpacing: ".2px",
    lineHeight: "2.2rem",
    fontSize: "32px",
    margin: "1em auto",
  },

  "& h2": {
    fontSize: "26px",
    fontWeight: "700",
    lineHeight: "2.2rem",
    margin: "1em auto",
  },

  "& h3": {
    fontSize: "21px",
    fontWeight: "700",
    lineHeight: "2.2rem",
    margin: "1em auto",
  },

  "& h4": {
    fontSize: "21px",
    fontWeight: "700",
    lineHeight: "2.2rem",
    margin: "1em auto",
  },

  "& h5": {
    fontSize: "21px",
    fontWeight: "700",
    lineHeight: "2.2rem",
    margin: "1em auto",
  },

  "& h6": {
    fontSize: "21px",
    fontWeight: "700",
    lineHeight: "2.2rem",
    margin: "1em auto",
  },

  "& a": {
    color: "#121130",
    textDecoration: "underline",
  },

  "& ol": {
    position: "relative",
    margin: "20px 0 20px 20px",
    counterReset: "item",
  },

  "& ol li": {
    counterIncrement: "item",
    paddingLeft: "24px",
    paddingBottom: ".25em",

    "&:before": {
      content: 'counter(item) "."',
      position: "absolute",
      left: "0",
      fontWeight: "700",
    },
  },

  "& ul": {
    margin: "20px 0 20px 20px",
    listStyleType: "disc",
  },

  "& ul li": {
    marginLeft: "18px",
    paddingBottom: ".25em",
  },

  "& p": {
    marginTop: "4px",
    marginBottom: "8px",
    lineHeight: "1.35em",
  },

  "& img": {
    display: "block",
    maxWidth: "100%",
    marginBottom: "16px",
  },

  "& b": {
    fontWeight: "600",
  },
  "& blockquote": {
    paddingLeft: 24,
    margin: "30px 25px",
    fontStyle: "italic",
    borderLeft: "4px solid #ccd2d8",
  },
};
