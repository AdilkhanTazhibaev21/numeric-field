import React from "react";
import { Box, ButtonGroup, Button } from "@material-ui/core";
import { numericArrayWith } from "../../common/fields";
import { useStyles } from "./styles";
export default function Buttons() {
  const classes = useStyles();
  const cell = numericArrayWith(7);
  const [active, setActive] = React.useState(0);
  return (
    <div className="buttons">
      <Box
        className={classes.group}
        sx={{
          display: "grid",
        }}
      >
        {cell.columnArray.map((column, i) => {
          if (cell.obj[i].length) {
            return (
              <ButtonGroup
                key={i}
                variant="outlined"
                aria-label="outlined button group"
              >
                {cell.obj[i].map((field, index) => (
                  <Button
                    key={index}
                    className={active == field ? classes.active : classes.root}
                    onClick={() => {
                      setActive(field);
                    }}
                  >
                    {field}
                  </Button>
                ))}
              </ButtonGroup>
            );
          }
        })}
      </Box>
    </div>
  );
}
