import { makeStyles } from "@material-ui/core";

//variant 2
export const useStyles = makeStyles(() => ({
  group: {
    "& .MuiButtonGroup-root:not(:first-child):not(:last-child)": {
      "& button": {
        border: "1px solid #c1d5f3",
        marginTop: "-1px",
        "&.MuiButtonGroup-groupedOutlinedHorizontal:not(:first-child):not(:last-child)":
          {
            border: "1px solid #c1d5f3",
            borderRadius: 5,
            zIndex: 2,
          },
        "&.MuiButtonGroup-groupedOutlinedHorizontal:first-child": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 5,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 5,
          border: "1px solid #c1d5f3",
        },
        "&.MuiButtonGroup-groupedOutlinedHorizontal:last-child": {
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 0,
          border: "1px solid #c1d5f3",
        },
      },
    },
    "& .MuiButtonGroup-root:first-child": {
      "& button": {
        "&.MuiButtonGroup-groupedOutlinedHorizontal:not(:first-child):not(:last-child)":
          {
            border: "1px solid #c1d5f3",
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
          },
        "&.MuiButtonGroup-groupedOutlinedHorizontal:first-child": {
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 0,
          border: "1px solid #c1d5f3",
        },
        "&.MuiButtonGroup-groupedOutlinedHorizontal:last-child": {
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 0,
          border: "1px solid #c1d5f3",
        },
      },
    },
    "& .MuiButtonGroup-root:last-child": {
      "& button": {
        marginTop: "-1px",
        "&.MuiButtonGroup-groupedOutlinedHorizontal:not(:first-child):not(:last-child)":
          {
            border: "1px solid #c1d5f3",
            borderBottomRightRadius: 0,
            borderRadius: 5,
            zIndex: 2,
            borderBottomLeftRadius: 0,
          },
        "&.MuiButtonGroup-groupedOutlinedHorizontal:first-child": {
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 0,

          border: "1px solid #c1d5f3",
        },
        "&.MuiButtonGroup-groupedOutlinedHorizontal:last-child": {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 5,
          border: "1px solid #c1d5f3",
        },
      },
    },
  },
  active: {
    border: "none !important",
    padding: 5,
    "& .MuiButton-label": {
      background: "#a3ddd0",
      borderRadius: 5,
      transition: ".5s ease",
    },
    "& .MuiTouchRipple-root": {
      display: "none !important",
    },
  },
  root: {
    padding: 5,
    "& .MuiTouchRipple-root": {
      display: "none !important",
    },
  },
}));
