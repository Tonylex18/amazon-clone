import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { ReviewTitle } from "../review/ReviewTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isAdmin" source="isAdmin" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput source="review.id" reference="Review" label="reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
