/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttendenceUpdateFormInputValues = {
    phone?: string;
    email?: string;
    paid?: boolean;
};
export declare type AttendenceUpdateFormValidationValues = {
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    paid?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendenceUpdateFormOverridesProps = {
    AttendenceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    paid?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AttendenceUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttendenceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attendence?: any;
    onSubmit?: (fields: AttendenceUpdateFormInputValues) => AttendenceUpdateFormInputValues;
    onSuccess?: (fields: AttendenceUpdateFormInputValues) => void;
    onError?: (fields: AttendenceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendenceUpdateFormInputValues) => AttendenceUpdateFormInputValues;
    onValidate?: AttendenceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttendenceUpdateForm(props: AttendenceUpdateFormProps): React.ReactElement;
