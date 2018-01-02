import React from "react";
import propTypes from "prop-types";
import {TableRow, TableRowColumn} from "material-ui/Table";
import {red900} from "material-ui/styles/colors";
import {Link} from "react-router-dom";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";

const ListTable = props => {
  return props
    .storeList
    .map((store, index) => {
      return (
        <TableRow key={store.StoreKey}>
          <TableRowColumn>
            <Avatar src={store.logo.url}/>
          </TableRowColumn>
          <TableRowColumn>{store.name}</TableRowColumn>
          <TableRowColumn>
            <Link to={`/create/menu/${store.StoreKey}`}>
              <IconButton
                tooltipPosition="bottom-left"
                tooltip="編輯菜單"
                iconClassName="fa fa-gear"/>
            </Link>
            <IconButton
              tooltipPosition="bottom-left"
              tooltip="刪除店家"
              iconClassName="fa fa-times-circle"
              iconStyle={{
              color: red900
            }}
              onClick={() => props.deleteStore(store.StoreKey)}/>
          </TableRowColumn>
        </TableRow>
      );
    });
};

ListTable.propTypes = {
  deleteStore: propTypes.func.isRequired
};

export default ListTable;
