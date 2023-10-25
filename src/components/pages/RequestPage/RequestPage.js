import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import MaterialTable, { MTableToolbar } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, TextField, Button } from "@material-ui/core";
import * as deptandcostActions from "./../../../actions/deptandcost.action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 60,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  margin: {
    marginTop: "0.4rem",
    marginRight: "0.4rem",
    margin: theme.spacing(0.3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deptandcostReducer = useSelector(
    ({ deptandcostReducer }) => deptandcostReducer
  );

  useEffect(() => {
    dispatch(deptandcostActions.getDeptAndCosts());
  }, []);

  // "ST_N6L3": "TEST      ",
  // "ST_EMAIL": "#N/A                                              ",
  // "ST_COSTC": "S101      ",
  // "ST_CODE": "D9000001  ",
  // "ST_EPNM": "Mr.                      ",
  // "ST_ENAME": "JUGKRIS             ",
  // "ST_ELNAME": "SANGJARUSWONK       "

  const columns = [
    {
      title: "ST_N6L3",
      field: "ST_N6L3",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_N6L3}
        </Typography>
      ),
    },
    {
      title: "ST_EMAIL",
      field: "ST_EMAIL",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_EMAIL}
        </Typography>
      ),
    },
    {
      title: "ST_COSTC",
      field: "ST_COSTC",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_COSTC}
        </Typography>
      ),
    },
    {
      title: "ST_CODE",
      field: "ST_CODE",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_CODE}
        </Typography>
      ),
    },
    {
      title: "ST_EPNM",
      field: "ST_EPNM",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_EPNM}
        </Typography>
      ),
    },
    {
      title: "ST_ENAME",
      field: "ST_ENAME",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_ENAME}
        </Typography>
      ),
    },
    {
      title: "ST_ELNAME",
      field: "ST_ELNAME",
      headerStyle: { maxWidth: 100, whiteSpace: "nowrap", textAlign: "center" },
      cellStyle: {
        textAlign: "center",
        borderLeft: 1,
        borderRight: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "#E0E0E0",
        borderStyle: "solid",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "12px",
        paddingTop: "12px",
      },
      render: (item) => (
        <Typography variant="body1" noWrap>
          {item.ST_ELNAME}
        </Typography>
      ),
    },
  ];

  return (
    <div className={classes.root}>
      {/* Grid */}
      {/* <p>#Debug prnumber {JSON.stringify(prnumber)}</p> */}

      <MaterialTable
        id="root_pr"
        title={`Staff list`}
        columns={columns}
        data={deptandcostReducer.result ? deptandcostReducer.result : []}
        options={{
          // exportButton: true,
          // toolbar: false,
          pageSize: 10,
          paging: true,
          headerStyle: {
            textAlign: "center",
            borderLeft: 1,
            borderRight: 1,
            borderBottom: 1,
            borderTop: 1,
            borderColor: "#E0E0E0",
            borderStyle: "solid",
            paddingLeft: "6px",
            paddingRight: "6px",
            paddingBottom: "12px",
            paddingTop: "12px",
            // backgroundColor: "red",
            // whiteSpace: "normal",
            // wordWrap: "break-word",
            // wordBreak: "break-all"
          },
          fixedColumns: {
            // left: 2
          },
        }}
      />
    </div>
  );
};
