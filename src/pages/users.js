import * as React from "react";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    UrlField,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { useMediaQuery } from '@mui/material';

export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {
                !isSmall ?
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <UrlField source="email" />
                    <EditButton />
                </Datagrid>
                :
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record =>record.email}
                />
            }
        </List>
    );
}

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);